import { paraQuem, WHATSAPP_URL } from "../../constants/copy";
import SectionHeading from "../../components/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "../../components/motion/Reveal";
import { FaCheckCircle } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const ParaQuem = () => {
    return (
        <section id="para-quem" className="relative overflow-hidden bg-surface section-pad">
            <div className="section-shell grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
                {/* Imagem */}
                <Reveal className="relative order-2 lg:order-1">
                    <div
                        aria-hidden="true"
                        className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tr from-primary-container/30 to-secondary-fixed/40 blur-xl"
                    />
                    <img
                        src="/imgs/yogaARlivre.webp"
                        alt="Prática de yoga ao ar livre do Natureza em Cura"
                        loading="lazy"
                        decoding="async"
                        className="relative aspect-[4/5] w-full rounded-[6rem_2.5rem_2.5rem_2.5rem] object-cover shadow-ambient-lg"
                    />
                </Reveal>

                {/* Lista */}
                <div className="order-1 lg:order-2">
                    <SectionHeading
                        eyebrow="Este espaço é para você"
                        title={paraQuem.title}
                        subtitle={paraQuem.lead}
                        align="left"
                    />

                    <RevealGroup stagger={0.06} className="mt-8 flex flex-col gap-3">
                        {paraQuem.itens.map((item) => (
                            <RevealItem key={item}>
                                <div className="flex items-start gap-3.5 rounded-xl px-3 py-2 transition-colors duration-300 hover:bg-primary-container/10">
                                    <FaCheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                                    <p className="text-base leading-relaxed text-ink-soft">{item}</p>
                                </div>
                            </RevealItem>
                        ))}
                    </RevealGroup>

                    <Reveal delay={0.2} className="mt-8">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-ambient transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-ambient-lg"
                        >
                            Quero começar minha transformação
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default ParaQuem;
