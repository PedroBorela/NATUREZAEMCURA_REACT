
import CTA from "./sections/Cta"
import Navbar from "./sections/Navbar"
import TextCursor from "./blocks/TextAnimations/TextCursor/TextCursor"
import Hero from "./sections/Hero"
import BordaOndulada from "./components/BordaOndulada"
import { AnimatedTestimonialsDemo } from "./sections/Depoimentos"
import { CardHoverEffectDemo } from "./sections/Cards"
import Numeros from "./sections/Numeros"
import { CarouselDemo } from "./components/CarouselDemo"
import { TimelineDemo } from "./components/TimelineDemo"
import Footer from "./sections/footer"
import VoltarPraCima from "./components/voltarPraCima"
import { InfiniteMovingCardsDemo } from "./components/Testimonial"
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <TextCursor spacing={10}/> */}
      <Navbar />
      <CTA />
      <Numeros />
      <TimelineDemo />
      <BordaOndulada direcao="bottom" />
      <CardHoverEffectDemo />
      <BordaOndulada direcao="top" />
      <CarouselDemo />

      <Hero />
      {/* <AnimatedTestimonialsDemo /> */}
      {/* <BordaOndulada direcao="bottom" cor="#567d1e" /> */}
      <InfiniteMovingCardsDemo />
      <BordaOndulada direcao="top" cor="#567d1e"/>
      <VoltarPraCima />
      <Footer />
    </main>
  )
}

export default App