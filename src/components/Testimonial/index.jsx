import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import SectionHeading from "../SectionHeading";

export function InfiniteMovingCardsDemo() {
    return (
        <section
            id="depoimentos"
            className="relative flex flex-col items-center justify-center overflow-hidden bg-surface-inverse py-20 sm:py-24"
        >
            {/* Fundo decorativo leve (substitui o WebGL Aurora) */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-primary-container/15 blur-3xl animate-float-slow" />
                <div className="absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-secondary-container/15 blur-3xl animate-float-slower" />
            </div>

            <div className="section-shell relative">
                <SectionHeading
                    eyebrow="Depoimentos"
                    title="Histórias de transformação"
                    subtitle="Relatos de quem sentiu, na pele e na alma, o cuidado, a segurança e a transformação que vivem no Natureza em Cura."
                    dark
                />
            </div>

            <div className="relative z-10 mt-10 w-full max-w-6xl px-4">
                <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
            </div>
        </section>
    );
}

const testimonials = [
    {
        quote:
            "A Natureza em Cura me mostrou que a verdadeira transformação começa em silêncio, no fundo da respiração. Aprendi a ouvir meu corpo, acolher minhas emoções e seguir com leveza. Foi como voltar para casa.",
        name: "Carla Mendes",
        title: "Participante do Programa Domínio Emocional",
    },
    {
        quote:
            "Passei anos tentando meditar sozinho, sem sucesso. Aqui, entendi que meditação não é técnica — é presença. As aulas de yoga e os encontros abriram um espaço de paz que eu nunca tinha experimentado.",
        name: "Thiago Lacerda",
        title: "Aluno de Yoga e Meditação",
    },
    {
        quote:
            "Cheguei buscando uma solução para minha ansiedade e encontrei uma nova forma de viver. O curso de primeiros socorros emocionais foi um divisor de águas. Hoje, uso as técnicas no meu dia a dia.",
        name: "Ricardo Silveira",
        title: "Aluno do Curso Primeiros Socorros Emocionais",
    },
    {
        quote:
            "O acompanhamento psicológico me ajudou a entender minhas emoções sem me julgar. Aprendi ferramentas práticas que uso todos os dias. Me sinto mais leve, presente e confiante.",
        name: "Fernanda Duarte",
        title: "Paciente do Atendimento Psicológico",
    },
    {
        quote:
            "Aqui entendi que espiritualidade não precisa ser distante ou mística demais. Pode ser prática, concreta e transformadora. A Natureza em Cura me ensinou a cuidar de mim com amor e intenção.",
        name: "Luciana Ramos",
        title: "Integrante da Comunidade Natureza em Cura",
    },
];
