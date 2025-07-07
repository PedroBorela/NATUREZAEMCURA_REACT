
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
import Chamado from "./sections/Chamado"
import Calendario from "./sections/Calendario"
const App = () => {
  const meusEventos = [
    { id: 1, title: "Aula de Yoga ao Nascer do Sol", date: "2025-07-06", color: "bg-orquideaLilas-300" },
    { id: 2, title: "Curso de Reiki Nível I", date: "2025-07-12", color: "bg-azulArpoador-300" },
    { id: 3, title: "Encontro Mensal de Cura", date: "2025-07-13", color: "bg-verdeEsmeralda-300" },
    { id: 4, title: "Excursão à Cachoeira Sagrada", date: "2025-07-19", color: "bg-azulArpoador-400" },
    { id: 5, title: "Cerimônia Espiritual Indígena", date: "2025-07-20", color: "bg-orquideaLilas-400" },
    { id: 6, title: "Cerimônia de Cacau Medicinal", date: "2025-07-26", color: "bg-verdeEsmeralda-400" },
    { id: 7, title: "Círculo Sagrado para Mulheres", date: "2025-07-27", color: "bg-orquideaLilas-500" },

    { id: 8, title: "Yoga Restaurativa", date: "2025-08-03", color: "bg-orquideaLilas-300" },
    { id: 9, title: "Reiki Avançado", date: "2025-08-09", color: "bg-azulArpoador-300" },
    { id: 10, title: "Encontro de Integração", date: "2025-08-10", color: "bg-verdeEsmeralda-300" },
    { id: 11, title: "Excursão ao Vale das Flores", date: "2025-08-16", color: "bg-azulArpoador-400" },
    { id: 12, title: "Cerimônia da Lua Cheia", date: "2025-08-17", color: "bg-orquideaLilas-400" },
    { id: 13, title: "Workshop de Cacau e Dança", date: "2025-08-23", color: "bg-verdeEsmeralda-400" },
    { id: 14, title: "Encontro de Mulheres Xamânicas", date: "2025-08-24", color: "bg-orquideaLilas-500" },

    { id: 15, title: "Yoga com Lua Nova", date: "2025-09-06", color: "bg-orquideaLilas-300" },
    { id: 16, title: "Curso de Reiki Nível II", date: "2025-09-13", color: "bg-azulArpoador-300" },
    { id: 17, title: "Encontro Mensal de Partilha", date: "2025-09-14", color: "bg-verdeEsmeralda-300" },
    { id: 18, title: "Excursão à Montanha Sagrada", date: "2025-09-20", color: "bg-azulArpoador-400" },
    { id: 19, title: "Cerimônia do Fogo Sagrado", date: "2025-09-21", color: "bg-orquideaLilas-400" },
    { id: 20, title: "Cacau e Meditação Guiada", date: "2025-09-27", color: "bg-verdeEsmeralda-400" },
    { id: 21, title: "Círculo de Mulheres na Natureza", date: "2025-09-28", color: "bg-orquideaLilas-500" }
  ];


  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <CTA />
      <TimelineDemo />
      <Hero />
      <Numeros />
      
      <BordaOndulada direcao="bottom" />
      <CardHoverEffectDemo />
      <BordaOndulada direcao="top" />
      <CarouselDemo />

      <InfiniteMovingCardsDemo />
      <Chamado />
      
      <Calendario eventos={meusEventos} />
      <VoltarPraCima />
      <Footer />
    </main>
  )
}

export default App