
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
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      {/* <TextCursor spacing={10}/> */}
      <Navbar />
      <CTA />
      <CarouselDemo />
      <Numeros />
      <TimelineDemo />
      <BordaOndulada direcao="bottom" />
      <CardHoverEffectDemo />
      <BordaOndulada direcao="top" />
      <Hero />
      <AnimatedTestimonialsDemo />
    </main>
  )
}

export default App