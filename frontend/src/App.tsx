import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TeamSection from './components/TeamSection'
import Footer from './components/Footer'
import { getSpecialties } from './api'

const services = [
  {
    title: 'Atendimento médico',
    description:
      'Consultas com profissionais qualificados em um ambiente acolhedor e organizado.',
  },
  {
    title: 'Exames laboratoriais',
    description:
      'Procedimentos realizados com foco em praticidade, segurança e confiança.',
  },
  {
    title: 'Exames de imagem',
    description:
      'Estrutura pensada para proporcionar conforto e cuidado durante todo o atendimento.',
  },
  {
    title: 'Nutrição e bem-estar',
    description:
      'Orientação personalizada para apoiar uma rotina mais equilibrada e saudável.',
  },
]

const specialtyDescriptions: Record<string, string> = {
  Cardiologia:
    'Cuidado especializado para prevenção, acompanhamento e saúde cardiovascular.',

  'Clínica Geral':
    'Atendimento completo para avaliação, prevenção e acompanhamento da saúde.',

  Nutrição:
    'Orientação nutricional personalizada para saúde, equilíbrio e qualidade de vida.',

  Dermatologia:
    'Cuidados especializados para prevenção, diagnóstico e saúde da pele.',

  Pediatria:
    'Acompanhamento dedicado à saúde e ao desenvolvimento de crianças e adolescentes.',

  Ortopedia:
    'Avaliação, prevenção e tratamento de alterações e lesões do sistema musculoesquelético.',
}

const brazilianStates = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
]

