import { useId, useRef, useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { useReveal } from "@/hooks/useReveal"
import { Container, Eyebrow, Heading } from "@/components/v2/Typography"
import HandNote from "@/components/v2/HandNote"
import { WhatsAppIcon } from "@/components/v2/icons"
import { FAQ, FAQ_COPY as COPY } from "@/constants/v2/faq"
import { WA_MESSAGES, waLink } from "@/constants/v2/contact"

export default function Duvidas() {
  const ref = useRef(null)
  const baseId = useId()
  const [open, setOpen] = useState(0)
  useReveal(ref)

  return (
    <section ref={ref} id="duvidas" aria-labelledby="duvidas-title" className="relative bg-lavanda-bg py-[clamp(90px,10vw,140px)]">
      <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-[clamp(36px,5vw,70px)]">
        {/* Sticky só com duas colunas; empilhado, as perguntas passavam por cima */}
        <div className="flex flex-col gap-[18px] lg:sticky lg:top-[120px]">
          <Eyebrow data-reveal="" className="self-start">
            {COPY.eyebrow}
          </Eyebrow>
          <Heading data-reveal="" id="duvidas-title" title={COPY.title} className="text-wrap" />
          <p data-reveal="" className="m-0 max-w-[420px] text-[16.5px] leading-[1.6] text-texto">
            {COPY.lead}
          </p>
          <HandNote reveal lines={COPY.note} rotate="-rotate-3" className="mt-1.5 text-[27px] leading-[1.05]" />
          <a
            data-reveal=""
            href={waLink(WA_MESSAGES.faq)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start border-b-[1.5px] border-verde-350 pb-1 text-[14.5px] font-bold text-verde-900 hover:text-verde-700"
          >
            <WhatsAppIcon size={16} />
            {COPY.cta}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            const panelId = `${baseId}-faq-${i}`
            return (
              <div
                key={item.q}
                data-reveal=""
                className={cn(
                  "rounded-[22px] border shadow-[0_18px_40px_-36px_rgba(76,52,160,.6)] transition-[background-color,border-color] duration-[350ms]",
                  isOpen ? "border-lavanda-350 bg-white" : "border-lavanda-150 bg-white/60",
                )}
              >
                <h3 className="m-0">
                  <button
                    id={`${panelId}-btn`}
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent py-[22px] pl-6 pr-[22px] text-left"
                  >
                    <span className="flex items-baseline gap-3.5">
                      <span className="text-xs font-extrabold text-lavanda-500">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-serif text-[clamp(17px,1.5vw,20px)] font-normal leading-[1.3] text-ink">{item.q}</span>
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        "flex size-9 shrink-0 items-center justify-center rounded-full transition-[transform,background-color] ease-bounce [transition-duration:500ms,300ms]",
                        isOpen ? "rotate-45 bg-verde-900 text-white" : "bg-lavanda-100 text-lavanda-600",
                      )}
                    >
                      <Plus size={18} strokeWidth={2.4} />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={`${panelId}-btn`}
                  aria-hidden={!isOpen}
                  className={cn("grid transition-[grid-template-rows] duration-500 ease-expo", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 pb-6 pl-[50px] pr-6 text-[15px] leading-[1.7] text-texto">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
