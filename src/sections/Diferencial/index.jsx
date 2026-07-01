import { diferencial, beneficios } from "../../constants/copy";
import SectionHeading from "../../components/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "../../components/motion/Reveal";
import { FaLeaf } from "react-icons/fa";

const Diferencial = () => {
    return (
        <section id="beneficios" className="relative overflow-hidden bg-surface section-pad">
            <div className="section-shell">
                {/* Por que somos diferentes */}
                <SectionHeading
                    eyebrow="Nosso diferencial"
                    title={diferencial.title}
                    subtitle={diferencial.lead}
                />

                <Reveal delay={0.1} className="mt-10 text-center">
                    <p className="text-lg font-medium text-ink">{diferencial.sub}</p>
                </Reveal>

                <RevealGroup stagger={0.07} className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
                    {diferencial.dimensoes.map((dim, i) => {
                        const cores = [
                            "bg-primary-container/30 text-primary-dark ring-primary-container/50",
                            "bg-secondary-fixed/60 text-secondary-dark ring-secondary-container/40",
                            "bg-tertiary-fixed/60 text-tertiary ring-tertiary-container/40",
                        ];
                        return (
                            <RevealItem key={dim}>
                                <span
                                    className={`inline-block rounded-full px-6 py-2.5 text-base font-semibold ring-1 transition-transform duration-300 hover:scale-105 ${cores[i % 3]}`}
                                >
                                    {dim}
                                </span>
                            </RevealItem>
                        );
                    })}
                </RevealGroup>

                <Reveal delay={0.15} className="mt-10 text-center">
                    <p className="mx-auto max-w-2xl font-display text-xl font-medium leading-relaxed text-ink-soft">
                        {diferencial.fechamento}
                    </p>
                </Reveal>

                {/* Benefícios comprovados */}
                <div className="mt-24 rounded-[2.5rem] bg-surface-container p-8 shadow-ambient sm:p-12 lg:p-16">
                    <SectionHeading
                        eyebrow="Respaldo científico"
                        title={beneficios.title}
                        subtitle={beneficios.intro}
                    />

                    <RevealGroup className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {beneficios.itens.map((item) => (
                            <RevealItem key={item}>
                                <div className="flex h-full items-center gap-3 rounded-2xl bg-surface-lowest px-4 py-3.5 shadow-ambient transition-all duration-300 hover:-translate-y-0.5 hover:shadow-ambient-lg">
                                    <FaLeaf className="h-4 w-4 shrink-0 text-primary" />
                                    <p className="text-sm font-medium text-ink-soft">{item}</p>
                                </div>
                            </RevealItem>
                        ))}
                    </RevealGroup>

                    <Reveal delay={0.2} className="mt-10 text-center">
                        <p className="mx-auto max-w-2xl text-base italic leading-relaxed text-ink-muted">
                            {beneficios.fechamento}
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Diferencial;
