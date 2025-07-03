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

  return (
    <div className="relative w-full overflow-clip" id="trajetoria">
      <Timeline
        data={[
          {
            title: "Raízes da Cura",
            content: (
              <motion.div {...fadeInUp}>
                <p className="mb-8 text-xl font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
                  A Natureza em Cura nasceu do encontro entre a Psicologia e o
                  Yoga. Tudo começou com aulas gratuitas em postos de saúde e
                  espaços comunitários, quando percebemos que o corpo, a mente e
                  o espírito não podiam mais ser tratados separadamente. Nascia
                  ali uma nova abordagem de cuidado integral.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.img
                    src="./imgs/tl1.jpg"
                    alt="tl1"
                    className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    src="./imgs/tl6.jpg"
                    alt="tl6"
                    className="h-40 w-full sm:block hidden rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    src="./imgs/tl3.jpeg"
                    alt="tl3"
                    className="h-20 w-full md:block hidden rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    src="./imgs/tl4.jpg"
                    alt="tl4"
                    className="h-20 w-full md:block hidden rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
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
                  transformação. Começamos a atender mais de 100 pessoas por
                  semana, com yoga, meditação, reiki e rodas de cura. A prática
                  virou movimento.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.img
                    src="./imgs/tl5.jpg"
                    alt="tl5"
                    className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    src="./imgs/tl2.jpg"
                    alt="tl2"
                    className="h-40 w-full sm:block hidden rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    src="./imgs/tl7.jpg"
                    alt="tl7"
                    className="h-40 w-full md:block hidden rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    src="./imgs/tl8.jpg"
                    alt="tl8"
                    className="h-40 w-full md:block hidden rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ),
          },
          {
            title: "A Essência da Natureza em Cura",
            content: (
              <motion.div {...fadeInUp}>
                <p className="mb-4 text-xl font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
                  A Natureza em Cura é um ponto de encontro entre ciência,
                  espiritualidade e prática. Mais do que um espaço físico, ela se
                  tornou um movimento que acolhe, ensina e transforma. Cada curso,
                  cerimônia, roda de conversa ou aula é guiada pela intenção de
                  despertar a autonomia emocional, o equilíbrio interior e o senso
                  de pertencimento em comunidade.
                </p>
                <div className="mb-8 space-y-2">
                  {[
                    "Integra saberes ancestrais com psicologia contemporânea",
                    "Forma terapeutas conscientes e multiplicadores do bem",
                    "Cria experiências que tocam o corpo, a alma e o coração",
                    "Alimenta uma comunidade viva, afetiva e colaborativa",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 text-lg text-white md:text-lg dark:text-neutral-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15, duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      ✅ {text}
                    </motion.div>
                  ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.img
                    src="./imgs/tl9.jpg"
                    alt="tl9"
                    className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    src="./imgs/tl10.jpg"
                    alt="tl10"
                    className="h-40 w-full sm:block hidden rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    src="./imgs/tl11.jpg"
                    alt="tl11"
                    className="h-40 w-full md:block hidden rounded-lg object-cover object-[center_20%] shadow-md md:h-44 lg:h-60"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                  <motion.img
                    src="./imgs/tl12.jpg"
                    alt="tl12"
                    className="h-40 w-full md:block hidden rounded-lg object-cover shadow-md md:h-44 lg:h-60"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ),
          },
        ]}
      />
    </div>
  );
}
