import { useEffect, useState } from 'react'
import { getProfessionals } from '../api'
import type { Professional } from '../types'
import ProfessionalModal from './ProfessionalModal'

interface TeamSectionProps {
  specialties: string[]
}

function TeamSection({ specialties }: TeamSectionProps) {
  const [professionals, setProfessionals] = useState<Professional[]>([])
  const [selectedSpecialty, setSelectedSpecialty] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProfessional, setSelectedProfessional] =
    useState<Professional | null>(null)
  const [loading, setLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    async function loadProfessionals() {
      try {
        setHasError(false)

        const data = await getProfessionals()

        setProfessionals(data)
      } catch (error) {
        console.error(error)
        setHasError(true)
      } finally {
        setLoading(false)
      }
    }

    void loadProfessionals()
  }, [])

  const normalizedSearch = searchTerm.trim().toLowerCase()

  const filteredProfessionals = professionals.filter((professional) => {
    const matchesSpecialty =
      !selectedSpecialty ||
      professional.especialidade === selectedSpecialty

    const matchesName =
      !normalizedSearch ||
      professional.nome.toLowerCase().includes(normalizedSearch)

    return matchesSpecialty && matchesName
  })

  const specialtyOptions = ['Todos', ...specialties]

  let feedbackTitle = ''
  let feedbackDescription = ''

  if (loading) {
    feedbackTitle = 'Carregando profissionais...'
  } else if (hasError) {
    feedbackTitle = 'Não foi possível carregar os profissionais.'
  } else if (filteredProfessionals.length === 0) {
    feedbackTitle = 'Nenhum profissional encontrado.'
    feedbackDescription =
      'Tente outro nome ou selecione uma especialidade diferente.'
  }

  const showFeedback =
    loading || hasError || filteredProfessionals.length === 0

  return (
    <>
      <section
        id="equipe"
        className="relative overflow-hidden bg-[#4A3428] px-5 py-16 md:px-8 md:py-20"
      >
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-[0.06]
            [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8BE86]">
              Nossa equipe
            </span>

            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Escolha uma especialidade e encontre o profissional ideal.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
              Consulte os profissionais disponíveis em cada área, filtre pelo
              nome e visualize os horários de atendimento em uma experiência
              mais elegante, organizada e intuitiva.
            </p>
          </div>

          <div
            className="
              mt-10
              rounded-[1.75rem]
              border border-white/35
              bg-white/18
              p-5
              shadow-[0_10px_30px_rgba(0,0,0,0.10)]
              backdrop-blur-xl
              md:p-6
            "
          >
            <div className="grid gap-5 lg:grid-cols-[1.45fr_0.55fr] lg:items-end">
              <div>
                <label
                  htmlFor="professional-search"
                  className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75"
                >
                  Buscar profissional
                </label>

                <input
                  id="professional-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Digite o nome do profissional"
                  className="
                    mt-3 w-full
                    rounded-full
                    border border-white/35
                    bg-white/18
                    px-5 py-3.5
                    text-sm text-white
                    outline-none
                    backdrop-blur-xl
                    transition-all duration-300
                    placeholder:text-white/55
                    focus:border-[#D8BE86]
                    focus:bg-white/25
                  "
                />
              </div>

              <div
                className="
                  rounded-[1.5rem]
                  border border-white/35
                  bg-white/18
                  px-5 py-4
                  shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                  backdrop-blur-xl
                "
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D8BE86]">
                  Profissionais disponíveis
                </p>

                <p className="mt-2 text-2xl font-semibold text-white">
                  {filteredProfessionals.length}
                </p>

                <p className="mt-1 text-xs text-white/65">
                  {filteredProfessionals.length === 1
                    ? 'resultado encontrado'
                    : 'resultados encontrados'}
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto pb-1">
              <div className="flex min-w-max gap-3">
                {specialtyOptions.map((specialty) => {
                  const value = specialty === 'Todos' ? '' : specialty
                  const isActive = selectedSpecialty === value

                  return (
                    <button
                      key={specialty}
                      type="button"
                      onClick={() => setSelectedSpecialty(value)}
                      className={`
                        cursor-pointer
                        rounded-full
                        border
                        px-5 py-2.5
                        text-xs font-semibold uppercase
                        tracking-[0.16em]
                        transition-all duration-300
                        ${
                          isActive
                            ? 'border-[#D8BE86] bg-[#D8BE86] text-[#4A3428]'
                            : 'border-white/35 bg-white/18 text-white/80 backdrop-blur-xl hover:border-white/50 hover:bg-white/25 hover:text-white'
                        }
                      `}
                    >
                      {specialty}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-10">
            {showFeedback ? (
              <div
                className="
                  rounded-[1.75rem]
                  border border-white/35
                  bg-white/18
                  p-8
                  text-center
                  shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                  backdrop-blur-xl
                "
              >
                <p className="font-medium text-white">
                  {feedbackTitle}
                </p>

                {feedbackDescription && (
                  <p className="mt-2 text-sm text-white/65">
                    {feedbackDescription}
                  </p>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProfessionals.map((professional) => (
                  <article
                    key={professional.id}
                    className="
                      group relative
                      h-[520px]
                      overflow-hidden
                      rounded-[2rem]
                      bg-[#DCCEC1]
                      shadow-[0_18px_40px_rgba(0,0,0,0.16)]
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:shadow-[0_26px_55px_rgba(0,0,0,0.24)]
                    "
                  >
                    <img
                      src={professional.foto}
                      alt={`Foto ilustrativa de ${professional.nome}`}
                      className="
                        absolute inset-0
                        h-full w-full
                        object-cover
                        transition-transform duration-500
                        group-hover:scale-[1.04]
                      "
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />

                    <div
                      className="
                        absolute left-4 top-4
                        rounded-full
                        border border-white/40
                        bg-white/20
                        px-4 py-2
                        text-[10px] font-semibold uppercase
                        tracking-[0.20em]
                        text-white
                        backdrop-blur-md
                      "
                    >
                      {professional.especialidade}
                    </div>

                    <div
                      className="
                        absolute inset-x-4 bottom-4
                        rounded-[1.75rem]
                        border border-white/35
                        bg-white/18
                        p-5
                        text-[#1F1B18]
                        shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                        backdrop-blur-xl
                        transition-all duration-300
                        group-hover:bg-white/25
                      "
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-[#1F1B18]">
                            {professional.nome}
                          </h3>

                          <p className="mt-1 text-sm text-[#1F1B18]/60">
                            {professional.crm}
                          </p>
                        </div>

                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C6A86A]" />
                      </div>

                      <p className="mt-4 text-sm leading-6 text-[#1F1B18]/80">
                        {professional.descricao}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#4A3428]">
                        <span className="h-2 w-2 rounded-full bg-[#C6A86A]" />
                        cuidado premium
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProfessional(professional)
                        }
                        className="
                          mt-5 w-full
                          cursor-pointer
                          rounded-full
                          bg-[#4A3428]
                          px-5 py-3
                          text-sm font-semibold text-white
                          transition-all duration-300
                          hover:-translate-y-0.5
                          hover:bg-[#C6A86A]
                          hover:text-[#1F1B18]
                          hover:shadow-[0_10px_24px_rgba(198,168,106,0.25)]
                        "
                      >
                        Ver disponibilidade
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          <p className="mt-8 text-center text-xs leading-5 text-white/45">
            Profissionais, registros e informações fictícios para fins
            acadêmicos.
          </p>
        </div>
      </section>

      {selectedProfessional && (
        <ProfessionalModal
          professional={selectedProfessional}
          onClose={() => setSelectedProfessional(null)}
        />
      )}
    </>
  )
}

export default TeamSection