import { useRef } from "react"
import { useAmbient } from "@/hooks/useAmbient"
import { useReveal } from "@/hooks/useReveal"
import Botanical from "@/components/v2/Botanical"
import HandNote from "@/components/v2/HandNote"
import MagneticButton from "@/components/v2/MagneticButton"
import { Heading } from "@/components/v2/Typography"
import { WhatsAppIcon } from "@/components/v2/icons"
import { FINAL_CTA as COPY } from "@/constants/v2/closing"
import { WA_MESSAGES, waLink } from "@/constants/v2/contact"

export default function CtaFinal() {
  const ref = useRef(null)
  useReveal(ref)
  useAmbient(ref)

  return (
    <section ref={ref} id="contato" aria-labelledby="contato-title" className="relative bg-lavanda-bg px-[clamp(12px,3vw,32px)] pb-[clamp(60px,7vw,90px)]">
      <div
        data-reveal=""
        className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[44px] bg-lavanda-75 px-[clamp(24px,5vw,60px)] py-[clamp(80px,10vw,140px)] text-center"
      >
        <div data-blob="" aria-hidden className="pointer-events-none absolute -bottom-[40%] -left-[10%] size-[640px] rounded-full bg-[radial-gradient(circle,rgba(157,205,90,.45),rgba(157,205,90,0)_65%)]" />
        <div data-blob="" aria-hidden className="pointer-events-none absolute -right-[10%] -top-[40%] size-[640px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.9),rgba(255,255,255,0)_65%)]" />
        <img
          data-spin="100"
          src="/imgs/mandala-700.webp"
          alt=""
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute left-1/2 top-1/2 -ml-[450px] -mt-[450px] w-[900px] opacity-[.07]"
        />
        <Botanical name="sprig" className="-bottom-[30px] -left-[30px] w-[clamp(150px,18vw,260px)]" />
        <Botanical name="fern" className="-right-5 -top-5 w-[clamp(130px,14vw,210px)]" imgClassName="rotate-[200deg]" />
        <HandNote lines={COPY.notes[0]} rotate="-rotate-[8deg]" className="absolute left-[7%] top-[18%]" />
        <HandNote lines={COPY.notes[1]} rotate="rotate-6" className="absolute bottom-[20%] right-[7%]" />

        <div className="relative z-[2] flex flex-col items-center gap-5">
          <Heading
            id="contato-title"
            title={COPY.title}
            className="max-w-[900px] text-[clamp(40px,6vw,86px)] leading-none tracking-[-0.02em]"
          />
          <div data-stagger="" className="flex flex-col gap-1 font-serif text-[clamp(18px,1.8vw,24px)] text-lavanda-600">
            {COPY.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
          <p className="m-0 mt-1.5 text-[16.5px] text-texto">{COPY.text}</p>
          <MagneticButton
            href={waLink(WA_MESSAGES.finalCta)}
            className="mt-2.5 h-[68px] gap-3 px-[34px] text-base font-bold tracking-[.02em] shadow-[0_22px_44px_-18px_rgba(27,94,32,.75)]"
          >
            <WhatsAppIcon size={22} />
            <span>{COPY.cta}</span>
          </MagneticButton>
          <p className="m-0 mt-5 text-balance text-xs font-bold uppercase tracking-[.24em] text-muted">{COPY.footnote}</p>
        </div>
      </div>
    </section>
  )
}
