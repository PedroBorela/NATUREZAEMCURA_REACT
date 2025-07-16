import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
    FaLeaf,
    FaWind,
    FaHeart,
    FaRegSmile,
    FaHandsHelping,
    FaUsers,
    FaMoon,
    FaHandHoldingHeart,
    FaFire,
    FaFemale
} from "react-icons/fa";
import "./cards.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { GiCrystalBars } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";


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
                        Venha Despertar a sua Natureza em Cura!
                    </h2>
                    <p className="subtitle text-xl max-w-2xl mx-auto text-green-600">
                        Conheça todos os serviços da {" "}
                        <span className="font-bold text-verdeEsmeralda-300">
                            Natureza em Cura
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
        title: "Yoga Tradicional",
        subtitle: "Corpo, mente e energia em harmonia com as raízes milenares do Yoga",
        description: "Prática completa baseada no Hatha Yoga ancestral, com foco em respiração, posturas, meditação e relaxamento. Ideal para quem busca saúde, equilíbrio emocional e expansão espiritual. Acalma o sistema nervoso, fortalece o corpo e desperta a consciência. A cada aula, um passo na direção do seu melhor eu.",
    },
    {
        icon: <FaWind />,
        title: "Técnicas de Respiração e Meditação",
        subtitle: "Ative o sistema nervoso e recupere o controle do corpo e da mente",
        description: "Pranayamas, respiração consciente e meditação guiada para aliviar ansiedade, foco mental e vitalidade energética. Técnicas eficazes com base científica que equilibram hormônios, estabilizam emoções e despertam a presença. Simples, profundas e transformadoras para o dia a dia.",
    },
    {
        icon: <FaRegSmile />,
        title: "Meditação Guiada – Clareza e paz em poucos minutos",
        subtitle: "Atenção plena, silêncio e reconexão",
        description: "Nossas meditações são práticas acessíveis e transformadoras que unem neurociência e sabedoria ancestral. Elas ajudam a acalmar a mente, aliviar tensões, reduzir a ansiedade e despertar sua intuição natural. Com poucos minutos por dia, você se reconecta com sua essência e cultiva presença, lucidez e paz interior verdadeira.",
    },
    {
        icon: <FaHeart />,
        title: "Aprenda a cuidar de si por inteiro",
        subtitle: "Corpo, mente, emoções, energia e essência em sintonia profunda",
        description: "Vivências para quem deseja autonomia no cuidado integral de si mesmo. Com práticas que fortalecem o corpo, harmonizam a mente e equilibram as emoções. Um caminho para despertar a energia vital e alinhar-se com sua verdade interior, criando saúde sustentável e presença real.",
    },
    {
        icon: <FaHandsHelping />,
        title: "Sabedorias Ancestrais – Yoga, Reiki e Xamanismo",
        subtitle: "Conexão espiritual profunda com tradições vivas e enraizadas na cura verdadeira",
        description: "Atendimentos, aulas, encontros, excursões, cursos e cerimônias que unem a tradição milenar do Yoga, o poder do Reiki e as Cerimônias Sagradas Indígenas/Xamânicas. Um reencontro com a sabedoria da Terra e do Espírito, guiado com respeito, técnica e presença. Ideal para quem busca cura, verdade e transformação.",
    },
    {
        icon: <FaUsers />,
        title: "Comunidade Conexão Natureza",
        subtitle: "Práticas coletivas para despertar, aprender, compartilhar e crescer juntos",
        description: "Encontros presenciais e online com yoga, meditação, cerimônias e estudos que fortalecem laços, despertam consciências e alimentam o espírito comunitário. Um espaço para trocas reais, crescimento espiritual e conexão entre buscadores que honram a vida, a natureza e a cura.",
    },
    {
        icon: <GiCrystalBars/>,
        title: "Descobrindo a Espiritualidade",
        subtitle: "Estudo vivo com mantras, meditação e reiki em grupo – gratuito e acessível",
        description: "Prática e estudo da espiritualidade oriental com base em Vedanta, Yoga e mantras. Inclui reiki coletivo, meditação guiada e partilhas presenciais e online. Para quem busca expandir a consciência, cultivar paz interior e aprofundar sua jornada espiritual com sabedoria.",
    },
    {
        icon: <FaMoon />,
        title: "Relaxamento Terapêutico & Yoga Nidra",
        subtitle: "Alívio profundo, regeneração emocional e reprogramação subconsciente",
        description: "Prática guiada de relaxamento que induz estados terapêuticos e cura profunda. Ideal para ansiedade, estafa, traumas leves e insônia. Yoga Nidra é um relaxamento profundo com efeitos similares a horas de sono. Acalma o sistema nervoso, regula hormônios e ativa a autocura. Ideal para quem vive na correria e precisa de um reset completo.",
    },
    {
        icon: <FaHandHoldingHeart />,
        title: "Reiki – Energia que cura, acalma e fortalece",
        subtitle: "Atendimento terapêutico e formação completa em Reiki Usui Tibetano",
        description: "Reequilibre seus centros de energia/chakras com o poder do Reiki. Atendimentos que aliviam dores, ansiedade e tensões emocionais. Também oferecemos curso completo com certificado, apostila e kit de cristais. Aprenda a aplicar em si mesmo, em outros, animais, plantas e ambientes. Uma jornada de autocura onde você aprende a cuidar e proteger sua própria energia, trazendo expansão espiritual e conexão profunda.",
    },
    {
        icon: <BiDrink/>,
        title: "Cerimônia de Cacau Medicinal",
        subtitle: "Ritual de coração aberto com a medicina do amor, dança e partilha",
        description: "Vivência com a Cacau como medicina espiritual. Um convite para abrir o coração, sentir a vida, dançar, meditar e conectar com sua essência. Cerimônia sensível e profunda que trabalha emoções, afeto, ancestralidade e autoconhecimento. Ideal para quem busca leveza e cura.",
    },
    {
        icon: <FaFire />,
        title: "Cerimônias Espirituais Indígenas/Xamânicas",
        subtitle: "Ayahuasca, Rapé e Sananga com música, rezo ancestral em cerimônias seguras e conduzidas com amor",
        description: "Encontros com medicinas da floresta guiados por tradição viva e segura. Ideal para quem busca conexão espiritual, limpeza energética e visão de alma. Cerimônia com cânticos, instrumentos, força, defumação e acolhimento. Uma experiência de expansão, entrega e reconexão com a natureza sagrada. Realizada por guiança de Sandro Shankara do Rio de Janeiro.",
    },
    {
        icon: <FaFemale />,
        title: "Despertar das Deusas",
        subtitle: "Encontro de resgate e empoderamento do Sagrado Feminino",
        description: "Vivência exclusiva para mulheres que pode ter a Medicina da Cacau, pinturas corporais, oráculos, cantos, danças, meditação e muito mais. Com o propósito de unir e empoderar as mulheres, além de buscar harmonizar a ciclicidade feminina com os ciclos da natureza, como da lua e das estações. Um espaço seguro e profundo para lembrar seu poder, soltar amarras e despertar sua essência feminina com verdade e beleza. Realizada por Thais Campbell.",
    }
];