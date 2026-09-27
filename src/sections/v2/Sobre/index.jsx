import { useRef } from "react"
import { Check, GraduationCap, Leaf, Quote } from "lucide-react"
import { useAmbient } from "@/hooks/useAmbient"
import { useReveal } from "@/hooks/useReveal"
import { Container, Eyebrow, Heading } from "@/components/v2/Typography"
import Botanical from "@/components/v2/Botanical"
import HandNote from "@/components/v2/HandNote"
import TiltCard from "@/components/v2/TiltCard"
import { ABOUT as COPY, FOUNDER, PARTNER } from "@/constants/v2/about"

const CHIPS = [
  { icon: GraduationCap, className: "bg-verde-100 text-verde-900" },
  { icon: Leaf, className: "bg-lavanda-100 text-lavanda-600" },
]

export default function Sobre() {
  const ref = useRef(null)
  useReveal(ref)
  useAmbient(ref)

  return (
    <section
      ref={ref}
      id="sobre"
      aria-labelledby="sobre-title"
      className="relative overflow-hidden bg-gradient-to-b from-lavanda-bg to-lavanda-50 py-[clamp(90px,10vw,150px)]"
    >
      <img
        data-spin="140"
        src="/imgs/mandala-900.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute -left-[220px] top-10 w-[560px] opacity-[.07]"
      />
      <HandNote reveal lines={COPY.note} rotate="rotate-6" className="absolute right-[5%] top-[130px] text-right" />

      <Container>
        <div className="mb-[60px] flex flex-col items-center gap-4 text-center">
          <Eyebrow data-reveal="">{COPY.eyebrow}</Eyebrow>
          <Heading data-reveal="" id="sobre-title" title={COPY.title} className="text-wrap" />
          <p data-reveal="" className="m-0 text-lg leading-[1.6] text-ink">
            {COPY.subtitle}
          </p>
        </div>

        <div className="mb-[clamp(80px,9vw,120px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(36px,5vw,70px)]">
          <div className="flex flex-col gap-[18px]">
            {COPY.paragraphs.map((p) => (
              <p key={p} data-reveal="" className="m-0 text-pretty text-[16.5px] leading-[1.75] text-texto">
                {p}
              </p>
            ))}
            <div data-reveal="" className="mt-2 rounded-[26px] border border-lavanda-150 bg-white/70 p-[26px] backdrop-blur-[14px]">
              <h3 className="m-0 mb-4 font-serif text-[22px] font-normal text-ink">{COPY.findTitle}</h3>
              <ul data-stagger="" className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-x-[18px] gap-y-2.5 p-0">
                {COPY.find.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-[1.45] text-ink">
                    <span aria-hidden className="mt-px flex size-5 shrink-0 items-center justify-center rounded-full bg-verde-100 text-verde-900">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-3.5">
            {COPY.photos.map((photo, i) => (
              <div
                key={photo.src}
                data-parallax={i === 0 ? "-0.08" : "0.1"}
                className={`aspect-[3/4] overflow-hidden rounded-[28px] shadow-[0_30px_60px_-30px_rgba(42,27,94,.45)] ${i === 0 ? "mt-[50px]" : ""}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="size-full object-cover" />
              </div>
            ))}
            <Botanical name="fern" className="-bottom-10 -right-[30px] w-[150px]" imgClassName="-rotate-[20deg]" />
          </div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(36px,5vw,70px)]">
          <div data-reveal="" className="relative w-full max-w-[520px] justify-self-center">
            <div aria-hidden className="absolute inset-0 translate-x-[18px] translate-y-[18px] rotate-2 rounded-[32px] bg-verde-350 opacity-50" />
            <TiltCard className="relative aspect-square overflow-hidden rounded-[32px] border-[6px] border-white shadow-[0_40px_80px_-40px_rgba(42,27,94,.55)]">
              <img src={FOUNDER.photo.src} alt={FOUNDER.photo.alt} loading="lazy" decoding="async" className="size-full object-cover object-[30%_center]" />
            </TiltCard>
            <div data-pop="" className="absolute -right-3.5 -top-4">
              <div data-float="" className="rounded-full bg-white px-4 py-2.5 text-xs font-extrabold uppercase tracking-[.14em] text-lavanda-600 shadow-[0_18px_30px_-16px_rgba(42,27,94,.4)]">
                {FOUNDER.badge}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[18px]">
            <h3 data-reveal="" className="m-0 font-serif text-[clamp(34px,4vw,52px)] font-normal leading-none text-ink">
              {FOUNDER.name}
            </h3>
            <p data-reveal="" className="m-0 text-pretty text-[16.5px] leading-[1.75] text-texto">
              {FOUNDER.bioBefore}
              <strong className="text-verde-900">{FOUNDER.bioStrong1}</strong>
              {FOUNDER.bioMiddle}
              <strong className="text-verde-900">{FOUNDER.bioStrong2}</strong>
              {FOUNDER.bioAfter}
            </p>
            <figure
              data-reveal=""
              className="relative m-0 rounded-[26px] border border-lavanda-150 bg-white/[.72] p-[26px] shadow-[0_24px_50px_-36px_rgba(76,52,160,.55)] backdrop-blur-[14px]"
            >
              <span aria-hidden className="absolute -top-4 left-[22px] flex size-9 items-center justify-center rounded-full bg-lavanda-600 text-white">
                <Quote size={16} fill="currentColor" />
              </span>
              <blockquote className="m-0 font-serif text-[clamp(16px,1.4vw,18.5px)] leading-[1.6] text-ink">{FOUNDER.quote}</blockquote>
            </figure>
            <div data-reveal="" className="flex flex-wrap gap-2.5">
              {FOUNDER.chips.map((label, i) => {
                const { icon: Icon, className } = CHIPS[i]
                return (
                  <span key={label} className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-bold ${className}`}>
                    <Icon size={16} aria-hidden />
                    {label}
                  </span>
                )
              })}
            </div>
            <div data-reveal="" className="mt-1.5 flex items-center gap-4 rounded-3xl border border-lavanda-150 bg-white p-[18px]">
              {PARTNER.photo ? (
                <img src={PARTNER.photo} alt={PARTNER.name} loading="lazy" decoding="async" className="size-[72px] shrink-0 rounded-full object-cover" />
              ) : (
                <span aria-hidden className="flex size-[72px] shrink-0 items-center justify-center rounded-full bg-lavanda-100 font-serif text-2xl text-lavanda-600">
                  {PARTNER.name.split(" ").map((p) => p[0]).join("")}
                </span>
              )}
              <div className="flex flex-col gap-1">
                <strong className="font-serif text-[19px] font-normal text-ink">{PARTNER.name}</strong>
                <span className="text-[13.5px] leading-[1.5] text-muted">{PARTNER.text}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
