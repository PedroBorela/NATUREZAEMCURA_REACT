import { encontrar } from "../../constants/copy";
import SectionHeading from "../../components/SectionHeading";
import { RevealGroup, RevealItem } from "../../components/motion/Reveal";
import { FaCheck } from "react-icons/fa";

const Encontrar = () => {
    return (
        <section id="encontrar" className="relative overflow-hidden bg-surface section-pad">
            {/* Decoração botânica */}
            <img
                src="/imgs/floral.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="pointer-events-none absolute -top-10 -left-16 hidden w-[420px] opacity-20 lg:block"
            />

            <div className="section-shell relative">
                <SectionHeading
                    eyebrow="Um espaço completo de cuidado"
                    title={encontrar.title}
                />

                <RevealGroup className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                    {encontrar.itens.map((item) => (
                        <RevealItem key={item}>
                            <div className="group flex h-full items-start gap-4 rounded-2xl bg-surface-lowest p-5 shadow-ambient ring-1 ring-outline-variant/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient-lg">
                                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-container/50 text-primary-dark transition-transform duration-300 group-hover:scale-110">
                                    <FaCheck className="h-3 w-3" />
                                </span>
                                <p className="text-base font-medium leading-relaxed text-ink-soft">{item}</p>
                            </div>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
};

export default Encontrar;
