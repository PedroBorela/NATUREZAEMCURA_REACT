import { ctaFinal, WHATSAPP_URL } from "../../constants/copy";
import Reveal, { RevealGroup, RevealItem } from "../../components/motion/Reveal";
import { FaWhatsapp } from "react-icons/fa";

const CtaFinal = () => {
    return (
        <section id="contato" className="relative overflow-hidden bg-surface section-pad">
            <div className="section-shell">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-dark via-primary to-[#4d7a14] px-6 py-16 text-center shadow-ambient-lg sm:px-12 sm:py-20">
                    {/* Decoração */}
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary-container/20 blur-3xl animate-float-slow" />
                        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-secondary-container/15 blur-3xl animate-float-slower" />
                        <img
                            src="/imgs/mandala.webp"
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="absolute -bottom-32 left-1/2 w-[540px] -translate-x-1/2 opacity-10"
                        />
                    </div>

                    <div className="relative mx-auto max-w-3xl">
                        <Reveal>
                            <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
                                {ctaFinal.title}
                            </h2>
                        </Reveal>

                        <RevealGroup stagger={0.15} delay={0.15} className="mt-8 flex flex-col items-center gap-1.5">
                            {ctaFinal.frases.map((frase) => (
                                <RevealItem key={frase}>
                                    <p className="font-display text-lg font-medium text-primary-fixed sm:text-xl">
                                        {frase}
                                    </p>
                                </RevealItem>
                            ))}
                        </RevealGroup>

                        <Reveal delay={0.3}>
                            <p className="mt-8 text-lg leading-relaxed text-white/85">{ctaFinal.chamada}</p>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold uppercase tracking-wide text-primary-dark shadow-ambient-lg transition-all duration-300 hover:-translate-y-1 hover:bg-primary-fixed sm:px-10"
                            >
                                <FaWhatsapp className="h-6 w-6 text-[#25D366] transition-transform group-hover:scale-110" />
                                {ctaFinal.botao}
                            </a>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <p className="mt-9 text-sm font-medium uppercase tracking-[0.18em] text-white/70">
                                {ctaFinal.selo}
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaFinal;
