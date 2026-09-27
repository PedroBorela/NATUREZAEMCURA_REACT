import { useRef } from "react"
import { ArrowRight, Check } from "lucide-react"
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"
import { cn } from "@/lib/utils"
import { useIsWide } from "@/hooks/useIsWide"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useReveal } from "@/hooks/useReveal"
import { Eyebrow, Heading } from "@/components/v2/Typography"
import { CHAPTERS, TIMELINE_COPY as COPY } from "@/constants/v2/timeline"

/*
 * Trajetória. Em telas largas vira um trilho horizontal: a seção ganha altura
 * extra (distância do trilho + 100vh), o conteúdo fica sticky e o scroll
 * vertical move o trilho para a esquerda. Com reduced motion, empilha.
 */
export default function Jornada() {
  const ref = useRef(null)
  const track = useRef(null)
  const wide = useIsWide()
  const reduce = useReducedMotion()
  const horizontal = wide && !reduce
  useReveal(ref)

  useGSAP(
    () => {
      if (!horizontal) return
      const section = ref.current
      const dist = () => Math.max(0, track.current.scrollWidth - window.innerWidth)
      const measure = () => {
        section.style.height = `${dist() + window.innerHeight}px`
      }
      measure()
      ScrollTrigger.addEventListener("refreshInit", measure)

      const hTween = gsap.to(track.current, {
        x: () => -dist(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(1, dist())}`,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => gsap.set("[data-hprogress]", { scaleX: self.progress }),
        },
      })

      // Fotos de cada capítulo entram com zoom-out e fade conforme o trilho passa
      gsap.utils.toArray("[data-chapter]", section).forEach((chapter) =>
        gsap.fromTo(
          chapter.querySelectorAll("img"),
          { scale: 1.25, opacity: 0.35 },
          {
            scale: 1,
            opacity: 1,
            ease: "none",
            scrollTrigger: { trigger: chapter, containerAnimation: hTween, start: "left right", end: "center center", scrub: true },
          },
        ),
      )

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", measure)
        section.style.height = ""
      }
    },
    { scope: ref, dependencies: [horizontal], revertOnUpdate: true },
  )

  return (
    <section ref={ref} id="trajetoria" aria-labelledby="trajetoria-title" className="relative bg-verde-50">
      <div className={cn("flex flex-col justify-center", horizontal ? "sticky top-0 h-screen overflow-hidden" : "relative py-[90px]")}>
        <div
          ref={track}
          className={cn(
            "flex gap-[clamp(30px,4vw,60px)] px-[clamp(20px,4vw,40px)]",
            horizontal ? "w-max flex-row items-center" : "w-full flex-col items-stretch",
          )}
        >
          <div className={cn("flex shrink-0 flex-col gap-[18px]", horizontal ? "w-[420px]" : "w-full")}>
            <Eyebrow className="self-start bg-white text-verde-900">{COPY.eyebrow}</Eyebrow>
            <Heading id="trajetoria-title" title={COPY.title} className="text-wrap text-[clamp(34px,4.2vw,56px)] tracking-normal" />
            <p className="m-0 text-base leading-[1.7] text-texto">{COPY.lead}</p>
            {horizontal && (
              <span className="mt-2.5 flex items-center gap-2.5 text-[13px] font-bold text-verde-900">
                {COPY.hint} <ArrowRight size={18} aria-hidden />
              </span>
            )}
          </div>

          {CHAPTERS.map((ch) => (
            <article
              key={ch.n}
              data-chapter=""
              className={cn(
                "grid shrink-0 grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-center gap-[26px] rounded-[34px] border border-white/95 bg-white/[.72] p-[clamp(22px,3vw,34px)] shadow-[0_30px_60px_-40px_rgba(27,94,32,.5)] backdrop-blur-[14px]",
                horizontal ? "w-[780px]" : "w-full",
              )}
            >
              <div className="flex flex-col gap-3.5">
                <span aria-hidden className="font-serif text-[64px] leading-[.8] text-verde-200">
                  {ch.n}
                </span>
                <h3 className="m-0 font-serif text-[clamp(26px,2.6vw,34px)] font-normal leading-[1.1] text-verde-900">{ch.title}</h3>
                <p className="m-0 text-[15px] leading-[1.7] text-texto">{ch.text}</p>
                {ch.bullets.length > 0 && (
                  <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                    {ch.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink">
                        <Check size={16} strokeWidth={2.5} aria-hidden className="mt-0.5 shrink-0 text-verde-700" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {ch.imgs.map((src) => (
                  <div key={src} className="aspect-square overflow-hidden rounded-[18px]">
                    <div className="size-full transition-transform duration-[800ms] ease-expo hover:scale-[1.08]">
                      <img src={src} alt="" loading="lazy" decoding="async" className="size-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {horizontal && (
          <div aria-hidden className="absolute inset-x-[clamp(20px,4vw,40px)] bottom-10 h-[3px] rounded-[3px] bg-verde-900/[.12]">
            <div data-hprogress="" className="size-full origin-left scale-x-0 rounded-[3px] bg-verde-900" />
          </div>
        )}
      </div>
    </section>
  )
}
