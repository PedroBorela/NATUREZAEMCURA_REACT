import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"
import { useIsWide } from "@/hooks/useIsWide"
import MagneticButton from "@/components/v2/MagneticButton"
import { WhatsAppIcon } from "@/components/v2/icons"
import { BRAND, NAV_LINKS, WA_MESSAGES, waLink } from "@/constants/v2/contact"

export default function Navbar() {
  const header = useRef(null)
  const wide = useIsWide()
  const [open, setOpen] = useState(false)
  const menuOpen = open && !wide
  const menuOpenRef = useRef(menuOpen)

  useEffect(() => {
    menuOpenRef.current = menuOpen
    if (!menuOpen) return
    const onKey = (e) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  // Esconde ao rolar para baixo, reaparece ao subir
  useGSAP(() => {
    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const hide = self.direction === 1 && self.scroll() > 320 && !menuOpenRef.current
        gsap.to(header.current, { yPercent: hide ? -150 : 0, duration: 0.45, ease: "power3.out", overwrite: "auto" })
      },
    })
  })

  return (
    <>
      <header ref={header} className="fixed inset-x-0 top-3.5 z-[900] px-[clamp(12px,3vw,32px)]">
        <div className="mx-auto flex h-[70px] max-w-[1240px] items-center justify-between gap-4 rounded-full border border-white/80 bg-white/[.62] pl-3.5 pr-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,.9),0_18px_40px_-24px_rgba(76,52,160,.35)] backdrop-blur-[18px] backdrop-saturate-[1.6]">
          <a href="#inicio" className="flex items-center gap-2.5 text-ink">
            <img src={BRAND.logoSmall} alt="" width="48" height="48" className="size-12 object-contain" />
            <span className="flex flex-col leading-none">
              <span className="font-serif text-[19px] text-ink">{BRAND.name}</span>
              <span className="mt-[5px] text-[9.5px] font-bold uppercase tracking-[.16em] text-lavanda-600">{BRAND.tagline}</span>
            </span>
          </a>

          {wide && (
            <nav aria-label="Principal" className="flex items-center gap-[26px]">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="bg-gradient-to-r from-lavanda-600 to-lavanda-600 bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat py-1.5 text-sm font-medium text-ink transition-[background-size,color] duration-[450ms] ease-[cubic-bezier(.65,.05,.36,1)] hover:bg-[length:100%_1.5px] hover:text-lavanda-600"
                >
                  {l.name}
                </a>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-2">
            {/* Abaixo de 420px vira só ícone para caber ao lado do menu */}
            <MagneticButton
              href={waLink(WA_MESSAGES.nav)}
              className="h-[50px] gap-[9px] px-5 text-sm shadow-[0_10px_26px_-10px_rgba(27,94,32,.6)] max-[419px]:w-[50px] max-[419px]:justify-center max-[419px]:px-0"
            >
              <WhatsAppIcon size={18} />
              <span className="max-[419px]:sr-only">Agendar</span>
            </MagneticButton>
            {!wide && (
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuOpen}
                aria-controls="menu-mobile"
                className="flex size-[50px] cursor-pointer items-center justify-center rounded-full border border-lavanda-200 bg-white text-ink"
              >
                {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
              </button>
            )}
          </div>
        </div>
      </header>

      {menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Menu"
          className="fixed inset-0 z-[850] flex flex-col gap-1.5 bg-[rgba(247,244,254,.94)] px-7 pb-10 pt-[120px] backdrop-blur-[20px]"
        >
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-lavanda-200 py-2 font-serif text-[38px] text-ink"
            >
              {l.name}
              <span className="font-sans text-[13px] text-lavanda-500">0{i + 1}</span>
            </a>
          ))}
          <img src="/assets/lavender.svg" alt="" className="absolute bottom-5 right-5 w-[70px] opacity-90" />
        </nav>
      )}
    </>
  )
}
