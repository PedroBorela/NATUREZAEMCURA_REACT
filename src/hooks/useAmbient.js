import { gsap, useGSAP } from "@/lib/gsap"
import { useReducedMotion } from "./useReducedMotion"

/*
 * Animações contínuas e parallax de scroll dentro de `scope`:
 *   data-float         flutua em y (yoyo)
 *   data-sway          balança (galhos botânicos)
 *   data-spin="60"     gira 360° na duração indicada (s)
 *   data-breathe       respira (escala)
 *   data-pulse         anel que expande e some
 *   data-blob          manchas de gradiente que vagam
 *   data-parallax="k"  desloca -k*100% (yPercent) ao longo do scroll
 *   data-parallax-img  imagem desliza dentro do container
 * Tudo desligado com prefers-reduced-motion.
 */
export function useAmbient(scope) {
  const reduce = useReducedMotion()

  useGSAP(
    () => {
      if (reduce || !scope.current) return
      const q = gsap.utils.selector(scope)

      q("[data-float]").forEach((el, i) =>
        gsap.to(el, { y: i % 2 ? 10 : -10, duration: 2.4 + (i % 3) * 0.5, yoyo: true, repeat: -1, ease: "sine.inOut" }),
      )
      q("[data-sway]").forEach((el, i) =>
        gsap.to(el, { rotation: `+=${i % 2 ? 5 : -5}`, duration: 3 + (i % 4) * 0.6, yoyo: true, repeat: -1, ease: "sine.inOut" }),
      )
      q("[data-spin]").forEach((el) =>
        gsap.to(el, { rotation: 360, duration: Number(el.dataset.spin) || 60, repeat: -1, ease: "none" }),
      )
      q("[data-breathe]").forEach((el) => gsap.to(el, { scale: 1.08, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut" }))
      q("[data-pulse]").forEach((el) =>
        gsap.fromTo(el, { scale: 1, opacity: 0.8 }, { scale: 1.7, opacity: 0, duration: 1.8, repeat: -1, ease: "power2.out" }),
      )
      q("[data-blob]").forEach((el) =>
        gsap.to(el, {
          x: "random(-140,140)",
          y: "random(-90,90)",
          scale: "random(.8,1.3)",
          duration: "random(7,11)",
          repeat: -1,
          yoyo: true,
          repeatRefresh: true,
          ease: "sine.inOut",
        }),
      )

      q("[data-parallax]").forEach((el) =>
        gsap.to(el, {
          yPercent: -Number(el.dataset.parallax) * 100,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        }),
      )
      q("[data-parallax-img]").forEach((el) =>
        gsap.fromTo(
          el,
          { yPercent: -6 },
          { yPercent: 6, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } },
        ),
      )
    },
    { scope, dependencies: [reduce], revertOnUpdate: true },
  )
}
