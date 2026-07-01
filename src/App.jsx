import { lazy, Suspense, useEffect, useState } from "react"
import { Hero2 } from "./components/ui/hero-2-1"
import LoadingScreen from "./components/LoadingScreen"
import { meusEventos } from "./constants/events"

const Dores = lazy(() => import("./sections/Dores"))
const Encontrar = lazy(() => import("./sections/Encontrar"))
const Numeros = lazy(() => import("./sections/Numeros"))
const Metodo = lazy(() => import("./sections/Metodo"))
const Objetivos = lazy(() => import("./sections/Objetivos"))
const ParaQuem = lazy(() => import("./sections/ParaQuem"))
const Servicos = lazy(() => import("./sections/Servicos"))
const Diferencial = lazy(() => import("./sections/Diferencial"))
const Acolhimento = lazy(() => import("./sections/Acolhimento"))
const InfiniteMovingCardsDemo = lazy(() => import("./components/Testimonial").then(m => ({ default: m.InfiniteMovingCardsDemo })))
const Calendario = lazy(() => import("./sections/Calendario"))
const Sobre = lazy(() => import("./sections/Hero"))
const TimelineDemo = lazy(() => import("./components/TimelineDemo").then(m => ({ default: m.TimelineDemo })))
const Faq = lazy(() => import("./sections/Faq"))
const CtaFinal = lazy(() => import("./sections/CtaFinal"))
const Footer = lazy(() => import("./sections/footer"))
const VoltarPraCima = lazy(() => import("./components/voltarPraCima"))

const SectionFallback = () => <div className="w-full h-48 bg-transparent" />

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let minDelayDone = false;
    let windowLoaded = false;

    const tryHide = () => {
      if (minDelayDone && windowLoaded) setIsLoading(false);
    };

    const timer = setTimeout(() => {
      minDelayDone = true;
      tryHide();
    }, 600);

    if (document.readyState === "complete") {
      windowLoaded = true;
    } else {
      const onLoad = () => { windowLoaded = true; tryHide(); };
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-surface">
      <Hero2 />
      <Suspense fallback={<SectionFallback />}>
        <Dores />
        <Encontrar />
        <Numeros />
        <Metodo />
        <Objetivos />
        <ParaQuem />
        <Servicos />
        <Diferencial />
        <Acolhimento />
        <InfiniteMovingCardsDemo />
        <Calendario eventos={meusEventos} />
        <Sobre />
        <TimelineDemo />
        <Faq />
        <CtaFinal />
        <VoltarPraCima />
        <Footer />
      </Suspense>
    </main>
  )
}

export default App
