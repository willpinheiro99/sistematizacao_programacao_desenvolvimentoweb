export interface Availability {
  data: string
  horarios: string[]
}

export interface Professional {
  id: number
  nome: string
  especialidade: string
  crm: string
  foto: string
  descricao: string
  disponibilidade: Availability[]
}