import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap"
import { BRAND } from "@/constants/v2/contact"

const WORDS = [
  { text: "Natureza", className: "" },
  { text: "em", className: "text-verde-700" },
  { text: "Cura", className: "" },
]

/*
 * Tela de abertura: logo com elastic, palavras sobem, barra enche e a cortina
 * sobe (clip-path). `onReveal` dispara um pouco antes do fim para a timeline
 * do hero começar sobreposta; `onDone` remove o loader.
 */
export default function Loader({ onReveal, onDone }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap
        .timeline({ delay: 0.1 })
        .from("[data-loader-logo]", { scale: 0.3, opacity: 0, rotate: -25, duration: 1.1, ease: "elastic.out(1,.5)" })
        .from("[data-loader-word]", { yPercent: 115, duration: 0.7, stagger: 0.08, ease: "power4.out" }, "-=.7")
        .to("[data-loader-bar]", { scaleX: 1, duration: 0.8, ease: "power2.inOut" }, "-=.3")
        .to(ref.current, { clipPath: "inset(0 0 100% 0)", duration: 1, ease: "expo.inOut" })
        .add(() => onReveal?.(), "-=.55")
        .add(() => onDone?.())
    },
    { scope: ref },
  )

  return (
    <div
      ref={ref}
      role="status"
      aria-label="Carregando"
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-[22px] bg-[#F7F4FE] [clip-path:inset(0_0_0_0)]"
    >
      <img data-loader-logo="" src={BRAND.logoSmall} alt="" width="120" height="120" className="size-[120px] object-contain" />
      <div className="flex gap-3 font-serif text-[clamp(30px,4vw,44px)] text-ink" aria-hidden>
        {WORDS.map((w) => (
          <span key={w.text} className="block overflow-hidden">
            <span data-loader-word="" className={`inline-block ${w.className}`}>
              {w.text}
            </span>
          </span>
        ))}
      </div>
      <div className="h-0.5 w-40 overflow-hidden rounded-sm bg-lavanda-200">
        <div data-loader-bar="" className="size-full origin-left scale-x-0 bg-verde-700" />
      </div>
    </div>
  )
}
