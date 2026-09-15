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

          <div className="relative mx-auto max-w-4xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C6A86A]">
              Contato
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[#1F1B18] md:text-5xl">
              Cuidar da sua saúde começa com uma boa escolha.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#8C857D]">
              Entre em contato com a Nit Med para conhecer nossas
              especialidades, profissionais e disponibilidades de atendimento.
            </p>

            <div
              className="
                mx-auto mt-10 max-w-2xl
                rounded-[1.75rem]
                border border-white/35
                bg-white/18
                p-6
                shadow-[0_10px_30px_rgba(0,0,0,0.10)]
                backdrop-blur-xl
                md:p-8
              "
            >
              <div className="grid gap-6 text-left sm:grid-cols-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.20em] text-[#A48245]">
                    WhatsApp
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#4A3428]">
                    (21) 99999-9999
                  </p>
                </div>

                <div>
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
                  href="mailto:contato@nitmed.com"
                  className="
                    inline-flex cursor-pointer items-center justify-center
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
                  Entrar em contato
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8C857D]">
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