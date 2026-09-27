export const TESTIMONIALS_COPY = {
  eyebrow: "Depoimentos",
  title: { before: "Histórias de ", accent: "transformação" },
  lead: "Relatos de quem sentiu, na pele e na alma, o cuidado, a segurança e a transformação que vivem no Natureza em Cura.",
  note: ["Vidas reais,", "mais presença ♡"],
}

export const TESTIMONIALS = [
  {
    quote: "A Natureza em Cura me mostrou que a verdadeira transformação começa em silêncio, no fundo da respiração. Aprendi a ouvir meu corpo, acolher minhas emoções e seguir com leveza. Foi como voltar para casa.",
    name: "Carla Mendes",
    title: "Participante do Programa Domínio Emocional",
    color: "#8C6CE6",
  },
  {
    quote: "Passei anos tentando meditar sozinho, sem sucesso. Aqui, entendi que meditação não é técnica — é presença. As aulas de yoga e os encontros abriram um espaço de paz que eu nunca tinha experimentado.",
    name: "Thiago Lacerda",
    title: "Aluno de Yoga e Meditação",
    color: "#2E7D32",
  },
  {
    quote: "A cerimônia do cacau me conectou com algo que palavras não explicam. Chorei, ri, cantei… e saí dali com o coração aquecido e a alma em paz.",
    name: "Fernanda Duarte",
    title: "Participante do Despertar das Deusas",
    color: "#6B46C1",
  },
  {
    quote: "Cheguei buscando uma solução para minha ansiedade e encontrei uma nova forma de viver. O curso de primeiros socorros emocionais foi um divisor de águas. Hoje, uso as técnicas no meu dia a dia.",
    name: "Ricardo Silveira",
    title: "Aluno do Curso Primeiros Socorros Emocionais",
    color: "#5E9A3A",
  },
  {
    quote: "Aqui entendi que espiritualidade não precisa ser distante ou mística demais. Pode ser prática, concreta e transformadora. A Natureza em Cura me ensinou a cuidar de mim com amor e intenção.",
    name: "Luciana Ramos",
    title: "Integrante da Comunidade Natureza em Cura",
    color: "#A58BEA",
  },
]

// Segunda faixa usa outra ordem para as linhas não ficarem espelhadas
export const TESTIMONIAL_ROWS = [TESTIMONIALS, [3, 0, 4, 1, 2].map((i) => TESTIMONIALS[i])]
