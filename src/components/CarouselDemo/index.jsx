"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
    const slideData = [
        {
            title: "Aulas de yoga",
            button: "Práticas semanais que equilibram corpo, mente e energia.",
            src: "./imgs/yogaAula.webp",
        },
        {
            title: "Cerimônias",
            button: "Vivências profundas com medicina da floresta e espiritualidade.",
            src: "./imgs/cerimonia.jpg",
        },
        {
            title: "Excursões na natureza",
            button: "Conexão com o sagrado por meio de trilhas e paisagens naturais.",
            src: "./imgs/excursao.jpg",
        },
        {
            title: "Roda de cura",
            button: "Encontros em grupo com partilhas, meditação e harmonização energética.",
            src: "./imgs/rodacura.jpg",
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-10" id="servicos">
            <img className="selector w-[800px] h-auto inset-0  mx-auto my-auto z-[-1] pointer-events-none absolute " src="/imgs/yogafundo.png"/>

            <Carousel slides={slideData} />
        </div>
    );
}
