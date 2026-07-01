import { objetivos } from "../../constants/copy";
import SectionHeading from "../../components/SectionHeading";
import { RevealGroup, RevealItem } from "../../components/motion/Reveal";
import { FaSeedling } from "react-icons/fa";

const Objetivos = () => {
    return (
        <section id="objetivos" className="relative overflow-hidden bg-surface-inverse section-pad">
            {/* Mandala decorativa */}
            <img
                src="/imgs/mandala.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="pointer-events-none absolute -right-24 -top-24 w-[560px] opacity-10"
            />

            <div className="section-shell relative">
                <SectionHeading eyebrow="Nosso compromisso" title={objetivos.title} dark />

                <RevealGroup className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 sm:gap-4">
                    {objetivos.itens.map((item) => (
                        <RevealItem key={item}>
                            <div className="group flex items-center gap-4 rounded-2xl bg-white/[0.06] px-5 py-4 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.1] hover:ring-primary-container/40">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-container/25 text-primary-fixed transition-transform duration-300 group-hover:scale-110">
                                    <FaSeedling className="h-4 w-4" />
                                </span>
                                <p className="text-base font-medium text-white/90">{item}</p>
                            </div>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
};

export default Objetivos;
