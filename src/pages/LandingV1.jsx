import { lazy, Suspense, useEffect, useState } from "react"
import { Hero2 } from "../components/ui/hero-2-1"
import BordaOndulada from "../components/BordaOndulada"
import LoadingScreen from "../components/LoadingScreen"
import { meusEventos } from "../constants/events"
import "../styles/legacy.css"

const LEGACY_FONTS = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap"

const Hero = lazy(() => import("../sections/Hero"))
const CardHoverEffectDemo = lazy(() => import("../sections/Cards").then(m => ({ default: m.CardHoverEffectDemo })))
const Numeros = lazy(() => import("../sections/Numeros"))
const CarouselDemo = lazy(() => import("../components/CarouselDemo").then(m => ({ default: m.CarouselDemo })))
const TimelineDemo = lazy(() => import("../components/TimelineDemo").then(m => ({ default: m.TimelineDemo })))
const Footer = lazy(() => import("../sections/footer"))
const VoltarPraCima = lazy(() => import("../components/voltarPraCima"))
const InfiniteMovingCardsDemo = lazy(() => import("../components/Testimonial").then(m => ({ default: m.InfiniteMovingCardsDemo })))
const Calendario = lazy(() => import("../sections/Calendario"))

const SectionFallback = () => <div className="w-full h-48 bg-transparent" />

const LandingV1 = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Fontes da landing antiga (a v2 usa outras, carregadas no index.html)
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = LEGACY_FONTS;
    document.head.appendChild(link);
    return () => link.remove();
  }, []);

  useEffect(() => {
    let minDelayDone = false;
    let windowLoaded = false;

    const tryHide = () => {
      if (minDelayDone && windowLoaded) setIsLoading(false);
    };

    const timer = setTimeout(() => {
      minDelayDone = true;
      tryHide();
    }, 800);

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
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero2 />
      <Suspense fallback={<SectionFallback />}>
        <Numeros />
        <CarouselDemo />
        <BordaOndulada direcao="bottom" />
        <CardHoverEffectDemo />
        <BordaOndulada direcao="top" />
        <InfiniteMovingCardsDemo />
        <Calendario eventos={meusEventos} />
        <Hero />
        <TimelineDemo />
        <VoltarPraCima />
        <Footer />
      </Suspense>
    </main>
  )
}

export default LandingV1
