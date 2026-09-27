export const WHATSAPP_NUMBER = "5533984385658"

export const waLink = (message) =>
  message ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : `https://wa.me/${WHATSAPP_NUMBER}`

export const CONTACT = {
  phone: "(33) 98438-5658",
  email: "contato@curaintegral.com.br",
  address: "Rua da Conceição, 170 — Manhuaçu, MG",
  city: "Manhuaçu – MG",
}

export const SOCIAL = {
  instagram: "https://www.instagram.com/naturezaemcura/",
  facebook: "https://www.facebook.com/naturezaemcura",
  youtube: "https://www.youtube.com/@Natureza_em_Cura",
}

export const BRAND = {
  name: "Natureza em Cura",
  tagline: "Centro de Cuidado e Cultura",
  logo: "/imgs/logoICone.png",
  logoSmall: "/imgs/logoICone-160.webp",
}

// Mensagens pré-preenchidas de cada CTA
export const WA_MESSAGES = {
  nav: "Olá, gostaria de agendar um atendimento",
  float: "Olá, vim pelo site da Natureza em Cura",
  hero: "Olá, gostaria de agendar meu atendimento",
  audience: "Olá, quero começar minha transformação",
  servicesHelp: "Olá, não sei por onde começar. Podem me orientar?",
  courage: "Olá, quero dar o primeiro passo",
  faq: "Olá, tenho uma dúvida",
  finalCta: "Olá, quero agendar meu atendimento",
  symptomsNone: "Olá! Gostaria de conversar sobre um atendimento.",
  symptoms: (list) => `Olá! Tenho sentido: ${list.join(", ").toLowerCase()}. Gostaria de conversar sobre um atendimento.`,
  service: (title) => `Olá! Tenho interesse em: ${title}.`,
  event: (title, date) => `Olá! Quero garantir minha vaga em: ${title} (${date}).`,
}

export const NAV_LINKS = [
  { name: "Método", href: "#metodo" },
  { name: "Serviços", href: "#servicos" },
  { name: "Agenda", href: "#agenda" },
  { name: "Sobre", href: "#sobre" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Dúvidas", href: "#duvidas" },
]
