import { useEffect } from 'react'
import type { Professional } from '../types'

interface ProfessionalModalProps {
  professional: Professional
  onClose: () => void
}

function ProfessionalModal({
  professional,
  onClose,
}: ProfessionalModalProps) {
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleEscape)
    }
  }, [onClose])

  return (
    <div
      className="
        fixed inset-0 z-[80]
        overflow-y-auto overflow-x-hidden
        bg-[#1F1B18]/45
        px-4 py-6
        backdrop-blur-md
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
        sm:px-6 sm:py-10
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="professional-modal-title"
    >
      <button
        type="button"
        className="fixed inset-0 cursor-pointer"
        aria-label="Fechar detalhes do profissional"
        onClick={onClose}
      />

      <div className="relative z-10 flex min-h-full items-center justify-center">
        <div
          className="
            relative w-full max-w-xl
            rounded-[2rem]
            border border-white/35
            bg-[#F5F1EB]/90
            p-6
            shadow-[0_24px_70px_rgba(31,27,24,0.24)]
            backdrop-blur-2xl
            sm:p-8
          "
        >
          <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[#C6A86A]/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-16 h-48 w-48 rounded-full bg-[#6B4C3B]/15 blur-3xl" />

          <div className="relative">
            <button
              type="button"
              onClick={onClose}
              className="
                absolute right-0 top-0
                cursor-pointer
                text-2xl font-light
                leading-none text-[#4A3428]
                transition-colors duration-300
                hover:text-[#C6A86A]
              "
              aria-label="Fechar"
            >
              ×
            </button>

            <div className="pr-10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A48245]">
                {professional.especialidade}
              </span>

              <h2
                id="professional-modal-title"
                className="mt-3 text-2xl font-semibold text-[#1F1B18] sm:text-3xl"
              >
                {professional.nome}
              </h2>

              <p className="mt-1 text-sm text-[#8C857D]">
                {professional.crm}
              </p>
            </div>

            <p className="mt-6 text-sm leading-6 text-[#1F1B18]/70">
              {professional.descricao}
            </p>

            <div className="mt-7 border-t border-[#C6A86A]/25 pt-6">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#C6A86A]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A48245]">
                  Disponibilidade
                </span>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {professional.disponibilidade.map((availability) => (
                  <div
                    key={availability.data}
                    className="
                      rounded-[1.5rem]
                      border border-white/35
                      bg-white/18
                      p-4
                      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                      backdrop-blur-xl
                    "
                  >
                    <p className="font-semibold text-[#1F1B18]">
                      {availability.data}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {availability.horarios.map((time) => (
                        <span
                          key={time}
                          className="
                            rounded-full
                            border border-white/40
                            bg-white/25
                            px-3 py-1.5
                            text-sm font-medium
                            text-[#4A3428]
                            backdrop-blur-md
                          "
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contato"
              onClick={onClose}
              className="
                mt-7 block w-full
                cursor-pointer rounded-full
                bg-[#4A3428]
                px-6 py-3.5
                text-center text-sm font-semibold
                text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#C6A86A]
                hover:text-[#1F1B18]
                hover:shadow-[0_12px_30px_rgba(198,168,106,0.25)]
              "
            >
              Agendar consulta
            </a>

            <p className="mt-4 text-center text-xs leading-5 text-[#8C857D]">
              Demonstração acadêmica. O botão direciona ao formulário de
              contato.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalModal