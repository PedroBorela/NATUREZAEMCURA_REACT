"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Aurora from "../../blocks/Backgrounds/Aurora/Aurora"


export function InfiniteMovingCardsDemo() {
    return (
        <div id="depoimentos"
            className="relative h-[40rem] rounded-md flex flex-col antialiased bg-[url('/imgs/fundodesfoc.jpg')] dark:bg-grid-white/[0.05] items-center justify-center overflow-hidden px-4"
        >
            {/* Aurora como fundo */}
            <div className="absolute inset-0 z-10">
                <Aurora amplitude={1} blend={0.8} />
            </div>

            {/* Título */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center drop-shadow-md z-10">
                Frases que Inspiram
            </h2>
             <p className="text-center text-white text-sm md:text-lg max-w-2xl mb-8 z-10">
                Conheça relatos de quem sentiu, na pele e na alma, o cuidado, a segurança e a transformação que vivem na <strong className="text-verdeEsmeralda-200">Natureza em Cura</strong>.
            </p>

            {/* Cards */}
            <div className="w-full max-w-6xl z-10">
                <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
            </div>
        </div>
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
            "A cerimônia do cacau me conectou com algo que palavras não explicam. Chorei, ri, cantei… e saí dali com o coração aquecido e a alma em paz. A Natureza em Cura é um portal de cura real.",
        name: "Fernanda Duarte",
        title: "Participante do Despertar das Deusas",
    },
    {
        quote:
            "Cheguei buscando uma solução para minha ansiedade e encontrei uma nova forma de viver. O curso de primeiros socorros emocionais foi um divisor de águas. Hoje, uso as técnicas no meu dia a dia.",
        name: "Ricardo Silveira",
        title: "Aluno do Curso Primeiros Socorros Emocionais",
    },
    {
        quote:
            "Aqui entendi que espiritualidade não precisa ser distante ou mística demais. Pode ser prática, concreta e transformadora. A Natureza em Cura me ensinou a cuidar de mim com amor e intenção.",
        name: "Luciana Ramos",
        title: "Integrante da Comunidade Natureza em Cura",
    },
];

