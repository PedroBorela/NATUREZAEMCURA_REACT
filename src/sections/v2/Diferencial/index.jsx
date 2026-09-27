import { useRef } from "react"
import { gsap, pauseOffscreen, useGSAP } from "@/lib/gsap"
import { cn } from "@/lib/utils"
import { useAmbient } from "@/hooks/useAmbient"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useReveal } from "@/hooks/useReveal"
import { Container, Eyebrow, Heading } from "@/components/v2/Typography"
import Botanical from "@/components/v2/Botanical"
import HandNote from "@/components/v2/HandNote"
import TiltCard from "@/components/v2/TiltCard"
import { BENEFITS, DIFFERENTIAL_COPY as COPY, DIFFERENTIALS, DIMENSIONS } from "@/constants/v2/differentials"
import { BRAND } from "@/constants/v2/contact"

const CHIP_TONE = {
  verde: "bg-verde-100 text-verde-900",
  lilas: "bg-[#F3E6FF] text-lavanda-600",
  azul: "bg-[#E6ECFF] text-[#3B3EA1]",
}

// Posição de cada dimensão num círculo de raio 42% ao redor do centro
const orbitPosition = (i) => {
  const a = (i / DIMENSIONS.length) * Math.PI * 2 - Math.PI / 2
  return { left: `${(50 + Math.cos(a) * 42).toFixed(2)}%`, top: `${(50 + Math.sin(a) * 42).toFixed(2)}%` }
}

