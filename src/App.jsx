
import CTA from "./sections/Cta"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import BordaOndulada from "./components/BordaOndulada"
import { CardHoverEffectDemo } from "./sections/Cards"
import Numeros from "./sections/Numeros"
import { CarouselDemo } from "./components/CarouselDemo"
import { TimelineDemo } from "./components/TimelineDemo"
import Footer from "./sections/footer"
import VoltarPraCima from "./components/voltarPraCima"
import { InfiniteMovingCardsDemo } from "./components/Testimonial"
import Calendario from "./sections/Calendario"
import LoadingScreen from "./components/LoadingScreen"
import { meusEventos } from "./constants/events"
import { useEffect, useState } from "react"






const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 segundos

    // Limpa o timer se o componente for desmontado
    return () => clearTimeout(timer);
  }, []);


  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <CTA />
      <Numeros />
      <CarouselDemo />
      <BordaOndulada direcao="bottom" />
      <CardHoverEffectDemo />
      <BordaOndulada direcao="top" />
      <InfiniteMovingCardsDemo />
      <Calendario eventos={meusEventos} />
      <Hero />
      <TimelineDemo />


      {/* <Chamado /> */}

      <VoltarPraCima />
      <Footer />
    </main>
  )
}

export default App