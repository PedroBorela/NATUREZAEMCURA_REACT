import { useEffect, useState } from "react"
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

// Recalcula os ScrollTriggers quando algo muda a altura da página
function useScrollTriggerRefresh(wide) {
  useEffect(() => {
    let timer
    const refresh = () => {
      clearTimeout(timer)
      timer = setTimeout(() => ScrollTrigger.refresh(), 150)
    }
    // Eventos "load" de <img> não borbulham; captura no document pega os lazy
    const onAssetLoad = (e) => e.target.tagName === "IMG" && refresh()
    window.addEventListener("load", refresh)
    document.addEventListener("load", onAssetLoad, true)
    document.fonts?.ready.then(refresh)
    const fallback = setTimeout(refresh, 1500)
    return () => {
      clearTimeout(timer)
      clearTimeout(fallback)
      window.removeEventListener("load", refresh)
      document.removeEventListener("load", onAssetLoad, true)
    }
  }, [])

  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 80)
    return () => clearTimeout(id)
  }, [wide])
}

export default function LandingV2() {
  const reduce = useReducedMotion()
  const wide = useIsWide()
  const fine = useFinePointer()
  const [loading, setLoading] = useState(() => !reduce)
  const [introReady, setIntroReady] = useState(() => reduce)

  useLenis(!reduce)
  useScrollTriggerRefresh(wide)

  return (
    <>
      {loading && <Loader onReveal={() => setIntroReady(true)} onDone={() => setLoading(false)} />}
      {wide && fine && !reduce && <CustomCursor />}
      <Navbar />
      <WhatsAppButton />
      <BackToTop />
      <main>
        <Hero introReady={introReady} />
        <Faixa />
        <Sintomas />
        <Numeros />
        <Publico />
        <Metodo />
        <Servicos />
        <ComoFunciona />
        <Coragem />
        <Diferencial />
        <Depoimentos />
        <Agenda />
        <Sobre />
        <Jornada />
        <Duvidas />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
