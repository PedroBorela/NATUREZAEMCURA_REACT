import { useRef } from "react"
import { useAmbient } from "@/hooks/useAmbient"
import { useReveal } from "@/hooks/useReveal"
import { Container } from "@/components/v2/Typography"
import TiltCard from "@/components/v2/TiltCard"
import { STATS } from "@/constants/v2/numbers"

export default function Numeros() {
  const ref = useRef(null)
  useReveal(ref)
  useAmbient(ref)

  return (
    <section ref={ref} aria-label="Números" className="relative overflow-hidden bg-verde-mata py-[clamp(70px,8vw,110px)]">
      <div data-blob="" aria-hidden className="pointer-events-none absolute left-[10%] top-[-30%] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(140,108,230,.45),rgba(140,108,230,0)_65%)]" />
      <div data-blob="" aria-hidden className="pointer-events-none absolute bottom-[-40%] right-0 size-[620px] rounded-full bg-[radial-gradient(circle,rgba(156,204,101,.35),rgba(156,204,101,0)_65%)]" />
      <img
        data-spin="90"
        src="/imgs/mandala-900.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute -right-[180px] top-1/2 -mt-[300px] size-[600px] opacity-[.06] invert"
      />

      <Container data-stagger="" className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4">
        {STATS.map(({ icon: Icon, prefix, value, label }) => (
          <TiltCard
            key={label}
            className="flex flex-col gap-3 rounded-[26px] border border-white/[.14] bg-white/[.07] px-[26px] py-7 shadow-[inset_0_1px_0_rgba(255,255,255,.18)] backdrop-blur-[14px]"
          >
            <span className="flex size-12 items-center justify-center rounded-[14px] bg-[rgba(201,184,255,.18)] text-lavanda-300">
              <Icon size={24} aria-hidden />
            </span>
            <span className="flex items-baseline font-serif text-[clamp(46px,5vw,68px)] leading-none text-white">
              <span className="text-verde-300">{prefix}</span>
              <span data-count={value}>{value.toLocaleString("pt-BR")}</span>
            </span>
            <span className="text-[15px] leading-[1.4] text-verde-salvia">{label}</span>
          </TiltCard>
        ))}
      </Container>
    </section>
  )
}
