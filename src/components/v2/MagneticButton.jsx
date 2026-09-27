import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap"
import { cn } from "@/lib/utils"
import { useFinePointer } from "@/hooks/useIsWide"
import { useReducedMotion } from "@/hooks/useReducedMotion"

const VARIANTS = {
  primary: "bg-verde-900 text-white shadow-cta hover:bg-verde-700 hover:text-white",
  ghost:
    "border border-lavanda-300 bg-white/70 text-ink backdrop-blur-[10px] hover:border-lavanda-500 hover:bg-white hover:text-lavanda-600",
  white: "bg-white font-bold text-verde-900 hover:bg-[#F3F9EC]",
  lime: "bg-verde-350 font-bold text-verde-rodape shadow-[0_18px_40px_-16px_rgba(157,205,90,.6)] hover:bg-verde-300",
  none: "",
}

/*
 * Link/botão que "gruda" no cursor (só com mouse e sem reduced motion).
 * Links externos ganham target/rel automaticamente.
 */
export default function MagneticButton({ as: Tag = "a", variant = "primary", className, children, href, ...props }) {
  const ref = useRef(null)
  const fine = useFinePointer()
  const reduce = useReducedMotion()

  useGSAP(
    (_, contextSafe) => {
      const el = ref.current
      if (!fine || reduce || !el) return
      const move = contextSafe((e) => {
        const r = el.getBoundingClientRect()
        gsap.to(el, {
          x: (e.clientX - r.left - r.width / 2) * 0.28,
          y: (e.clientY - r.top - r.height / 2) * 0.4,
          duration: 0.4,
          ease: "power3.out",
        })
      })
      const leave = contextSafe(() => gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1,.35)" }))
      el.addEventListener("mousemove", move)
      el.addEventListener("mouseleave", leave)
      return () => {
        el.removeEventListener("mousemove", move)
        el.removeEventListener("mouseleave", leave)
      }
    },
    { dependencies: [fine, reduce], revertOnUpdate: true },
  )

  const external = typeof href === "string" && /^https?:/.test(href)

  return (
    <Tag
      ref={ref}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : null)}
      className={cn(
        "inline-flex h-14 items-center gap-2.5 rounded-full px-[26px] text-[15px] font-semibold transition-[background-color,border-color,color] duration-300",
        VARIANTS[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
