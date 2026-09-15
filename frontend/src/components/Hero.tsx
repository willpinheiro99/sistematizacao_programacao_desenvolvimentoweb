function Hero() {
  return (
    <section
      id="inicio"
      className="bg-[#F5F1EB] pt-28 md:pt-32"
    >
      <div className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="max-w-xl text-5xl font-light leading-[0.96] tracking-[-0.04em] text-[#5F5A55] sm:text-6xl md:text-7xl">
                Saúde

                <span className="block font-medium text-[#1F1B18]">
                  Premium
                </span>

                <span className="block">
                  com
                </span>

                <span className="block font-medium text-[#1F1B18]">
                  Cuidado Humano
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#8C857D] md:text-lg">
                Atendimento médico, exames e orientações em um ambiente
                acolhedor, elegante e pensado para oferecer uma experiência
                de cuidado mais próxima, confortável e eficiente.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contato"
                  className="rounded-full bg-[#A48A71] px-6 py-3 text-center text-sm font-medium text-white transition duration-300 hover:bg-[#8E775F]"
                >
                  Agendar atendimento
                </a>

                <a
                  href="#servicos"
                  className="rounded-full border border-[#C6A86A]/40 bg-white/60 px-6 py-3 text-center text-sm font-medium text-[#4A3428] backdrop-blur-sm transition duration-300 hover:border-[#C6A86A] hover:bg-white hover:text-[#C6A86A]"
                >
                  Ver serviços
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F5F1EB] bg-[#E9DFD2] text-xs font-semibold text-[#4A3428]">
                    NM
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F5F1EB] bg-[#D8BE86] text-xs font-semibold text-[#4A3428]">
                    +
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F5F1EB] bg-[#BFC3C7] text-xs font-semibold text-[#4A3428]">
                    6
                  </span>
                </div>

                <p className="text-sm leading-5 text-[#8C857D]">
                  <span className="font-semibold text-[#1F1B18]">
                    6 especialidades
                  </span>

                  <br />

                  com atendimento humanizado.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#CBB29B] shadow-[0_18px_40px_rgba(74,52,40,0.10)]">
              <img
                src="/images/hero/doctor-procedure.jpg"
                alt="Profissional de saúde em atendimento"
                className="h-[320px] w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#especialidades"
                    className="rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-[#4A3428] backdrop-blur-md transition duration-300 hover:bg-white"
                  >
                    Ver especialidades
                  </a>

                  <a
                    href="#equipe"
                    className="rounded-full border border-white/60 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:border-white hover:bg-white/20"
                  >
                    Nossa equipe
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#DCCEC1] shadow-[0_22px_50px_rgba(74,52,40,0.12)]">
            <img
              src="/images/hero/main-patient.jpg"
              alt="Paciente na Nit Med"
              className="h-[540px] w-full object-cover md:h-[620px]"
            />

            <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-md">
              Atendimento premium
            </div>

            <div className="absolute bottom-6 left-6 max-w-xs rounded-[1.75rem] border border-white/35 bg-white/18 p-5 text-[#1F1B18] shadow-[0_10px_30px_rgba(0,0,0,0.10)] backdrop-blur-xl">
              <p className="text-sm leading-6 text-[#1F1B18]/80">
                Uma experiência de cuidado mais acolhedora, organizada e
                sofisticada para quem valoriza bem-estar e confiança.
              </p>

              <div className="mt-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#4A3428]">
                <span className="h-2 w-2 rounded-full bg-[#C6A86A]" />

                cuidado premium
              </div>
            </div>

            <div className="absolute bottom-6 right-6 hidden w-44 overflow-hidden rounded-[1.5rem] border border-white/35 bg-white/18 p-2 backdrop-blur-md md:block">
              <img
                src="/images/hero/clinic-detail.jpg"
                alt="Sala de espera da Nit Med"
                className="h-36 w-full rounded-[1rem] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero