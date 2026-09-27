import { useRef } from "react"
import { ArrowRight, Check } from "lucide-react"
import { useAmbient } from "@/hooks/useAmbient"
import { useReveal } from "@/hooks/useReveal"
import { Container, Eyebrow, Heading } from "@/components/v2/Typography"
import Botanical from "@/components/v2/Botanical"
import HandNote from "@/components/v2/HandNote"
import MagneticButton from "@/components/v2/MagneticButton"
import { AUDIENCE as COPY } from "@/constants/v2/audience"
import { WA_MESSAGES, waLink } from "@/constants/v2/contact"

export default function Publico() {
  const ref = useRef(null)
  useReveal(ref)
  useAmbient(ref)

  return (
    <section ref={ref} id="para-quem" aria-labelledby="para-quem-title" className="relative overflow-hidden bg-lavanda-bg py-[clamp(90px,10vw,150px)]">
      <img
        src="/imgs/florBack-700.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute -bottom-[60px] -right-[120px] w-[520px] opacity-[.12]"
      />

      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(40px,6vw,90px)]">
        <div className="relative">
          <div data-reveal="" className="relative aspect-[5/6] overflow-hidden rounded-[36px] shadow-[0_40px_80px_-40px_rgba(42,27,94,.45)]">
            <img
              data-parallax-img=""
              src={COPY.photo.src}
              alt={COPY.photo.alt}
              loading="lazy"
              decoding="async"
              className="-mt-[10%] h-[120%] w-full object-cover"
            />
          </div>
          <Botanical name="sprig" className="-bottom-10 -left-10 w-[200px]" />
          <HandNote glass lines={COPY.note} rotate="rotate-[5deg]" className="absolute -right-[22px] top-7" />
        </div>

        <div className="flex flex-col gap-[18px]">
          <Eyebrow data-reveal="" className="self-start">
            {COPY.eyebrow}
          </Eyebrow>
          <Heading data-reveal="" id="para-quem-title" title={COPY.title} />
          <p data-reveal="" className="m-0 text-[17px] leading-[1.6] text-texto">
            {COPY.lead}
          </p>
          <ul data-stagger="" className="m-0 mt-1.5 flex list-none flex-col gap-1 p-0">
            {COPY.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3.5 rounded-[14px] px-3.5 py-[11px] text-[15.5px] leading-[1.45] text-ink transition-[background-color,transform] duration-300 ease-spring [transition-duration:300ms,400ms] hover:translate-x-2 hover:bg-lavanda-75"
              >
                <span aria-hidden className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-verde-900 text-white">
                  <Check size={14} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <MagneticButton data-reveal="" href={waLink(WA_MESSAGES.audience)} className="mt-2.5 self-start">
            <span>{COPY.cta}</span>
            <ArrowRight size={18} aria-hidden />
          </MagneticButton>
        </div>
      </Container>
    </section>
  )
}
