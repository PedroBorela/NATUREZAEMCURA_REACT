import { memo, useEffect, useRef, useState } from "react"
import { ScrollTrigger } from "@/lib/gsap"
import { useFinePointer, useIsWide } from "@/hooks/useIsWide"
import { useLenis } from "@/hooks/useLenis"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import BackToTop from "@/components/v2/BackToTop"
import CustomCursor from "@/components/v2/CustomCursor"
import Loader from "@/components/v2/Loader"
import WhatsAppButton from "@/components/v2/WhatsAppButton"
import Navbar from "@/sections/v2/Navbar"
import Hero from "@/sections/v2/Hero"
import Faixa from "@/sections/v2/Faixa"
import Sintomas from "@/sections/v2/Sintomas"
import Numeros from "@/sections/v2/Numeros"
import Publico from "@/sections/v2/Publico"
import Metodo from "@/sections/v2/Metodo"
import Servicos from "@/sections/v2/Servicos"
import ComoFunciona from "@/sections/v2/ComoFunciona"
import Coragem from "@/sections/v2/Coragem"
import Diferencial from "@/sections/v2/Diferencial"
import Depoimentos from "@/sections/v2/Depoimentos"
import Agenda from "@/sections/v2/Agenda"
import Sobre from "@/sections/v2/Sobre"
import Jornada from "@/sections/v2/Jornada"
import Duvidas from "@/sections/v2/Duvidas"
import CtaFinal from "@/sections/v2/CtaFinal"
import Footer from "@/sections/v2/Footer"

// Recalcula os ScrollTriggers quando fontes/imagens terminam de carregar.
// Um único refresh com debounce: cada refresh relayouta a página inteira.
function useScrollTriggerRefresh(wide) {
  useEffect(() => {
    let timer
    const refresh = () => {
      clearTimeout(timer)
      timer = setTimeout(() => ScrollTrigger.refresh(), 200)
    }
    if (document.readyState === "complete") refresh()
    else window.addEventListener("load", refresh, { once: true })
    document.fonts?.ready.then(refresh)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("load", refresh)
    }
  }, [])

  // Troca de layout desktop/mobile (pula a primeira execução)
  const first = useRef(true)
  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    const id = setTimeout(() => ScrollTrigger.refresh(), 80)
    return () => clearTimeout(id)
  }, [wide])
}

// Seções abaixo do hero, na ordem da referência. memo: não re-renderizam
// quando a abertura ou a montagem progressiva mudam de estado
const SECTIONS = [
  Faixa,
  Sintomas,
  Numeros,
  Publico,
  Metodo,
  Servicos,
  ComoFunciona,
  Coragem,
  Diferencial,
  Depoimentos,
  Agenda,
  Sobre,
  Jornada,
  Duvidas,
  CtaFinal,
].map((Section) => memo(Section))
const FIRST_BATCH = 2

/*
 * Monta as seções uma por task (em vez de um commit gigante) para não travar
 * a main thread no carregamento. Tudo acontece enquanto o loader cobre a
 * tela; no fim, um refresh reposiciona os ScrollTriggers de "fim da página".
 */
const Sections = memo(function Sections() {
  const [count, setCount] = useState(FIRST_BATCH)

  useEffect(() => {
    if (count >= SECTIONS.length) {
      ScrollTrigger.refresh()
      return
    }
    const id = setTimeout(() => setCount((c) => c + 1), 0)
    return () => clearTimeout(id)
  }, [count])

  return SECTIONS.slice(0, count).map((Section, i) => <Section key={i} />)
})
const StaticFooter = memo(Footer)
const StaticHero = memo(Hero)
const StaticNavbar = memo(Navbar)

export default function LandingV2() {
  const reduce = useReducedMotion()
  const wide = useIsWide()
  const fine = useFinePointer()
  const [loading, setLoading] = useState(() => !reduce)
  // Fases da abertura: idle (hero visível sob o loader) → cover → reveal
  const [intro, setIntro] = useState(() => (reduce ? "reveal" : "idle"))

  useLenis(!reduce)
  useScrollTriggerRefresh(wide)

  return (
    <>
      {loading && <Loader onCover={() => setIntro("cover")} onReveal={() => setIntro("reveal")} onDone={() => setLoading(false)} />}
      {wide && fine && !reduce && <CustomCursor />}
      <StaticNavbar />
      <WhatsAppButton />
      <BackToTop />
      <main>
        <StaticHero intro={intro} />
        <Sections />
      </main>
      <StaticFooter />
    </>
  )
}
