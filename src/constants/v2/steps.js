import { CalendarCheck, Ear, Heart, MessageCircle, Route } from "lucide-react"

export const STEPS_COPY = {
  title: { before: "Como funciona o ", accent: "atendimento" },
  lead: "Um processo simples, acolhedor e pensado para o seu bem-estar.",
}

export const STEPS = [
  { icon: MessageCircle, title: "Primeiro contato", text: "Você fala conosco pelo WhatsApp, telefone ou pelo site." },
  { icon: Ear, title: "Escuta inicial", text: "Entendemos suas necessidades e objetivos para te guiar melhor." },
  { icon: Route, title: "Escolha da prática", text: "Juntos, encontramos a vivência ou prática ideal para você." },
  { icon: CalendarCheck, title: "Agendamento", text: "Organizamos data, horário e todas as informações." },
  { icon: Heart, title: "Acompanhamento", text: "Seguimos em contato para apoiar sua jornada e evolução." },
]
