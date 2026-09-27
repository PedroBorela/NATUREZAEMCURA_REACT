import { Feather, Flower2, Gauge, Heart, Leaf, Moon, PersonStanding, ShieldCheck, Smile, Sparkles, Sun, Target, Wind } from "lucide-react"

export const DIFFERENTIAL_COPY = {
  eyebrow: "Nosso diferencial",
  title: { before: "Por que nosso ", accent: "trabalho", after: " é diferente?" },
  lead: "Porque aqui você não é tratado apenas como um diagnóstico.",
  note: ["Diferentes caminhos,", "mais possibilidades", "de bem-estar ♡"],
  orbitCaption: "Unimos práticas milenares com abordagens modernas validadas pela ciência da saúde mental.",
  benefits: {
    eyebrow: "Respaldo científico",
    title: { before: "Benefícios ", accent: "comprovados", after: " das práticas" },
    lead: "Diversos estudos já demonstram que práticas como yoga, meditação e terapias integrativas podem auxiliar em:",
    highlight: "Quando integradas ao acompanhamento psicológico,",
    highlightRest: " os resultados podem ser ainda mais profundos e sustentáveis.",
  },
}

// Dimensões que orbitam o logo (tone: verde | lilas | azul)
export const DIMENSIONS = [
  { label: "Corpo", tone: "verde" },
  { label: "Emoções", tone: "lilas" },
  { label: "Mente", tone: "azul" },
  { label: "Comportamento", tone: "verde" },
  { label: "Espiritualidade", tone: "lilas" },
  { label: "Rotina", tone: "azul" },
  { label: "Qualidade de vida", tone: "verde" },
]

export const DIFFERENTIALS = [
  { icon: PersonStanding, title: "Visão integral do ser humano", text: "Consideramos corpo, emoções, rotina, contexto de vida e singularidade de cada pessoa." },
  { icon: Heart, title: "Acolhimento humano e respeitoso", text: "Cada pessoa é recebida com presença, escuta e cuidado." },
  { icon: Flower2, title: "Práticas de diferentes tradições", text: "Vivências que dialogam com saberes integrativos e ancestrais, com responsabilidade." },
  { icon: Leaf, title: "Presença, autocuidado e bem-estar", text: "Experiências voltadas para equilíbrio, reconexão e qualidade de vida." },
  { icon: ShieldCheck, title: "Ética e responsabilidade", text: "Cada prática segue sua proposta, seus limites e suas condutas éticas próprias." },
  { icon: Sparkles, title: "Ciência, tradição e humanidade", text: "Cuidado integrativo com clareza, respeito e consciência." },
]

export const BENEFITS = [
  { icon: Feather, label: "Redução da ansiedade" },
  { icon: Smile, label: "Melhora do humor" },
  { icon: Gauge, label: "Controle do estresse" },
  { icon: Moon, label: "Melhora do sono" },
  { icon: Target, label: "Fortalecimento da atenção e foco" },
  { icon: PersonStanding, label: "Redução de dores corporais" },
  { icon: Wind, label: "Melhora da respiração" },
  { icon: Heart, label: "Desenvolvimento emocional" },
  { icon: Sun, label: "Aumento da qualidade de vida" },
]
