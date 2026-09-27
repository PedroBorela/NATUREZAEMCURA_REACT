import { useRef, useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { useAmbient } from "@/hooks/useAmbient"
import { useReveal } from "@/hooks/useReveal"
import { Eyebrow, Heading } from "@/components/v2/Typography"
import Botanical from "@/components/v2/Botanical"
import HandNote from "@/components/v2/HandNote"
import MagneticButton from "@/components/v2/MagneticButton"
import TiltCard from "@/components/v2/TiltCard"
import { WhatsAppIcon } from "@/components/v2/icons"
import { SYMPTOMS, SYMPTOMS_COPY as COPY } from "@/constants/v2/symptoms"
import { WA_MESSAGES, waLink } from "@/constants/v2/contact"

export default function Sintomas() {
  const ref = useRef(null)
  const [selected, setSelected] = useState(() => new Set())
  useReveal(ref)
  useAmbient(ref)

  const toggle = (label) =>
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(label)) next.delete(label)
      else next.add(label)
      return next
    })

  // Mantém a ordem da lista na mensagem do WhatsApp
  const chosen = SYMPTOMS.map((s) => s.label).filter((l) => selected.has(l))
  const ctaLabel = chosen.length === 0 ? COPY.ctaNone : chosen.length === 1 ? COPY.ctaOne : COPY.ctaMany(chosen.length)
  const ctaHref = waLink(chosen.length ? WA_MESSAGES.symptoms(chosen) : WA_MESSAGES.symptomsNone)

  return (
    <section
      ref={ref}
      id="sintomas"
      aria-labelledby="sintomas-title"
      className="relative overflow-x-clip bg-gradient-to-b from-lavanda-bg to-lavanda-50 pb-[clamp(80px,9vw,120px)] pt-[clamp(110px,12vw,160px)]"
    >
      <Botanical name="sprig" data-parallax="0.25" className="-right-[30px] top-10 w-[180px]" imgClassName="[transform:scaleX(-1)_rotate(10deg)]" />
      <HandNote reveal lines={COPY.note} rotate="-rotate-[8deg]" className="absolute left-[4%] top-[200px]" />

      <div className="relative z-[2] mx-auto flex max-w-[1100px] flex-col items-center gap-[18px] px-[clamp(20px,4vw,40px)] text-center">
        <Eyebrow data-reveal="">{COPY.eyebrow}</Eyebrow>
        <Heading data-reveal="" id="sintomas-title" title={COPY.title} />
        <p data-reveal="" className="m-0 text-[17px] leading-[1.6] text-texto">
          {COPY.lead}
        </p>

        <div data-bounce="" className="mt-[22px] grid w-full grid-cols-[repeat(auto-fill,minmax(min(100%,178px),1fr))] gap-3.5">
          {SYMPTOMS.map(({ icon: Icon, label }) => {
            const on = selected.has(label)
            return (
              <TiltCard
                as="button"
                key={label}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(label)}
                className={cn(
                  "relative flex min-h-[150px] cursor-pointer flex-col items-center justify-center gap-3.5 rounded-[22px] border-[1.5px] px-3.5 py-[22px] text-center text-sm font-semibold leading-[1.35] text-ink shadow-glass backdrop-blur-[14px] transition-[background-color,border-color] duration-[350ms]",
                  on ? "border-verde-500 bg-[rgba(228,242,213,.85)]" : "border-white/90 bg-white/[.62]",
                )}
              >
                <span
                  className={cn(
                    "flex size-[54px] items-center justify-center rounded-full transition-[background-color,color] duration-[350ms]",
                    on ? "bg-verde-900 text-white" : "bg-lavanda-100 text-lavanda-600",
                  )}
                >
                  <Icon size={24} aria-hidden />
                </span>
                <span>{label}</span>
                <span
                  aria-hidden
                  className={cn(
                    "absolute right-2.5 top-2.5 flex size-[22px] items-center justify-center rounded-full bg-verde-900 text-white transition-[opacity,transform] ease-bounce [transition-duration:300ms,450ms]",
                    on ? "scale-100 opacity-100" : "scale-[.3] opacity-0",
                  )}
                >
                  <Check size={14} strokeWidth={3} />
                </span>
              </TiltCard>
            )
          })}
        </div>

        <div
          data-reveal=""
          className="mt-[26px] flex w-full flex-wrap items-center justify-between gap-[18px] rounded-[28px] border border-white/85 bg-white/60 py-[22px] pl-7 pr-[22px] text-left shadow-[0_24px_60px_-30px_rgba(76,52,160,.35)] backdrop-blur-[16px]"
        >
          <div className="flex flex-col gap-2">
            <span className="font-serif text-[clamp(20px,2vw,26px)] text-ink">{COPY.closingTitle}</span>
            <span className="text-[15px] font-semibold text-verde-900">{COPY.closingText}</span>
          </div>
          <MagneticButton
            href={ctaHref}
            variant="none"
            className={cn("h-[54px] whitespace-nowrap px-6 text-white hover:text-white", chosen.length ? "bg-verde-900" : "bg-lavanda-600")}
          >
            <WhatsAppIcon size={18} />
            <span aria-live="polite">{ctaLabel}</span>
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
