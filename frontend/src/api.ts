import type { Professional } from './types'

const API_URL = import.meta.env.DEV
  ? 'http://localhost:3000'
  : ''

export async function getProfessionals(
  nome = '',
  especialidade = '',
): Promise<Professional[]> {
  const params = new URLSearchParams()

  if (nome) {
    params.append('nome', nome)
  }

  if (especialidade) {
    params.append('especialidade', especialidade)
  }

  const query = params.toString()

  const response = await fetch(
    `${API_URL}/api/profissionais${query ? `?${query}` : ''}`,
  )

  if (!response.ok) {
    throw new Error(
      'Não foi possível carregar os profissionais.',
    )
  }

  return response.json()
}

export async function getSpecialties(): Promise<string[]> {
  const response = await fetch(
    `${API_URL}/api/especialidades`,
  )

  if (!response.ok) {
    throw new Error(
      'Não foi possível carregar as especialidades.',
    )
  }

  return response.json()
}