export default function Diferencial() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  useReveal(ref)
  useAmbient(ref)

  // Órbita gira e os rótulos giram ao contrário para ficarem sempre de pé
  useGSAP(
    () => {
      if (reduce) return
      const orbit = ref.current.querySelector("[data-orbit]")
      pauseOffscreen(orbit, [
        gsap.to(orbit, { rotation: 360, duration: 70, repeat: -1, ease: "none" }),
        gsap.to("[data-orbit-chip]", { rotation: -360, duration: 70, repeat: -1, ease: "none" }),
      ])
    },
    { scope: ref, dependencies: [reduce], revertOnUpdate: true },
  )

  return (
    <section ref={ref} id="diferencial" aria-labelledby="diferencial-title" className="relative overflow-hidden bg-lavanda-bg py-[clamp(90px,10vw,150px)]">
      <Botanical name="sprig" data-parallax="0.2" className="-right-10 top-[60px] w-[200px]" imgClassName="[transform:scaleX(-1)_rotate(-20deg)]" />
      <HandNote reveal lines={COPY.note} rotate="-rotate-[7deg]" className="absolute left-[4%] top-[140px] text-[27px]" />

      <Container>
        <div className="mb-[60px] flex flex-col items-center gap-4 text-center">
          <Eyebrow data-reveal="">{COPY.eyebrow}</Eyebrow>
          <Heading data-reveal="" id="diferencial-title" title={COPY.title} />
          <p data-reveal="" className="m-0 text-[17px] leading-[1.6] text-texto">
            {COPY.lead}
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(40px,5vw,70px)]">
          <div className="flex flex-col items-center gap-[26px]">
            <div data-reveal="" className="relative aspect-square w-[min(100%,440px)]">
              <div aria-hidden className="absolute inset-[8%] rounded-full border-[1.5px] border-dashed border-lavanda-300" />
              <div aria-hidden className="absolute inset-[26%] rounded-full bg-[radial-gradient(circle,#F1ECFD,rgba(241,236,253,0)_70%)]" />
              <div className="absolute left-1/2 top-1/2 flex size-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-lavanda-200 bg-white/80 shadow-[0_30px_60px_-30px_rgba(76,52,160,.5)] backdrop-blur-[12px]">
                <img data-breathe="" src={BRAND.logoSmall} alt="" loading="lazy" decoding="async" className="size-[70%] object-contain" />
              </div>
              <ul data-orbit="" aria-label="Dimensões cuidadas" className="absolute inset-0 m-0 list-none p-0">
                {DIMENSIONS.map((d, i) => (
                  <li key={d.label} className="absolute size-0" style={orbitPosition(i)}>
                    <div data-orbit-chip="">
                      <span
                        className={cn(
                          "absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/90 px-4 py-2.5 text-sm font-bold shadow-[0_14px_30px_-16px_rgba(76,52,160,.5)]",
                          CHIP_TONE[d.tone],
                        )}
                      >
                        {d.label}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p data-reveal="" className="m-0 max-w-[440px] text-center font-serif text-[clamp(19px,1.8vw,23px)] leading-[1.4] text-ink">
              {COPY.orbitCaption}
            </p>
          </div>

          <div data-stagger="" className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-3.5">
            {DIFFERENTIALS.map(({ icon: Icon, title, text }) => (
              <TiltCard
                key={title}
                spot
                className="flex flex-col gap-3 rounded-3xl border border-lavanda-150 p-6 shadow-[inset_0_1px_0_#fff,0_24px_50px_-34px_rgba(76,52,160,.5)] backdrop-blur-[14px] [background:radial-gradient(360px_circle_at_var(--mx,50%)_var(--my,0%),rgba(140,108,230,.14),rgba(140,108,230,0)_60%),rgba(255,255,255,.7)]"
              >
                <span className="flex size-12 items-center justify-center rounded-full bg-lavanda-100 text-lavanda-600">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="m-0 font-serif text-[19px] font-normal leading-[1.2] text-ink">{title}</h3>
                <p className="m-0 text-sm leading-[1.55] text-muted">{text}</p>
              </TiltCard>
            ))}
          </div>
        </div>

        <div className="relative mt-[90px] overflow-hidden rounded-[40px] border border-white/90 bg-gradient-to-br from-verde-50 to-lavanda-75 p-[clamp(28px,5vw,64px)] shadow-[0_40px_80px_-60px_rgba(42,27,94,.45)]">
          <img
            data-spin="120"
            src="/imgs/mandala-700.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute -right-[180px] -top-[180px] w-[520px] opacity-[.08]"
          />
          <Botanical name="fern" className="-bottom-10 -left-[30px] w-[160px]" imgClassName="rotate-[24deg]" />

          <div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-[clamp(30px,4vw,56px)]">
            <div className="flex flex-col gap-4">
              <Eyebrow data-reveal="" className="self-start bg-white text-verde-900">
                {COPY.benefits.eyebrow}
              </Eyebrow>
              <Heading data-reveal="" as="h3" title={COPY.benefits.title} className="text-[clamp(30px,3.4vw,46px)] leading-[1.08] tracking-normal" />
              <p data-reveal="" className="m-0 max-w-[440px] text-base leading-[1.65] text-texto">
                {COPY.benefits.lead}
              </p>
              <p data-reveal="" className="m-0 mt-1.5 max-w-[440px] rounded-[18px] bg-white/70 px-[18px] py-4 text-[14.5px] leading-[1.6] text-ink">
                <strong className="text-lavanda-600">{COPY.benefits.highlight}</strong>
                {COPY.benefits.highlightRest}
              </p>
            </div>

            <ul data-bounce="" className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(100%,150px),1fr))] gap-3 p-0">
              {BENEFITS.map(({ icon: Icon, label }, i) => (
                <li key={label}>
                  <div className="flex h-full flex-col gap-3.5 rounded-[22px] border border-white/95 bg-white/[.82] p-[18px] shadow-[0_18px_40px_-30px_rgba(76,52,160,.55)] transition-[transform,box-shadow,background-color] ease-bounce [transition-duration:500ms,400ms,300ms] hover:-translate-y-1.5 hover:-rotate-[1.5deg] hover:bg-white hover:shadow-[0_26px_50px_-26px_rgba(76,52,160,.6)]">
                    <span className="flex items-center justify-between">
                      <span
                        className={cn(
                          "flex size-[42px] items-center justify-center rounded-[14px]",
                          i % 2 ? "bg-lavanda-100 text-lavanda-600" : "bg-verde-100 text-verde-900",
                        )}
                      >
                        <Icon size={20} aria-hidden />
                      </span>
                      <span aria-hidden className="text-[11px] font-extrabold text-[#B9A6EE]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <span className="text-[14.5px] font-bold leading-[1.35] text-ink">{label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
