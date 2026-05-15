import { lazy, Suspense, useEffect, useState } from "react"
import { Hero2 } from "./components/ui/hero-2-1"
import BordaOndulada from "./components/BordaOndulada"
import LoadingScreen from "./components/LoadingScreen"
import { meusEventos } from "./constants/events"

const Hero = lazy(() => import("./sections/Hero"))
const CardHoverEffectDemo = lazy(() => import("./sections/Cards").then(m => ({ default: m.CardHoverEffectDemo })))
const Numeros = lazy(() => import("./sections/Numeros"))
const CarouselDemo = lazy(() => import("./components/CarouselDemo").then(m => ({ default: m.CarouselDemo })))
const TimelineDemo = lazy(() => import("./components/TimelineDemo").then(m => ({ default: m.TimelineDemo })))
const Footer = lazy(() => import("./sections/footer"))
const VoltarPraCima = lazy(() => import("./components/voltarPraCima"))
const InfiniteMovingCardsDemo = lazy(() => import("./components/Testimonial").then(m => ({ default: m.InfiniteMovingCardsDemo })))
const Calendario = lazy(() => import("./sections/Calendario"))

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

export default App
