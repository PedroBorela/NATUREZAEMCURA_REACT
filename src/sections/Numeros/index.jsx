import CountUp from "../../blocks/TextAnimations/CountUp/CountUp";
import { RevealGroup, RevealItem } from "../../components/motion/Reveal";
import { GiMeditation } from "react-icons/gi";
import { FaStar, FaHandsPraying, FaHouseChimney } from "react-icons/fa6";

const stats = [
    { Icon: GiMeditation, valor: 7, prefixo: "", sufixo: "", label: "Anos de Yoga e Meditação" },
    { Icon: FaStar, valor: 2500, prefixo: "+", sufixo: "", label: "Pessoas atendidas" },
    { Icon: FaHandsPraying, valor: 25, prefixo: "+", sufixo: "", label: "Encontros terapêuticos realizados" },
    { Icon: FaHouseChimney, valor: 5, prefixo: "", sufixo: "", label: "Anos de estúdio próprio" },
];

const Numeros = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-[#4d7a14] py-16 text-white sm:py-20">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 20%, rgba(188,240,116,0.35) 0, transparent 45%), radial-gradient(circle at 80% 70%, rgba(172,98,234,0.25) 0, transparent 40%)",
                }}
            />
            <RevealGroup
                stagger={0.12}
                className="section-shell relative grid grid-cols-2 gap-8 text-center lg:grid-cols-4"
            >
                {stats.map(({ Icon, valor, prefixo, label }, i) => (
                    <RevealItem key={label}>
                        <div className="group flex flex-col items-center p-2 sm:p-4">
                            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-110">
                                <Icon className="h-7 w-7 text-primary-fixed" />
                            </span>
                            <p className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                                {prefixo}
                                <CountUp to={valor} duration={1.5 + i * 0.4} />
                            </p>
                            <p className="mt-1.5 text-sm font-medium text-white/80 sm:text-base">{label}</p>
                        </div>
                    </RevealItem>
                ))}
            </RevealGroup>
        </section>
    );
};

export default Numeros;
