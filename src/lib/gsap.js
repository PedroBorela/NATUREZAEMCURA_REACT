// Ponto único de registro dos plugins GSAP usados pela landing v2
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

/*
 * Mantém animações infinitas pausadas enquanto `trigger` está fora da tela.
 * Economiza main thread (e repaints de backdrop-filter) no mobile.
 * Chamar dentro de useGSAP para o ScrollTrigger ser limpo junto.
 */
export function pauseOffscreen(trigger, tweens) {
  const list = tweens.filter(Boolean)
  if (!list.length) return
  const set = (active) => list.forEach((t) => (active ? t.resume() : t.pause()))
  const st = ScrollTrigger.create({ trigger, start: "top bottom", end: "bottom top", onToggle: (self) => set(self.isActive) })
  set(st.isActive)
}

export { gsap, ScrollTrigger, useGSAP }