function App() {
  const [specialties, setSpecialties] = useState<string[]>([])
  const [loadingSpecialties, setLoadingSpecialties] = useState(true)
  const [specialtiesError, setSpecialtiesError] = useState(false)

  useEffect(() => {
    async function loadSpecialties() {
      try {
        setSpecialtiesError(false)

        const data = await getSpecialties()

        setSpecialties(data)
      } catch (error) {
        console.error(error)
        setSpecialtiesError(true)
      } finally {
        setLoadingSpecialties(false)
      }
    }

    void loadSpecialties()
  }, [])

  return (
    <>
      <Header />

      <main>
        <Hero />

        <section
          id="servicos"
          className="relative overflow-hidden px-5 py-16 md:px-8 md:py-20"
        >
          <img
            src="/images/sections/services-bg-icarai.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-[#F5F1EB]/30" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1EB]/35 via-transparent to-[#F5F1EB]/20" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#2A211C]">
                Serviços
              </span>

              <h2 className="mt-3 text-3xl font-semibold text-[#1F1B18] md:text-4xl">
                Soluções de saúde com uma experiência mais humana.
              </h2>

              <p className="mt-4 text-base font-medium leading-7 text-[#3A312C]">
                A Nit Med reúne atendimento médico, exames, orientação
                nutricional e outros cuidados com foco em conforto,
                organização e qualidade.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="
                    group
                    rounded-[1.75rem]
                    border border-white/35
                    bg-white/18
                    p-5
                    text-[#1F1B18]
                    shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:-translate-y-2
                    hover:border-white/50
                    hover:bg-white/25
                    hover:shadow-[0_18px_40px_rgba(0,0,0,0.14)]
                  "
                >
                  <h3 className="text-lg font-semibold text-[#1F1B18]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#1F1B18]/80">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#4A3428]">
                    <span className="h-2 w-2 rounded-full bg-[#C6A86A]" />
                    cuidado premium
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="especialidades"
          className="relative overflow-hidden bg-[#4A3428] px-5 py-16 text-white md:px-8 md:py-20"
        >
          <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#C6A86A]/15 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/[0.05] blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8BE86]">
                Especialidades
              </span>

              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
                Diferentes especialidades para cuidar de você.
              </h2>

              <p className="mt-4 text-base leading-7 text-white/65">
                Consulte as áreas de atendimento disponíveis na Nit Med e
                encontre o profissional mais adequado para sua necessidade.
              </p>
            </div>

            {loadingSpecialties ? (
              <p className="text-white/60">
                Carregando especialidades...
              </p>
            ) : specialtiesError ? (
              <p className="text-white/60">
                Não foi possível carregar as especialidades.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {specialties.map((specialty) => (
                  <article
                    key={specialty}
                    className="
                      group
                      rounded-[1.75rem]
                      border border-white/25
                      bg-white/[0.10]
                      p-6
                      shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                      backdrop-blur-xl
                      transition-all duration-300
                      hover:-translate-y-2
                      hover:border-white/40
                      hover:bg-white/[0.16]
                      hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]
                    "
                  >
                    <div className="flex items-center justify-between">
                      <span className="h-2 w-2 rounded-full bg-[#D8BE86]" />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
                        Nit Med
                      </span>
                    </div>

                    <div className="mt-6 h-px w-10 bg-[#C6A86A] transition-all duration-300 group-hover:w-16" />

                    <h3 className="mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#D8BE86]">
                      {specialty}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/60">
                      {specialtyDescriptions[specialty] ??
                        'Atendimento especializado com foco em cuidado, prevenção e qualidade de vida.'}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <TeamSection specialties={specialties} />

        <section
          id="contato"
          className="relative overflow-hidden bg-[#F5F1EB] px-5 py-20 md:px-8 md:py-28"
        >
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#C6A86A]/10 blur-3xl" />

          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#6B4C3B]/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C6A86A]">
                Contato
              </span>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#1F1B18] md:text-5xl">
                Cuidar da sua saúde começa com uma boa escolha.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#8C857D]">
                Entre em contato com a Nit Med para conhecer nossas
                especialidades, profissionais e disponibilidades de atendimento.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div
                className="
                  rounded-[1.75rem]
                  border border-white/35
                  bg-white/18
                  p-6
                  shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                  backdrop-blur-xl
                  md:p-8
                "
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A48245]">
                  Fale com a Nit Med
                </span>

                <h3 className="mt-4 text-2xl font-semibold text-[#1F1B18]">
                  Estamos próximos de você.
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#8C857D]">
                  Utilize nossos canais de contato ou preencha o formulário
                  para conhecer melhor a experiência Nit Med.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="border-b border-[#C6A86A]/20 pb-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.20em] text-[#A48245]">
                      WhatsApp
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#4A3428]">
                      (21) 99999-9999
                    </p>
                  </div>

                  <div className="border-b border-[#C6A86A]/20 pb-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.20em] text-[#A48245]">
                      E-mail
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#4A3428]">
                      contato@nitmed.com
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.20em] text-[#A48245]">
                      Localização
                    </p>

                    <p className="mt-2 text-sm font-medium text-[#4A3428]">
                      Niterói — RJ
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#C6A86A]/20 pt-6">
                  <a
                    href="https://wa.me/5521999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mx-auto flex w-fit
                      cursor-pointer items-center justify-center gap-2
                      rounded-full
                      bg-[#4A3428]
                      px-8 py-3.5
                      text-sm font-semibold text-white
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:bg-[#C6A86A]
                      hover:text-[#1F1B18]
                      hover:shadow-[0_12px_30px_rgba(198,168,106,0.25)]
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M19.05 4.94A9.87 9.87 0 0 0 12.03 2C6.55 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.33 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.78 1.22h.01c5.48 0 9.93-4.45 9.93-9.93a9.86 9.86 0 0 0-2.92-6.97ZM12.04 20.16h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.53 3.69-8.22 8.23-8.22 2.2 0 4.27.86 5.82 2.4a8.17 8.17 0 0 1 2.4 5.82c0 4.53-3.69 8.23-8.21 8.23Zm4.51-6.16c-.25-.12-1.47-.73-1.7-.81-.23-.09-.4-.12-.56.12-.17.24-.65.81-.8.98-.15.17-.29.18-.54.06-.25-.12-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.71-.15-.24-.02-.37.11-.49.11-.11.25-.29.37-.43.12-.15.17-.24.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.22.89 2.4 1.01 2.57.12.17 1.76 2.69 4.26 3.77.6.26 1.07.41 1.44.52.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.15-.48-.27Z" />
                    </svg>

                    Entrar em contato
                  </a>
                </div>
              </div>

              <form
                onSubmit={(event) => event.preventDefault()}
                className="
                  rounded-[1.75rem]
                  border border-white/35
                  bg-white/18
                  p-6
                  shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                  backdrop-blur-xl
                  md:p-8
                "
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A48245]">
                    Deixe seus dados
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold text-[#1F1B18]">
                    Como podemos falar com você?
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#8C857D]">
                    Preencha os campos abaixo para demonstrar o formulário de
                    contato da Nit Med.
                  </p>
                </div>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="nome"
                      className="text-xs font-semibold text-[#4A3428]"
                    >
                      Nome
                    </label>

                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      placeholder="Digite seu nome"
                      required
                      className="
                        mt-2 w-full
                        rounded-2xl
                        border border-[#C6A86A]/25
                        bg-white/55
                        px-4 py-3.5
                        text-sm text-[#1F1B18]
                        outline-none
                        transition-all duration-300
                        placeholder:text-[#8C857D]/70
                        focus:border-[#C6A86A]
                        focus:bg-white/75
                        focus:ring-2
                        focus:ring-[#C6A86A]/15
                      "
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold text-[#4A3428]"
                    >
                      E-mail
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      required
                      className="
                        mt-2 w-full
                        rounded-2xl
                        border border-[#C6A86A]/25
                        bg-white/55
                        px-4 py-3.5
                        text-sm text-[#1F1B18]
                        outline-none
                        transition-all duration-300
                        placeholder:text-[#8C857D]/70
                        focus:border-[#C6A86A]
                        focus:bg-white/75
                        focus:ring-2
                        focus:ring-[#C6A86A]/15
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cidade"
                      className="text-xs font-semibold text-[#4A3428]"
                    >
                      Cidade
                    </label>

                    <input
                      id="cidade"
                      name="cidade"
                      type="text"
                      placeholder="Sua cidade"
                      required
                      className="
                        mt-2 w-full
                        rounded-2xl
                        border border-[#C6A86A]/25
                        bg-white/55
                        px-4 py-3.5
                        text-sm text-[#1F1B18]
                        outline-none
                        transition-all duration-300
                        placeholder:text-[#8C857D]/70
                        focus:border-[#C6A86A]
                        focus:bg-white/75
                        focus:ring-2
                        focus:ring-[#C6A86A]/15
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="estado"
                      className="text-xs font-semibold text-[#4A3428]"
                    >
                      Estado
                    </label>

                    <select
                      id="estado"
                      name="estado"
                      defaultValue=""
                      required
                      className="
                        mt-2 w-full
                        rounded-2xl
                        border border-[#C6A86A]/25
                        bg-white/55
                        px-4 py-3.5
                        text-sm text-[#1F1B18]
                        outline-none
                        transition-all duration-300
                        focus:border-[#C6A86A]
                        focus:bg-white/75
                        focus:ring-2
                        focus:ring-[#C6A86A]/15
                      "
                    >
                      <option value="" disabled>
                        Selecione
                      </option>

                      {brazilianStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="
                    mt-7 w-full
                    cursor-pointer
                    rounded-full
                    bg-[#4A3428]
                    px-6 py-3.5
                    text-sm font-semibold text-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-[#C6A86A]
                    hover:text-[#1F1B18]
                    hover:shadow-[0_12px_30px_rgba(198,168,106,0.25)]
                  "
                >
                  Enviar
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-[#8C857D]">
                  Formulário demonstrativo para fins acadêmicos. Nenhum dado é
                  enviado ou armazenado.
                </p>
              </form>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8C857D]">
              <span className="h-2 w-2 rounded-full bg-[#C6A86A]" />
              cuidado premium
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App