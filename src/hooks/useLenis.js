import { useEffect } from "react"
import Lenis from "lenis"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const ANCHOR_OFFSET = -90

let lenis = null

// Rola até um elemento (ou posição em px) usando o Lenis quando ativo
export function scrollToTarget(target, { offset = ANCHOR_OFFSET, duration = 1.4 } = {}) {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === "number" ? 0 : offset, duration })
    return
  }
  const top = typeof target === "number" ? target : target.getBoundingClientRect().top + window.scrollY + offset
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" })
}

// Smooth scroll integrado ao ticker do GSAP + âncoras internas com offset
export function useLenis(enabled = true) {
  useEffect(() => {
    let raf = null
    if (enabled) {
      lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 })
      lenis.on("scroll", ScrollTrigger.update)
      raf = (time) => lenis?.raf(time * 1000)
      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(0)
    }

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return
      const link = e.target.closest?.('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute("href")
      const target = id.length > 1 && document.getElementById(id.slice(1))
      if (!target) return
      e.preventDefault()
      scrollToTarget(target)
    }
    document.addEventListener("click", onClick)

    return () => {
      document.removeEventListener("click", onClick)
      if (raf) gsap.ticker.remove(raf)
      if (enabled) {
        gsap.ticker.lagSmoothing(500, 33)
        lenis?.destroy()
        lenis = null
      }
    }
  }, [enabled])
}
