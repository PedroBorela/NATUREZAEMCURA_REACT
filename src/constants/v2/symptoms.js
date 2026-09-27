import { Activity, BatteryLow, Brain, CircleDashed, CloudRain, HeartCrack, Hourglass, Moon, PersonStanding, Waves } from "lucide-react"

export const SYMPTOMS_COPY = {
  eyebrow: "Como você tem se sentido?",
  title: { before: "Você não precisa continuar ", accent: "vivendo no limite" },
  lead: "Se você sente — toque no que faz sentido para você:",
  note: ["Você é mais forte", "do que imagina ♡"],
  closingTitle: "Existe um caminho possível para recuperar seu equilíbrio.",
  closingText: "Aqui, corpo, mente e emoções são tratados juntos.",
  ctaNone: "Quero conversar com alguém",
  ctaOne: "Conversar sobre isso",
  ctaMany: (n) => `Conversar sobre esses ${n} pontos`,
}

export const SYMPTOMS = [
  { icon: Activity, label: "Ansiedade constante" },
  { icon: HeartCrack, label: "Crises emocionais" },
  { icon: Brain, label: "Excesso de pensamentos" },
  { icon: PersonStanding, label: "Dores no corpo causadas pelo estresse" },
  { icon: CloudRain, label: "Tristeza profunda ou desânimo" },
  { icon: BatteryLow, label: "Falta de energia" },
  { icon: Moon, label: "Dificuldade para dormir" },
  { icon: CircleDashed, label: "Sensação de vazio" },
  { icon: Waves, label: "Dificuldade para lidar com emoções" },
  { icon: Hourglass, label: "Cansaço mental extremo" },
]
