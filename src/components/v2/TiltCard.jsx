import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap"
import { useFinePointer } from "@/hooks/useIsWide"
import { useReducedMotion } from "@/hooks/useReducedMotion"

/*
 * Card com inclinação 3D seguindo o mouse. Com `spot`, atualiza as variáveis
 * --mx/--my para um brilho radial acompanhar o cursor (usar no background).
 */
export default function TiltCard({ as: Tag = "div", spot = false, max = 10, children, ...props }) {
  const ref = useRef(null)
  const fine = useFinePointer()
  const reduce = useReducedMotion()

  useGSAP(
    (_, contextSafe) => {
      const el = ref.current
      if (!fine || reduce || !el) return
      const move = contextSafe((e) => {
        const r = el.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width
        const py = (e.clientY - r.top) / r.height
        gsap.to(el, { rotationY: (px - 0.5) * max, rotationX: (0.5 - py) * max, transformPerspective: 900, duration: 0.5, ease: "power2.out" })
        if (spot) {
          el.style.setProperty("--mx", `${px * 100}%`)
          el.style.setProperty("--my", `${py * 100}%`)
        }
      })
      const leave = contextSafe(() => gsap.to(el, { rotationX: 0, rotationY: 0, duration: 0.9, ease: "elastic.out(1,.4)" }))
      el.addEventListener("mousemove", move)
      el.addEventListener("mouseleave", leave)
      return () => {
        el.removeEventListener("mousemove", move)
        el.removeEventListener("mouseleave", leave)
      }
    },
    { dependencies: [fine, reduce, spot, max], revertOnUpdate: true },
  )

  return (
    <Tag ref={ref} data-tilt="" {...props}>
      {children}
    </Tag>
  )
}
