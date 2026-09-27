import { useRef } from "react"
import { ArrowRight, Sprout } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { cn } from "@/lib/utils"
import { useAmbient } from "@/hooks/useAmbient"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useReveal } from "@/hooks/useReveal"
import { Eyebrow } from "@/components/v2/Typography"
import MagneticButton from "@/components/v2/MagneticButton"
import { COURAGE as COPY } from "@/constants/v2/courage"
import { WA_MESSAGES, waLink } from "@/constants/v2/contact"

const TONE = { white: "", lilas: "text-lavanda-350", lima: "text-verde-300" }

// Seção escura: "Pedir ajuda não é fraqueza" + objetivos
export default function Coragem() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  useReveal(ref)
  useAmbient(ref)

  // Frase acende palavra por palavra conforme o scroll
  useGSAP(
    () => {
      if (reduce) return
      const words = ref.current.querySelector("[data-words]")
      gsap.fromTo(
        words.children,
        { opacity: 0.12, y: 12 },
        { opacity: 1, y: 0, stagger: 0.12, ease: "none", scrollTrigger: { trigger: words, start: "top 82%", end: "bottom 50%", scrub: true } },
      )
    },
    { scope: ref, dependencies: [reduce], revertOnUpdate: true },
  )

  return (
    <section ref={ref} id="coragem" aria-labelledby="coragem-title" className="relative overflow-hidden bg-noite py-[clamp(100px,11vw,160px)] text-white">
      <div data-blob="" aria-hidden className="pointer-events-none absolute -left-[10%] top-0 size-[640px] rounded-full bg-[radial-gradient(circle,rgba(140,108,230,.5),rgba(140,108,230,0)_65%)]" />
      <div data-blob="" aria-hidden className="pointer-events-none absolute -right-[10%] top-[30%] size-[600px] rounded-full bg-[radial-gradient(circle,rgba(124,179,66,.35),rgba(124,179,66,0)_65%)]" />
      <div data-blob="" aria-hidden className="pointer-events-none absolute -bottom-[20%] left-[30%] size-[500px] rounded-full bg-[radial-gradient(circle,rgba(183,162,243,.3),rgba(183,162,243,0)_65%)]" />

      <div className="relative z-[2] mx-auto flex max-w-[1100px] flex-col items-center gap-[22px] px-[clamp(20px,4vw,40px)] text-center">
        <h2 data-reveal="" id="coragem-title" className="m-0 font-serif text-[clamp(30px,3.6vw,48px)] font-normal leading-[1.1] text-white">
          {COPY.title}
        </h2>
        <p data-reveal="" className="m-0 text-[17px] leading-[1.6] text-[#C9BEEA]">
          {COPY.lead}
        </p>
        <p
          data-words=""
          className="my-[22px] flex flex-wrap justify-center gap-x-[.25em] font-serif text-[clamp(40px,6.4vw,92px)] leading-[1.02] tracking-[-0.02em] text-white"
        >
          {COPY.statement.map(([word, tone], i) => (
            <span key={`${word}-${i}`} className={cn("inline-block", TONE[tone])}>
              {word}
            </span>
          ))}
        </p>
        <p data-reveal="" className="m-0 max-w-[560px] text-base leading-[1.7] text-[#C9BEEA]">
          {COPY.text}
        </p>
        <MagneticButton data-reveal="" href={waLink(WA_MESSAGES.courage)} variant="lime">
          <span>{COPY.cta}</span>
          <ArrowRight size={18} aria-hidden />
        </MagneticButton>

        <div className="mt-[70px] flex w-full flex-col items-center gap-[26px]">
          <Eyebrow data-reveal="" className="border border-white/[.14] bg-white/[.08] text-lavanda-350" dotClassName="bg-verde-350">
            {COPY.goalsEyebrow}
          </Eyebrow>
          <h3 data-reveal="" className="m-0 font-serif text-[clamp(28px,3.2vw,42px)] font-normal text-white">
            {COPY.goalsTitle}
          </h3>
          <ul data-stagger="" className="m-0 grid w-full list-none grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-3 p-0 text-left">
            {COPY.goals.map((goal) => (
              <li
                key={goal}
                className="flex items-center gap-3.5 rounded-[18px] border border-white/10 bg-white/[.06] px-[18px] py-4 text-[15px] text-[#EDE8FF] backdrop-blur-[12px] transition-[background-color,border-color] duration-300 hover:border-[rgba(181,220,138,.5)] hover:bg-white/[.12]"
              >
                <span aria-hidden className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[rgba(157,205,90,.18)] text-verde-300">
                  <Sprout size={16} />
                </span>
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
