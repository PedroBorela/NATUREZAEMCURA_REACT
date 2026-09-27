import { useRef } from "react"
import { ArrowUp } from "lucide-react"
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap"
import { scrollToTarget } from "@/hooks/useLenis"

// Aparece depois de 900px de scroll
export default function BackToTop() {
  const ref = useRef(null)

  useGSAP(() => {
    const el = ref.current
    gsap.set(el, { autoAlpha: 0, scale: 0.6 })
    ScrollTrigger.create({
      start: 900,
      end: "max",
      onToggle: (self) => gsap.to(el, { autoAlpha: self.isActive ? 1 : 0, scale: self.isActive ? 1 : 0.6, duration: 0.3, overwrite: "auto" }),
    })
  })

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => scrollToTarget(0, { duration: 1.6 })}
      aria-label="Voltar ao topo"
      className="fixed bottom-[94px] right-[30px] z-[800] flex size-11 cursor-pointer items-center justify-center rounded-full border border-lavanda-200 bg-white/80 text-lavanda-600 backdrop-blur-[10px]"
    >
      <ArrowUp size={18} aria-hidden />
    </button>
  )
}
