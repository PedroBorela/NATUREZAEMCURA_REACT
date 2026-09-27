export const AGENDA_COPY = {
  eyebrow: "Agenda",
  title: { before: "Nossos próximos ", accent: "eventos" },
  lead: "Aulas, encontros terapêuticos e vivências — acompanhe as datas e garanta sua presença.",
  upcoming: "Próximos encontros",
  showUpcoming: "Ver próximos",
  empty: "Nenhum evento marcado para esta data. Que tal conferir os próximos encontros?",
  cta: "Garantir vaga",
  weekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
}

// Cor principal e fundo suave de cada tipo de evento
export const EVENT_TYPES = {
  Yoga: { color: "#8C6CE6", soft: "#F1ECFD" },
  Curso: { color: "#4191CF", soft: "#E6F1FA" },
  Encontro: { color: "#2E7D32", soft: "#E4F2D5" },
  Excursão: { color: "#B7791F", soft: "#FBF1DF" },
  Cerimônia: { color: "#2A1B5E", soft: "#E9E5F5" },
}

// PLACEHOLDER: datas de exemplo da referência — substituir pela agenda real
export const EVENTS = [
  { date: "2026-09-26", title: "Aula de Yoga ao Nascer do Sol", time: "06h30", type: "Yoga" },
  { date: "2026-09-27", title: "Cacau e Meditação Guiada", time: "17h", type: "Cerimônia" },
  { date: "2026-10-03", title: "Yoga Restaurativa", time: "08h", type: "Yoga" },
  { date: "2026-10-10", title: "Curso de Reiki Nível I", time: "09h", type: "Curso" },
  { date: "2026-10-11", title: "Encontro Mensal de Cura", time: "15h", type: "Encontro" },
  { date: "2026-10-17", title: "Excursão à Cachoeira Sagrada", time: "07h", type: "Excursão" },
  { date: "2026-10-18", title: "Cerimônia Espiritual Indígena", time: "18h", type: "Cerimônia" },
  { date: "2026-10-24", title: "Cerimônia de Cacau Medicinal", time: "17h", type: "Cerimônia" },
  { date: "2026-10-25", title: "Círculo Sagrado para Mulheres", time: "15h", type: "Encontro" },
  { date: "2026-11-07", title: "Yoga com Lua Nova", time: "18h", type: "Yoga" },
  { date: "2026-11-14", title: "Curso de Reiki Nível II", time: "09h", type: "Curso" },
  { date: "2026-11-15", title: "Encontro Mensal de Partilha", time: "15h", type: "Encontro" },
  { date: "2026-11-21", title: "Excursão à Montanha Sagrada", time: "07h", type: "Excursão" },
  { date: "2026-11-22", title: "Cerimônia do Fogo Sagrado", time: "18h", type: "Cerimônia" },
  { date: "2026-12-05", title: "Yoga ao Nascer do Sol", time: "06h30", type: "Yoga" },
  { date: "2026-12-12", title: "Encontro Terapêutico Integrativo", time: "09h", type: "Encontro" },
]
