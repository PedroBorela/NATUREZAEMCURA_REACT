import { useRef } from "react"
import { Quote, Star } from "lucide-react"
import { useAmbient } from "@/hooks/useAmbient"
import { useReveal } from "@/hooks/useReveal"
import { Container, Eyebrow, Heading } from "@/components/v2/Typography"
import HandNote from "@/components/v2/HandNote"
import Marquee from "@/components/v2/Marquee"
import { TESTIMONIAL_ROWS, TESTIMONIALS_COPY as COPY } from "@/constants/v2/testimonials"

const fade = "[mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
const initials = (name) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("")

function TestimonialCard({ item, hidden }) {
  return (
    <figure
      aria-hidden={hidden || undefined}
      className="m-0 flex w-[380px] shrink-0 flex-col gap-4 rounded-[26px] border border-white/95 bg-white/[.82] p-[26px] shadow-[inset_0_1px_0_#fff,0_24px_50px_-34px_rgba(76,52,160,.55)]"
    >
      <div className="flex items-center justify-between">
        <Quote size={28} strokeWidth={1.6} fill="currentColor" aria-hidden className="text-[#B9A6EE]" />
        <span role="img" aria-label="5 estrelas" className="flex gap-0.5 text-[#F2B01E]">
          {[0, 1, 2, 3, 4].map((k) => (
            <Star key={k} size={14} strokeWidth={1.5} fill="currentColor" aria-hidden />
          ))}
        </span>
      </div>
      <blockquote className="m-0 text-[15px] leading-[1.6] text-ink">{item.quote}</blockquote>
      <figcaption className="mt-auto flex items-center gap-3">
        {/* Avatar decorativo: iniciais via CSS, o nome vem logo ao lado */}
        <span
          aria-hidden
          data-initials={initials(item.name)}
          style={{ background: item.color }}
          className="flex size-[42px] items-center justify-center rounded-full font-serif text-[17px] text-white before:content-[attr(data-initials)]"
        />
        <span className="flex flex-col gap-0.5">
          <strong className="text-[14.5px] text-ink">{item.name}</strong>
          <span className="text-[12.5px] text-muted">{item.title}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export default function Depoimentos() {
  const ref = useRef(null)
  useReveal(ref)
  useAmbient(ref)

  return (
    <section ref={ref} id="depoimentos" aria-labelledby="depoimentos-title" className="relative overflow-hidden bg-lavanda-75 py-[clamp(90px,10vw,140px)]">
      <div data-blob="" aria-hidden className="pointer-events-none absolute left-[20%] top-[-20%] size-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.9),rgba(255,255,255,0)_65%)]" />
      <HandNote reveal lines={COPY.note} rotate="rotate-6" className="absolute right-[6%] top-[110px] z-[3] text-right" />

      <Container className="mb-[50px] flex flex-col items-center gap-4 text-center">
        <Eyebrow data-reveal="" className="bg-white">
          {COPY.eyebrow}
        </Eyebrow>
        <Heading data-reveal="" id="depoimentos-title" title={COPY.title} className="text-wrap" />
        <p data-reveal="" className="m-0 max-w-[580px] text-[17px] leading-[1.6] text-texto">
          {COPY.lead}
        </p>
      </Container>

      <div className="relative z-[2] flex flex-col gap-[18px]">
        {TESTIMONIAL_ROWS.map((row, r) => (
          <Marquee
            key={r}
            items={row}
            direction={r === 0 ? -1 : 1}
            speed={r === 0 ? 60 : 70}
            pauseOnHover
            className={fade}
            trackClassName="gap-[18px] py-2.5 pr-[18px]"
            renderItem={(item, i, clone) => <TestimonialCard key={`${item.name}-${i}`} item={item} hidden={clone} />}
          />
        ))}
      </div>
    </section>
  )
}
