import cors from 'cors'
import express from 'express'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

interface Availability {
  data: string
  horarios: string[]
}

interface Professional {
  id: number
  nome: string
  especialidade: string
  crm: string
  foto: string
  descricao: string
  disponibilidade: Availability[]
}

const app = express()
const PORT = 3000

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const dataPath = path.join(
  dirname,
  '../data/professionals.json',
)

app.use(cors())

async function getProfessionals(): Promise<Professional[]> {
  const file = await readFile(dataPath, 'utf-8')

  return JSON.parse(file) as Professional[]
}

app.get('/', (_req, res) => {
  res.json({
    message: 'Nit Med API',
  })
})

app.get('/api/profissionais', async (req, res) => {
  try {
    const professionals = await getProfessionals()

    const nome = String(req.query.nome ?? '')
      .trim()
      .toLowerCase()

    const especialidade = String(
      req.query.especialidade ?? '',
    )
      .trim()
      .toLowerCase()

    const result = professionals.filter((professional) => {
      const matchesName =
        !nome ||
        professional.nome
          .toLowerCase()
          .includes(nome)

      const matchesSpecialty =
        !especialidade ||
        professional.especialidade.toLowerCase() ===
          especialidade

      return matchesName && matchesSpecialty
    })

    res.json(result)
  } catch {
    res.status(500).json({
      message: 'Erro ao carregar os profissionais.',
    })
  }
})

app.get('/api/especialidades', async (_req, res) => {
  try {
    const professionals = await getProfessionals()

    const specialties = [
      ...new Set(
        professionals.map(
          (professional) =>
            professional.especialidade,
        ),
      ),
    ]

    res.json(specialties)
  } catch {
    res.status(500).json({
      message: 'Erro ao carregar as especialidades.',
    })
  }
})

app.listen(PORT, () => {
  console.log(
    `Nit Med API running on http://localhost:${PORT}`,
  )
})