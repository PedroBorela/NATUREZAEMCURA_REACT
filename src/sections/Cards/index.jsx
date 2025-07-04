import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
    FaLeaf,
    FaWind,
    FaHeart,
    FaRegSmile,
    FaHandsHelping,
    FaUsers
} from "react-icons/fa";
import "./cards.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";


gsap.registerPlugin(ScrollTrigger);

export function CardHoverEffectDemo() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".title", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".title",
                    start: "top 80%",
                },
            });

            gsap.from(".subtitle", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".subtitle",
                    start: "top 85%",
                },
            });

            gsap.from(".selector", {
                opacity: 0,
                scale: 0.95,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".selector",
                    start: "top 90%",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            id="beneficios"
            ref={containerRef}
            className="w-full min-h-screen flex items-center justify-center bg-verdeEsmeralda-100 py-12 relative"
        >
            <img
                className="selector lg:w-[850px] h-auto absolute bottom-0 right-0 hidden sm:block md:w-[550px] opacity-70"
                src="/imgs/florBack.png"
            />
            <img
                className="selector lg:w-[850px] h-auto absolute top-0 left-0 hidden sm:block md:w-[550px] opacity-70"
                src="/imgs/floral.png"
            />

            <div className="max-w-5xl w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-5">
                    <h2 className="title text-4xl font-bold mb-4 text-[#5F6F52]">
                        Nossos Serviços
                    </h2>
                    <p className="subtitle text-xl max-w-2xl mx-auto text-green-600">
                        Por que escolher os cursos de yoga da{" "}
                        <span className="font-bold text-verdeEsmeralda-300">
                            Natureza em Cura?
                        </span>
                    </p>
                </div>
                <HoverEffect items={projects} />
            </div>
        </div>
    );
}
export const projects = [
    {
        icon: <FaLeaf />,
        title: "Yoga Integral",
        description:
            "Uma prática milenar que une posturas, respiração, meditação e valores éticos para transformar corpo, mente, emoções e espírito.",
        link: "https://naturezaemcura.com/yoga-integral",
    },
    {
        icon: <FaWind />,
        title: "Respiração Consciente",
        description:
            "A base de toda prática de autocontrole. Respirar de forma profunda e consciente acalma o sistema nervoso e traz foco ao momento presente.",
        link: "https://naturezaemcura.com/respiracao-consciente",
    },
    {
        icon: <FaHeart />,
        title: "Autocuidado com Propósito",
        description:
            "Mais do que relaxar, cuidar de si é um ato de reconexão. No Natureza em Cura, acreditamos que o cuidado gera transformação real.",
        link: "https://naturezaemcura.com/autocuidado",
    },
    {
        icon: <FaRegSmile />,
        title: "Meditação Guiada",
        description:
            "Uma jornada para dentro de si. Nossas meditações combinam ciência moderna e espiritualidade para acessar paz, clareza e intuição.",
        link: "https://naturezaemcura.com/meditacao-guiada",
    },
    {
        icon: <FaHandsHelping />,
        title: "Sabedoria Ancestral",
        description:
            "Unimos conhecimentos antigos – como Ayurveda, Reiki e Yoga – com fundamentos da psicologia contemporânea, criando pontes entre mundos.",
        link: "https://naturezaemcura.com/sabedoria-ancestral",
    },
    {
        icon: <FaUsers />,
        title: "Comunidade e Cura",
        description:
            "Acreditamos que ninguém se cura sozinho. Criamos espaços de pertencimento onde florescem conexões reais, acolhimento e transformação coletiva.",
        link: "https://naturezaemcura.com/comunidade",
    }

];
