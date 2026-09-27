import { HeartHandshake, MapPin, Users } from "lucide-react"

export const HERO = {
  eyebrow: ["Yoga", "Meditação", "Terapias integrativas"],
  // A primeira linha recebe o sublinhado desenhado em SVG
  titleLines: ["Terapias Integrativas", "para reequilibrar", "corpo, mente e alma."],
  lead: "Equilibre sua mente, alivie a ansiedade, fortaleça seu emocional e reconecte-se com uma vida mais leve, saudável e com propósito.",
  body: "Enquanto o mundo acelera, seu corpo adoece e sua mente sobrecarrega. No Natureza em Cura, você encontra um espaço humanizado para cuidar da sua saúde emocional, física e interior através de terapias integrativas, yoga e meditação, unindo saberes ancestrais e ciência moderna.",
  ctaPrimary: "Agendar meu atendimento",
  ctaSecondary: "Conhecer o método",
  badges: [
    { icon: HeartHandshake, label: "Atendimento humanizado" },
    { icon: MapPin, label: "Em Manhuaçu – MG" },
    { icon: Users, label: "Espaço acolhedor" },
  ],
  signature: "Natureza em Cura, Centro de Cuidado e Cultura",
  photo: {
    src: "/assets/img/yogaAula.webp",
    srcSet: "/assets/img/yogaAula-800.webp 800w, /assets/img/yogaAula.webp 1200w",
    alt: "Allan Borela com alunos após aula de yoga ao ar livre",
  },
  statCard: { title: "+2.500 pessoas atendidas", text: "Ciência moderna e saberes ancestrais" },
  seal: "DESDE 2018 • MANHUAÇU • CUIDADO INTEGRAL •",
  note: ["Cuidar também", "é um ato de amor ♡"],
}

export const MARQUEE_WORDS = [
  "Yoga",
  "Meditação",
  "Psicologia ACT",
  "Reiki",
  "Terapias Integrativas",
  "Cerimônias",
  "Saberes Ancestrais",
  "Atendimento Humanizado",
]
