import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { faq } from "../../constants/copy";
import SectionHeading from "../../components/SectionHeading";
import { RevealGroup, RevealItem } from "../../components/motion/Reveal";
import { FaChevronDown } from "react-icons/fa";

const FaqItem = ({ pergunta, resposta, aberto, onToggle }) => {
    const reduce = useReducedMotion();

    return (
        <div
            className={`overflow-hidden rounded-2xl ring-1 transition-all duration-300 ${
                aberto
                    ? "bg-surface-lowest shadow-ambient-lg ring-primary-container/60"
                    : "bg-surface-lowest/70 shadow-ambient ring-outline-variant/40 hover:ring-primary-container/40"
            }`}
        >
            <button
                onClick={onToggle}
                aria-expanded={aberto}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
                <span className="font-display text-lg font-medium text-ink">{pergunta}</span>
                <motion.span
                    animate={{ rotate: aberto ? 180 : 0 }}
                    transition={{ duration: reduce ? 0 : 0.3 }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        aberto ? "bg-primary text-white" : "bg-primary-container/30 text-primary-dark"
                    }`}
                >
                    <FaChevronDown className="h-3.5 w-3.5" />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {aberto && (
                    <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="px-6 pb-6 text-base leading-relaxed text-ink-soft">{resposta}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Faq = () => {
    const [aberto, setAberto] = useState(0);

    return (
        <section id="faq" className="relative overflow-hidden bg-surface-low section-pad">
            <div className="section-shell mx-auto max-w-3xl">
                <SectionHeading eyebrow="FAQ" title={faq.title} />

                <RevealGroup stagger={0.08} className="mt-12 flex flex-col gap-4">
                    {faq.itens.map((item, i) => (
                        <RevealItem key={item.pergunta}>
                            <FaqItem
                                pergunta={item.pergunta}
                                resposta={item.resposta}
                                aberto={aberto === i}
                                onToggle={() => setAberto(aberto === i ? null : i)}
                            />
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </section>
    );
};

export default Faq;
