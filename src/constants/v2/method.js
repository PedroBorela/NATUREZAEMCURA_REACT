import { Brain, Flower2, House, Leaf } from "lucide-react"

export const METHOD_COPY = {
  eyebrow: "Como funciona",
  title: { before: "Como funciona nosso ", accent: "método" },
  subtitle: "Uma abordagem integrativa entre corpo, mente e emoções",
  text: "No Natureza em Cura, utilizamos uma metodologia humanizada que integra práticas terapêuticas modernas e saberes ancestrais.",
}

// `theme` define as cores de cada card empilhado (ver Metodo/index.jsx)
export const METHOD_CARDS = [
  {
    n: "01",
    theme: "white",
    icon: Flower2,
    title: "Yoga e Meditação",
    text: "Aulas semanais de 1 hora focadas em:",
    items: ["Respiração consciente", "Redução do estresse", "Consciência corporal", "Fortalecimento emocional", "Relaxamento profundo", "Presença mental"],
    footnote: "As práticas são adaptadas para cada faixa etária e necessidade individual.",
    img: { src: "/imgs/tl6.webp", alt: "Aula de yoga em grupo" },
  },
  {
    n: "02",
    theme: "lavanda",
    icon: Brain,
    title: "Psicologia Especializada — ACT",
    text: "Terapia Cognitivo-Comportamental de Terceira Onda para crianças, adolescentes, adultos e idosos. Com foco em:",
    items: [
      "Flexibilidade psicológica",
      "Aceitação emocional",
      "Desenvolvimento de autonomia emocional",
      "Enfrentamento saudável das dificuldades da vida",
      "Fortalecimento mental",
    ],
    footnote: "Atendimento humanizado adaptado a cada fase da vida.",
    img: { src: "/imgs/tl7.webp", alt: "Prática de meditação", position: "center 30%" },
  },
  {
    n: "03",
    theme: "verde",
    icon: House,
    title: "Atendimento Domiciliar",
    text: "Para pessoas que precisam de atenção individualizada, conforto ou possuem limitações emocionais, físicas ou de deslocamento.",
    items: [],
    footnote: "Um cuidado próximo, acolhedor e adaptado à realidade de cada pessoa.",
    img: { src: "/imgs/aulanopostinho-900.webp", alt: "Atendimentos em comunidade" },
  },
  {
    n: "04",
    theme: "ink",
    icon: Leaf,
    title: "Encontros Terapêuticos Integrativos",
    text: "Realizados 4 vezes ao ano, os encontros terapêuticos unem:",
    items: ["Práticas meditativas", "Integração emocional", "Terapias complementares", "Saberes ancestrais", "Desenvolvimento interior"],
    footnote: "Sempre fundamentados em responsabilidade, acolhimento e estudos sobre saúde integrativa e bem-estar emocional.",
    img: { src: "/assets/img/cerimoniaespiritual_1.webp", alt: "Encontro terapêutico ao ar livre" },
  },
]
