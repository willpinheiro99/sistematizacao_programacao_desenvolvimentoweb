import express from 'express'
import professionalsData from '../data/professionals.json' with { type: 'json' }

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

const professionals = professionalsData as Professional[]

app.get('/', (_req, res) => {
  res.json({
    message: 'Nit Med API',
  })
})

app.get('/api/profissionais', (req, res) => {
  try {
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

app.get('/api/especialidades', (_req, res) => {
  try {
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

export default app