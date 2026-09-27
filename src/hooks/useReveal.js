import { gsap, useGSAP } from "@/lib/gsap"
import { useReducedMotion } from "./useReducedMotion"

/*
 * Reveals disparados uma única vez por IntersectionObserver (imunes a posições
 * desatualizadas do ScrollTrigger). Atributos suportados dentro de `scope`:
 *   data-reveal   sobe e aparece
 *   data-chapter  idem (capítulos da jornada)
 *   data-stagger  filhos sobem em sequência
 *   data-bounce   filhos entram com elastic em ordem aleatória
 *   data-pop      escala com elastic (os do hero ficam na timeline do Hero)
 *   data-count    contador numérico até o valor do atributo
 * Com prefers-reduced-motion nada é escondido.
 */
export function useReveal(scope) {
  const reduce = useReducedMotion()

  useGSAP(
    (_, contextSafe) => {
      const root = scope.current
      if (reduce || !root) return

      const all = (sel) => [...root.querySelectorAll(sel)].filter((el) => !el.closest("[data-hero]"))
      const plays = new Map()
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            io.unobserve(entry.target)
            plays.get(entry.target)?.()
            plays.delete(entry.target)
          }),
        { rootMargin: "0px 0px -6% 0px", threshold: 0.01 },
      )
      const when = (el, hide, play) => {
        hide()
        plays.set(el, contextSafe(play))
        io.observe(el)
      }
      const rnd = gsap.utils.random

      all("[data-reveal], [data-chapter]").forEach((el) =>
        when(
          el,
          () => gsap.set(el, { y: 44, opacity: 0 }),
          () => gsap.to(el, { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", clearProps: "transform" }),
        ),
      )

      all("[data-stagger]").forEach((el) => {
        const kids = [...el.children]
        when(
          el,
          () => gsap.set(kids, { y: 36, opacity: 0 }),
          () => gsap.to(kids, { y: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: "power3.out", clearProps: "transform" }),
        )
      })

      all("[data-bounce]").forEach((el) => {
        const kids = [...el.children]
        when(
          el,
          () => gsap.set(kids, { y: 70, scale: 0.72, rotation: () => rnd(-8, 8), opacity: 0 }),
          () =>
            gsap.to(kids, {
              y: 0,
              scale: 1,
              rotation: 0,
              opacity: 1,
              duration: 1.2,
              stagger: { each: 0.06, from: "random" },
              ease: "elastic.out(1,.6)",
              clearProps: "transform",
            }),
        )
      })

      all("[data-pop]").forEach((el) =>
        when(
          el,
          () => gsap.set(el, { scale: 0, opacity: 0 }),
          () => gsap.to(el, { scale: 1, opacity: 1, duration: 1.1, ease: "elastic.out(1,.5)" }),
        ),
      )

      all("[data-count]").forEach((el) => {
        const to = Number(el.dataset.count)
        const counter = { v: 0 }
        const render = () => (el.textContent = Math.round(counter.v).toLocaleString("pt-BR"))
        when(
          el,
          render,
          () => gsap.to(counter, { v: to, duration: 2.2, ease: "power2.out", onUpdate: render }),
        )
      })

      return () => {
        io.disconnect()
        // Restaura o valor final dos contadores (o texto é mutado fora do React)
        all("[data-count]").forEach((el) => (el.textContent = Number(el.dataset.count).toLocaleString("pt-BR")))
      }
    },
    { scope, dependencies: [reduce], revertOnUpdate: true },
  )
}
