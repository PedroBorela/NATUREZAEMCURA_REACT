import { servicos, WHATSAPP_URL } from "../../constants/copy";
import SectionHeading from "../../components/SectionHeading";
import { RevealGroup, RevealItem } from "../../components/motion/Reveal";
import { GiMeditation, GiBrain } from "react-icons/gi";
import { FaHome, FaFirstAid, FaCalendarCheck } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const icones = [GiMeditation, GiBrain, FaHome, FaFirstAid, FaCalendarCheck];

const Servicos = () => {
    return (
        <section id="servicos" className="relative overflow-hidden bg-surface-low section-pad">
            <img
                src="/imgs/florBack.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="pointer-events-none absolute -bottom-10 -right-16 hidden w-[420px] opacity-20 lg:block"
            />

            <div className="section-shell relative">
                <SectionHeading
                    eyebrow="Serviços"
                    title={servicos.title}
                    subtitle="Caminhos diferentes, o mesmo cuidado: você por inteiro."
                />

                <RevealGroup stagger={0.1} className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {servicos.itens.map((servico, i) => {
                        const Icon = icones[i % icones.length];
                        return (
                            <RevealItem key={servico.nome} className="h-full">
                                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-surface-lowest p-7 shadow-ambient ring-1 ring-outline-variant/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-ambient-lg">
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-container via-secondary-container to-tertiary-container opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                    <div className="flex items-center gap-3">
                                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-container/35 text-xl text-primary-dark transition-transform duration-300 group-hover:scale-110">
                                            <Icon />
                                        </span>
                                        {servico.tag && (
                                            <span className="rounded-full bg-secondary-fixed/70 px-3 py-1 text-xs font-semibold text-secondary-dark">
                                                {servico.tag}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                                        {servico.nome}
                                    </h3>
                                    <p className="mt-3 flex-1 text-base leading-relaxed text-ink-soft">
                                        {servico.descricao}
                                    </p>
                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
                                    >
                                        Saber mais
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </article>
                            </RevealItem>
                        );
                    })}

                    {/* Card CTA fechando o grid */}
                    <RevealItem className="h-full">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex h-full flex-col justify-between rounded-3xl bg-primary p-7 text-white shadow-ambient-lg transition-all duration-300 hover:-translate-y-1.5 hover:bg-primary-dark"
                        >
                            <div>
                                <h3 className="font-display text-2xl font-semibold leading-snug">
                                    Não sabe por onde começar?
                                </h3>
                                <p className="mt-3 text-base leading-relaxed text-white/85">
                                    Fale com a gente pelo WhatsApp e descubra o caminho ideal para o seu momento.
                                </p>
                            </div>
                            <span className="mt-6 inline-flex items-center gap-2 text-base font-semibold">
                                Conversar agora
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
                            </span>
                        </a>
                    </RevealItem>
                </RevealGroup>
            </div>
        </section>
    );
};

export default Servicos;
