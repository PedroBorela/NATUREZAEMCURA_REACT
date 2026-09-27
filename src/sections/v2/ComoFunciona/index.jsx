import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap"
import { useIsWide } from "@/hooks/useIsWide"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useReveal } from "@/hooks/useReveal"
import { Container, Heading } from "@/components/v2/Typography"
import { STEPS, STEPS_COPY as COPY } from "@/constants/v2/steps"

export default function ComoFunciona() {
  const ref = useRef(null)
  const wide = useIsWide()
  const reduce = useReducedMotion()
  useReveal(ref)

  // Linha que conecta os passos é "desenhada" com o scroll
  useGSAP(
    () => {
      if (!wide) return
      if (reduce) {
        gsap.set("[data-steps-line]", { scaleX: 1 })
        return
      }
      gsap.to("[data-steps-line]", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { trigger: "[data-steps]", start: "top 75%", end: "bottom 55%", scrub: true },
      })
    },
    { scope: ref, dependencies: [wide, reduce], revertOnUpdate: true },
  )

  return (
    <section
      ref={ref}
      id="atendimento"
      aria-labelledby="atendimento-title"
      className="relative bg-gradient-to-b from-lavanda-bg to-lavanda-50 py-[clamp(80px,9vw,120px)]"
    >
      <Container>
        <div className="mb-14 flex flex-col items-center gap-3.5 text-center">
          <Heading data-reveal="" id="atendimento-title" title={COPY.title} className="text-[clamp(32px,3.8vw,50px)]" />
          <p data-reveal="" className="m-0 text-[17px] leading-[1.6] text-texto">
            {COPY.lead}
          </p>
        </div>

        <div data-steps="" className="relative">
          {wide && (
            <div aria-hidden className="absolute inset-x-[10%] top-10 h-0.5 rounded-sm bg-lavanda-200">
              <div data-steps-line="" className="size-full origin-left scale-x-0 rounded-sm bg-gradient-to-r from-lavanda-500 to-verde-700" />
            </div>
          )}
          <ol data-bounce="" className="relative m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] gap-[26px] p-0">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="flex flex-col items-center gap-3 text-center">
                <div className="relative flex size-20 items-center justify-center rounded-full border border-lavanda-200 bg-white/80 text-lavanda-600 shadow-[0_18px_40px_-20px_rgba(76,52,160,.5)] backdrop-blur-[12px] transition-[transform,background-color] ease-bounce [transition-duration:500ms,300ms] hover:-rotate-6 hover:scale-[1.12] hover:bg-white">
                  <Icon size={28} strokeWidth={1.8} aria-hidden />
                  <span
                    aria-hidden
                    className="absolute -left-1 -top-1 flex size-7 items-center justify-center rounded-full border-[3px] border-lavanda-bg bg-verde-900 text-xs font-extrabold text-white"
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="m-0 mt-1.5 font-serif text-xl font-normal text-ink">{title}</h3>
                <p className="m-0 max-w-[220px] text-sm leading-[1.55] text-muted">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
