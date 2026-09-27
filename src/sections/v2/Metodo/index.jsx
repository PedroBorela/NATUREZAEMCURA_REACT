import { useRef } from "react"
import { Check } from "lucide-react"
import { gsap, useGSAP } from "@/lib/gsap"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useReveal } from "@/hooks/useReveal"
import { Container, Eyebrow, Heading } from "@/components/v2/Typography"
import { METHOD_CARDS, METHOD_COPY as COPY } from "@/constants/v2/method"

const THEMES = {
  white: {
    card: "bg-white border-lavanda-150",
    icon: "bg-verde-100 text-verde-900",
    number: "text-lavanda-200",
    title: "text-ink",
    text: "text-texto",
    item: "text-ink",
    check: "text-verde-700",
    foot: "text-muted",
  },
  lavanda: {
    card: "bg-lavanda-75 border-lavanda-200",
    icon: "bg-white text-lavanda-600",
    number: "text-[#D3C5F7]",
    title: "text-ink",
    text: "text-texto",
    item: "text-ink",
    check: "text-lavanda-600",
    foot: "text-muted",
  },
  verde: {
    card: "bg-verde-50 border-[#DCEBCD]",
    icon: "bg-white text-verde-900",
    number: "text-verde-200",
    title: "text-ink",
    text: "text-texto",
    item: "text-ink",
    check: "text-verde-700",
    foot: "text-muted",
  },
  ink: {
    card: "bg-ink border-[#3A2A78] shadow-[0_40px_80px_-50px_rgba(42,27,94,.7)]",
    icon: "bg-white/10 text-verde-300",
    number: "text-[#4A3A8C]",
    title: "text-white",
    text: "text-lavanda-300",
    item: "text-white",
    check: "text-verde-300",
    foot: "text-[#B9ABE6]",
  },
}

// Cada card gruda um pouco mais abaixo do anterior
const STICKY_TOP = ["top-[110px]", "top-[130px]", "top-[150px]", "top-[170px]"]

export default function Metodo() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  useReveal(ref)

  // Cards empilhados: o de baixo encolhe e esmaece quando o próximo sobe
  useGSAP(
    () => {
      if (reduce) return
      const cards = gsap.utils.toArray("[data-stack-card]", ref.current)
      cards.slice(0, -1).forEach((card, i) =>
        gsap.to(card, {
          scale: 0.93,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: { trigger: cards[i + 1], start: "top 85%", end: "top 25%", scrub: true },
        }),
      )
    },
    { scope: ref, dependencies: [reduce], revertOnUpdate: true },
  )

  return (
    <section
      ref={ref}
      id="metodo"
      aria-labelledby="metodo-title"
      className="relative bg-gradient-to-b from-lavanda-bg to-lavanda-75 pb-[clamp(60px,6vw,100px)] pt-[clamp(90px,10vw,140px)]"
    >
      <Container>
        <div className="mb-14 flex flex-col items-center gap-4 text-center">
          <Eyebrow data-reveal="">{COPY.eyebrow}</Eyebrow>
          <Heading data-reveal="" id="metodo-title" title={COPY.title} />
          <p data-reveal="" className="m-0 text-lg leading-[1.6] text-ink">
            {COPY.subtitle}
          </p>
          <p data-reveal="" className="m-0 max-w-[620px] text-pretty text-[15px] leading-[1.7] text-muted">
            {COPY.text}
          </p>
        </div>

        <div className="flex flex-col gap-7">
          {METHOD_CARDS.map((card, i) => {
            const t = THEMES[card.theme]
            const Icon = card.icon
            return (
              <article
                key={card.n}
                data-stack-card=""
                className={cn(
                  "sticky grid origin-top grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] overflow-hidden rounded-[36px] border shadow-[0_40px_80px_-50px_rgba(42,27,94,.5)]",
                  STICKY_TOP[i],
                  t.card,
                )}
              >
                <div className="flex flex-col gap-4 p-[clamp(28px,4vw,52px)]">
                  <div className="flex items-start justify-between">
                    <span className={cn("flex size-14 items-center justify-center rounded-[18px]", t.icon)}>
                      <Icon size={28} aria-hidden />
                    </span>
                    {/* Número decorativo via CSS (fora da árvore de acessibilidade) */}
                    <span
                      aria-hidden
                      data-n={card.n}
                      className={cn("font-serif text-[clamp(60px,7vw,96px)] leading-[.8] before:content-[attr(data-n)]", t.number)}
                    />
                  </div>
                  <h3 className={cn("m-0 font-serif text-[clamp(26px,2.6vw,36px)] font-normal", t.title)}>{card.title}</h3>
                  <p className={cn("m-0 text-[15.5px] leading-[1.6]", t.text)}>{card.text}</p>
                  {card.items.length > 0 && (
                    <ul
                      className={cn(
                        "m-0 grid list-none gap-x-[18px] gap-y-2.5 p-0",
                        card.theme === "lavanda" ? "grid-cols-[repeat(auto-fit,minmax(200px,1fr))]" : "grid-cols-[repeat(auto-fit,minmax(180px,1fr))]",
                      )}
                    >
                      {card.items.map((item) => (
                        <li key={item} className={cn("flex items-center gap-[9px] text-[14.5px]", t.item)}>
                          <Check size={16} strokeWidth={2.5} aria-hidden className={cn("shrink-0", t.check)} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className={cn("m-0 mt-auto pt-3.5 text-[13.5px] italic", t.foot)}>{card.footnote}</p>
                </div>
                <div className="relative min-h-[320px]">
                  <img
                    src={card.img.src}
                    alt={card.img.alt}
                    loading="lazy"
                    decoding="async"
                    style={card.img.position ? { objectPosition: card.img.position } : undefined}
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
