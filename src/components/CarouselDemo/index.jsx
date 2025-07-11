"use client";

import Carousel from "@/components/ui/carousel";

export function CarouselDemo() {
    const slideData = [
        {
            title: "Aulas de Yoga no Estúdio.",
            button: "Venha participar de nossas aulas particulares no Estúdio da Natureza em Cura, vagas limitadas para 10 pessoas.",
            src: "./imgs/aulanoestudio.jpg",
            actionButton: {
                text: "Agendar aula",
                link: "#contato" // ou URL específica
            }
        },
        {
            title: "Aulas de Yoga nos postinhos de saúde",
            button: "Participe das aulas gratuitas que a Natureza em Cura presta nos postos de Saúde de Manhuaçu...",
            src: "./imgs/aulanopostinho.webp",
            actionButton: {
                text: "Ver horários",
                link: "#horarios"
            }
        },
        {
            title: "Cursos de Reiki 1, 2 e 3",
            button: "Aprenda tudo que precisa para cuidar e equilibrar sua própria energia...",
            src: "./imgs/rodacura.jpg",
            actionButton: {
                text: "Inscreva-se",
                link: "#cursos"
            }
        },
        {
            title: "Cerimônias Espirituais Indígenas",
            button: "Participe de nossas Cerimônias Espirituais Xamânicas realizadas por Mestres...",
            src: "./imgs/cerimoniaespiritual.jpg",
            actionButton: {
                text: "Saiba mais",
                link: "#cerimonias"
            }
        }, 
        {
            title: "Cerimônia de Cacau Medicinal",
            button: "Conheça a Cacau Medicinal e toda essa cultura ancestral que nos reconecta...",
            src: "./imgs/cerimoniacacau.JPG",
            actionButton: {
                text: "Participar",
                link: "#cacau"
            }
        },
    ];

    return (
        <div className="relative overflow-hidden w-full h-full py-10" id="servicos">
            <img 
                className="selector w-[800px] h-auto inset-0 mx-auto my-auto z-[-1] pointer-events-none absolute" 
                src="/imgs/yogafundo.png" 
                alt="Fundo decorativo" 
            />

            <Carousel 
                slides={slideData} 
                sectionTitle="Nossos Serviços"
            />
        </div>
    );
}