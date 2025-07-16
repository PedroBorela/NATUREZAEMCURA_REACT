"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
    const slideData = [
        {
            title: "Aulas de Yoga no Estúdio.",
            button: "Venha participar de nossas aulas particulares no Estúdio da Natureza em Cura, vagas limitadas para 10 pessoas. Aula Terça-Feira 18:00 e 19:30. Apenas 7 vagas disponíveis.",
            src: "./imgs/aulanoestudio.jpg",
        },
        {
            title: "Aulas de Yoga nos postinhos de saúde",
            button: "Participe das aulas gratuitas que a Natureza em Cura presta nos postos de Saúde de Manhuaçu: Vila formosa segunda feira 08hrs  Ponte da aldeia segunda feira 13hrs / Petrina segunda feira 15h / Policlínica segunda feira 17h Buracão quarta feira 08h  Vila nova quarta feira 15h  Palmeiras sexta feira 08h. ",
            src: "./imgs/aulanopostinho.webp",
        },
        {
            title: "Sessões e Cursos de Reiki 1, 2 e 3",
            button: "Marque sua sessão de Reiki com Allan Borela ou aprenda tudo que precisa para cuidar e equilibrar sua própria energia, canalizar energia de cura para si e para os outros, Desperte sua Consciência Espiritual e se torne um Terapeuta Reiki.",

            src: "./imgs/rodacura.jpg",
        },
        {
            title: "Cerimônias Espirituais Indígenas",
            button: "Participe de nossas Cerimônias Espirituais Xamânicas realizadas por Mestres de Cerimônia especialistas do Rio de Janeiro, que é o Xamã Sandro Shankara e sua companheira Rosane Ventura, encontros realizados de 01 a 02 vezes por ano, com as Medicinas da Floresta, Ayahuasca, Rapé, Sananga. Inscrição personalizada e limitada. ",
            src: "./imgs/cerimoniaespiritual.jpg",
        }, {
            title: "Cerimônia de Cacau Medicinal",
            button: "Conheça a Cacau Medicinal e toda essa cultura ancestral que nos reconecta com nosso coração sagrado, ajudando a equilibrar o Sagrado Feminino com o Masculino.",
            src: "./imgs/cerimoniacacau.JPG",
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-10" id="servicos">
            <img className="selector w-[800px] h-auto inset-0  mx-auto my-auto z-[-1] pointer-events-none absolute " src="/imgs/yogafundo.png" />

            <Carousel slides={slideData} />
        </div>
    );
}
