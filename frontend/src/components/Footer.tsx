function Footer() {
  return (
    <footer className="bg-[#1F1B18] px-5 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <a
            href="#inicio"
            aria-label="Nit Med - Início"
            className="inline-block rounded-xl bg-[#F5F1EB] px-3 py-2"
          >
            <img
              src="/images/brand/nitmed_logo.png"
              alt="Nit Med"
              className="h-24 w-auto object-contain mix-blend-multiply"
            />
          </a>

          <p className="mt-5 max-w-md text-sm leading-6 text-white/55">
            Saúde, cuidado e bem-estar em uma experiência pensada para
            oferecer conforto e atendimento humanizado.
          </p>

          <p className="mt-4 max-w-md text-xs leading-5 text-white/40">
            Projeto acadêmico. Profissionais, dados, registros e imagens
            apresentados são fictícios ou meramente ilustrativos.
          </p>
        </div>

        <div className="text-sm text-white/50 md:text-right">
          <p>Niterói — RJ</p>

          <p className="mt-2">
            contato@nitmed.com
          </p>

          <p className="mt-5 text-xs text-white/30">
            © 2026 Nit Med
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer