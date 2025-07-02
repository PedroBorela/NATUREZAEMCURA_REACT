import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion } from "framer-motion";

export function TimelineDemo() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };

  const images = (imgs) =>
    imgs.map((img, i) => (
      <motion.img
        key={img}
        src={`./imgs/${img}`}
        alt="timeline"
        width={500}
        height={500}
        className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: i * 0.2, duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
      />
    ));

  const data = [
    {
      title: "Raízes da Cura",
      content: (
        <motion.div {...fadeInUp}>
          <p className="mb-8 text-xl font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
            A Natureza em Cura nasceu do encontro entre a Psicologia e o Yoga.
            Tudo começou com aulas gratuitas em postos de saúde e espaços
            comunitários, quando percebemos que o corpo, a mente e o espírito
            não podiam mais ser tratados separadamente. Nascia ali uma nova
            abordagem de cuidado integral.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images(["tl1.jpg", "tl6.jpg", "tl3.jpeg", "tl4.jpg"])}
          </div>
        </motion.div>
      ),
    },
    {
      title: "Consolidação e Propósito",
      content: (
        <motion.div {...fadeInUp}>
          <p className="mb-8 text-xl font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
            Nosso espaço próprio foi criado em meio a desafios — um pequeno
            estúdio nos fundos da casa da avó se transformou em um templo de
            transformação. Começamos a atender mais de 100 pessoas por semana,
            com yoga, meditação, reiki e rodas de cura. A prática virou
            movimento.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images(["tl5.jpg", "tl2.jpg", "tl7.jpg", "tl8.jpg"])}
          </div>
        </motion.div>
      ),
    },
    {
      title: "A Essência da Natureza em Cura",
      content: (
        <motion.div {...fadeInUp}>
          <p className="mb-4 text-xl font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
            A Natureza em Cura é um ponto de encontro entre ciência, espiritualidade
            e prática. Mais do que um espaço físico, ela se tornou um movimento
            que acolhe, ensina e transforma. Cada curso, cerimônia, roda de
            conversa ou aula é guiada pela intenção de despertar a autonomia
            emocional, o equilíbrio interior e o senso de pertencimento em
            comunidade.
          </p>
          <div className="mb-8 space-y-2">
            {[
              "Integra saberes ancestrais com psicologia contemporânea",
              "Forma terapeutas conscientes e multiplicadores do bem",
              "Cria experiências que tocam o corpo, a alma e o coração",
              "Alimenta uma comunidade viva, afetiva e colaborativa",
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-lg text-white md:text-lg dark:text-neutral-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                ✅ {item}
              </motion.div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images(["tl9.jpg", "tl10.jpg", "tl11.jpg", "tl12.jpg"])}
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip" id="trajetoria">
      <Timeline data={data} />
    </div>
  );
}
