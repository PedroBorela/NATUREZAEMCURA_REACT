import { metodo } from "../../constants/copy";
import SectionHeading from "../../components/SectionHeading";
import { RevealGroup, RevealItem } from "../../components/motion/Reveal";
import { GiMeditation, GiBrain } from "react-icons/gi";
import { FaHome, FaLeaf, FaCheck } from "react-icons/fa";

const estilos = [
    {
        Icon: GiMeditation,
        chip: "bg-primary-container/40 text-primary-dark",
        borda: "hover:ring-primary-container",
    },
    {
        Icon: GiBrain,
        chip: "bg-secondary-fixed/70 text-secondary-dark",
        borda: "hover:ring-secondary-container/60",
    },
    {
        Icon: FaHome,
        chip: "bg-tertiary-fixed/70 text-tertiary",
        borda: "hover:ring-tertiary-container/60",
    },
    {
        Icon: FaLeaf,
        chip: "bg-primary-container/40 text-primary-dark",
        borda: "hover:ring-primary-container",
    },
];

const Metodo = () => {
    return (
        <section id="metodo" className="relative overflow-hidden bg-surface-low section-pad">
            <div className="section-shell">
                <SectionHeading
                    eyebrow="Como funciona"
                    title={metodo.title}
                    subtitle={metodo.subtitle}
                />

                <RevealGroup stagger={0.12} className="mx-auto mt-6 max-w-3xl text-center">
                    <RevealItem>
                        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">{metodo.intro}</p>
                    </RevealItem>
                </RevealGroup>

                <RevealGroup stagger={0.12} className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {metodo.pilares.map((pilar, i) => {
                        const { Icon, chip, borda } = estilos[i % estilos.length];
                        return (
                            <RevealItem key={pilar.nome} className="h-full">
                                <article
                                    className={`group flex h-full flex-col rounded-3xl bg-surface-lowest p-7 shadow-ambient ring-1 ring-outline-variant/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-ambient-lg sm:p-9 ${borda}`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 ${chip}`}>
                                            <Icon />
                                        </span>
                                        <span className="font-display text-5xl font-semibold text-surface-highest">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                                        {pilar.nome}
                                    </h3>
                                    <p className="mt-3 text-base leading-relaxed text-ink-soft">
                                        {pilar.descricao}
                                    </p>

                                    {pilar.itens.length > 0 && (
                                        <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                                            {pilar.itens.map((item) => (
                                                <li key={item} className="flex items-center gap-2.5 text-sm text-ink-soft">
                                                    <FaCheck className="h-3 w-3 shrink-0 text-primary" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <p className="mt-auto pt-6 text-sm italic leading-relaxed text-ink-muted">
                                        {pilar.nota}
                                    </p>
                                </article>
                            </RevealItem>
                        );
                    })}
                </RevealGroup>
            </div>
        </section>
    );
};

export default Metodo;
