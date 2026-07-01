import { acolhimento, WHATSAPP_URL } from "../../constants/copy";
import Reveal from "../../components/motion/Reveal";
import { ArrowRight } from "lucide-react";

const Acolhimento = () => {
    return (
        <section className="relative overflow-hidden bg-surface-inverse py-20 sm:py-24">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary-container/15 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-secondary-container/15 blur-3xl" />
            </div>

            <div className="section-shell relative mx-auto max-w-4xl text-center">
                <Reveal>
                    <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                        {acolhimento.title}
                    </h2>
                </Reveal>

                <Reveal delay={0.12}>
                    <p className="mt-6 text-lg leading-relaxed text-white/80">
                        {acolhimento.paragrafos[0]}
                    </p>
                </Reveal>

                <Reveal delay={0.2}>
                    <p className="mt-4 font-display text-2xl font-medium leading-snug text-primary-fixed sm:text-3xl">
                        Pedir ajuda não é fraqueza. <br className="hidden sm:block" />
                        É um passo de coragem.
                    </p>
                </Reveal>

                <Reveal delay={0.28}>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
                        {acolhimento.paragrafos[2]}
                    </p>
                </Reveal>

                <Reveal delay={0.36}>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary-container px-8 py-3.5 text-base font-semibold text-primary-onContainer shadow-ambient-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-fixed"
                    >
                        Dar o primeiro passo
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </Reveal>
            </div>
        </section>
    );
};

export default Acolhimento;
