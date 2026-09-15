import { useEffect, useState } from 'react'

const menuItems = [
  {
    label: 'Início',
    href: '#inicio',
  },
  {
    label: 'Serviços',
    href: '#servicos',
  },
  {
    label: 'Especialidades',
    href: '#especialidades',
  },
  {
    label: 'Equipe',
    href: '#equipe',
  },
  {
    label: 'Contato',
    href: '#contato',
  },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <header
        className={`
          fixed left-0 top-0 z-50 w-full
          transition-all duration-300
          hover:bg-white/95
          hover:shadow-sm
          hover:backdrop-blur-xl
          ${
            scrolled
              ? 'border-b border-[#C6A86A]/15 bg-[#F5F1EB]/70 shadow-sm backdrop-blur-xl'
              : 'bg-transparent'
          }
        `}
      >
        <div className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-5 md:h-28 md:px-8">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex cursor-pointer items-center gap-2 text-sm font-medium text-[#1F1B18] transition-colors duration-300 hover:text-[#C6A86A]"
            aria-label="Abrir menu"
          >
            <span className="text-lg">☰</span>

            <span className="hidden sm:inline">
              Menu
            </span>
          </button>

          <a
            href="#inicio"
            aria-label="Nit Med - Início"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img
              src="/images/brand/nitmed_logo.png"
              alt="Nit Med"
              className="h-20 w-auto object-contain mix-blend-multiply md:h-24"
            />
          </a>

          <a
            href="#contato"
            className="hidden text-sm font-medium text-[#1F1B18] transition-colors duration-300 hover:text-[#C6A86A] sm:block"
          >
            Fale Conosco
          </a>
        </div>
      </header>

      <div
        className={`
          fixed inset-0 z-[60]
          transition-all duration-300
          ${
            menuOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      >
        <button
          type="button"
          aria-label="Fechar menu"
          className="absolute inset-0 cursor-pointer bg-black/35 backdrop-blur-sm"
          onClick={closeMenu}
        />

        <aside
          className={`
            absolute left-0 top-0 h-full w-[85%] max-w-sm
            bg-[#4A3428] px-6 py-8 text-white
            shadow-2xl transition-transform duration-300
            ${
              menuOpen
                ? 'translate-x-0'
                : '-translate-x-full'
            }
          `}
        >
          <div className="flex items-center justify-between">
            <a
              href="#inicio"
              onClick={closeMenu}
              aria-label="Nit Med - Início"
              className="rounded-xl bg-[#F5F1EB] px-3 py-2"
            >
              <img
                src="/images/brand/nitmed_logo.png"
                alt="Nit Med"
                className="h-20 w-auto object-contain mix-blend-multiply"
              />
            </a>

            <button
              type="button"
              onClick={closeMenu}
              className="cursor-pointer text-2xl text-white transition-colors duration-300 hover:text-[#C6A86A]"
              aria-label="Fechar menu"
            >
              ×
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="text-lg transition-colors duration-300 hover:text-[#C6A86A]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="text-sm leading-6 text-white/60">
              Projeto acadêmico desenvolvido para a disciplina de
              Programação e Desenvolvimento Web.
            </p>
          </div>
        </aside>
      </div>
    </>
  )
}

export default Header