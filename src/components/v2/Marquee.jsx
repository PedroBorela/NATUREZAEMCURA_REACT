import { Fragment, useRef } from "react"
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"
import { cn } from "@/lib/utils"
import { useFinePointer } from "@/hooks/useIsWide"
import { useReducedMotion } from "@/hooks/useReducedMotion"

/*
 * Faixa infinita. Os itens são renderizados duas vezes e a trilha anda 50%.
 * Acelera com a velocidade do scroll e (opcionalmente) pausa no hover.
 *   direction  -1 = para a esquerda, 1 = para a direita
 *   speed      segundos para percorrer metade da trilha
 */
export default function Marquee({ items, renderItem, direction = -1, speed = 40, pauseOnHover = false, className, trackClassName, ...props }) {
  const wrap = useRef(null)
  const track = useRef(null)
  const fine = useFinePointer()
  const reduce = useReducedMotion()

  useGSAP(
    (_, contextSafe) => {
      if (reduce) return
      const tw =
        direction < 0
          ? gsap.to(track.current, { xPercent: -50, duration: speed, ease: "none", repeat: -1 })
          : gsap.fromTo(track.current, { xPercent: -50 }, { xPercent: 0, duration: speed, ease: "none", repeat: -1 })

      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (tw.timeScale() === 0) return
          const boost = Math.min(Math.abs(self.getVelocity()) / 500, 4)
          gsap.to(tw, { timeScale: 1 + boost, duration: 0.2, overwrite: true, onComplete: () => gsap.to(tw, { timeScale: 1, duration: 0.8 }) })
        },
      })

      if (!pauseOnHover || !fine) return
      const el = wrap.current
      const pause = contextSafe(() => gsap.to(tw, { timeScale: 0, duration: 0.6, overwrite: true }))
      const play = contextSafe(() => gsap.to(tw, { timeScale: 1, duration: 0.6, overwrite: true }))
      el.addEventListener("mouseenter", pause)
      el.addEventListener("mouseleave", play)
      return () => {
        el.removeEventListener("mouseenter", pause)
        el.removeEventListener("mouseleave", play)
      }
    },
    { dependencies: [reduce, fine, direction, speed, pauseOnHover], revertOnUpdate: true },
  )

  return (
    <div ref={wrap} className={cn("overflow-hidden", className)} {...props}>
      <div ref={track} className={cn("flex w-max", trackClassName)}>
        {[false, true].map((clone) => (
          <Fragment key={String(clone)}>{items.map((item, i) => renderItem(item, i, clone))}</Fragment>
        ))}
      </div>
    </div>
  )
}
