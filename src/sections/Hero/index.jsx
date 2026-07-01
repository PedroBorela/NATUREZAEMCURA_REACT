import { sobre } from "../../constants/copy";
import SectionHeading from "../../components/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "../../components/motion/Reveal";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import { FaLeaf, FaGraduationCap } from "react-icons/fa";

// Seção "Sobre" — apresenta o Natureza em Cura e Allan Borela
const Sobre = () => {
  return (
    <section id="sobre" className="relative overflow-hidden bg-surface section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Quem somos"
          title={sobre.title}
          subtitle="Mais do que um serviço, um caminho de transformação interior."
        />

        <RevealGroup stagger={0.12} className="mx-auto mt-10 flex max-w-3xl flex-col gap-5 text-center">
          {sobre.paragrafos.map((p) => (
            <RevealItem key={p.slice(0, 24)}>
              <p className="text-base leading-relaxed text-ink-soft sm:text-lg">{p}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Allan Borela */}
        <div className="mt-20 flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <Reveal className="w-full lg:w-5/12">
            <SpotlightCard className="z-10">
              <img
                src="./imgs/allanb.jpg"
                alt="Allan Borela"
                className="w-full rounded-2xl object-cover object-top lg:max-h-[520px]"
                loading="lazy"
                decoding="async"
              />
            </SpotlightCard>
          </Reveal>

          <div className="w-full lg:w-7/12">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary-fixed/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-secondary-dark ring-1 ring-secondary-container/40">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Fundador
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h3 className="mt-4 font-display text-3xl font-semibold text-ink lg:text-4xl">
                Allan Borela
              </h3>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 text-base leading-relaxed text-ink-soft lg:text-lg">
                Psicólogo clínico com pós-graduação em Terapias de Terceira e Quarta Geração e uma
                trajetória marcada pela união entre ciência moderna e saberes ancestrais. Atua há mais
                de uma década com{" "}
                <span className="font-semibold text-primary">yoga, meditação e práticas integrativas</span>,
                promovendo saúde em{" "}
                <span className="font-semibold text-primary">
                  níveis físico, emocional, mental, energético e espiritual
                </span>.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <blockquote className="mt-6 rounded-2xl border-l-4 border-primary-container bg-surface-low p-6 text-base italic leading-relaxed text-ink-soft shadow-ambient lg:text-lg">
                "Minha jornada começou no SUS, levando yoga e meditação para centenas de pessoas em
                postos de saúde e CAPS. Com o tempo, compreendi que a verdadeira cura exige olhar o
                ser humano como um todo. Hoje, dedico minha vida à formação de terapeutas conscientes
                e ao desenvolvimento de programas de equilíbrio emocional profundamente enraizados na
                natureza e na alma."
              </blockquote>
            </Reveal>

            <RevealGroup stagger={0.1} delay={0.2} className="mt-7 flex flex-wrap gap-3">
              <RevealItem>
                <span className="inline-flex items-center gap-2.5 rounded-full bg-primary-container/30 px-5 py-2.5 text-sm font-semibold text-primary-dark">
                  <FaGraduationCap className="h-4 w-4" />
                  Psicólogo Clínico — ACT
                </span>
              </RevealItem>
              <RevealItem>
                <span className="inline-flex items-center gap-2.5 rounded-full bg-secondary-fixed/60 px-5 py-2.5 text-sm font-semibold text-secondary-dark">
                  <FaLeaf className="h-4 w-4" />
                  Ciência e Sabedoria Ancestral em União
                </span>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </div>

      <img
        className="pointer-events-none absolute -bottom-24 -right-24 w-[560px] opacity-[0.07]"
        src="/imgs/mandala.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};

export default Sobre;
