import { useRef } from "react"
import { gsap, useGSAP } from "@/lib/gsap"

/*
 * Anel + ponto que seguem o mouse; o anel cresce sobre links, botões e cards
 * com tilt. Renderizar apenas em telas largas com ponteiro fino.
 */
export default function CustomCursor() {
  const ring = useRef(null)
  const dot = useRef(null)

  useGSAP(() => {
    const cur = ring.current
    const pt = dot.current
    const cx = gsap.quickTo(cur, "x", { duration: 0.45, ease: "power3" })
    const cy = gsap.quickTo(cur, "y", { duration: 0.45, ease: "power3" })
    const dx = gsap.quickTo(pt, "x", { duration: 0.08 })
    const dy = gsap.quickTo(pt, "y", { duration: 0.08 })

    const move = (e) => {
      gsap.set([cur, pt], { opacity: 1 })
      cx(e.clientX)
      cy(e.clientY)
      dx(e.clientX)
      dy(e.clientY)
    }
    const over = (e) => {
      const hot = e.target.closest?.("a,button,[data-tilt]")
      gsap.to(cur, {
        scale: hot ? 1.9 : 1,
        backgroundColor: hot ? "rgba(140,108,230,.12)" : "rgba(140,108,230,0)",
        borderColor: hot ? "#8C6CE6" : "#6B46C1",
        duration: 0.35,
      })
    }
    const leave = () => gsap.to([cur, pt], { opacity: 0, duration: 0.2 })

    window.addEventListener("mousemove", move)
    document.addEventListener("mouseover", over)
    document.documentElement.addEventListener("mouseleave", leave)
    return () => {
      window.removeEventListener("mousemove", move)
      document.removeEventListener("mouseover", over)
      document.documentElement.removeEventListener("mouseleave", leave)
    }
  })

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[19px] -mt-[19px] flex size-[38px] items-center justify-center rounded-full border-[1.5px] border-lavanda-600 opacity-0 mix-blend-multiply"
      />
      <div ref={dot} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[9999] -ml-[3px] -mt-[3px] size-1.5 rounded-full bg-verde-700 opacity-0" />
    </>
  )
}
