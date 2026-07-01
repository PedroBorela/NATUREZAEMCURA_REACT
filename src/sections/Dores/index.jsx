import { dores } from "../../constants/copy";
import SectionHeading from "../../components/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "../../components/motion/Reveal";
import {
    FaBrain,
    FaHeartBroken,
    FaCloudRain,
    FaBatteryQuarter,
    FaBed,
    FaWind,
    FaRegSadTear,
    FaWeight,
    FaBalanceScale,
    FaTired,
} from "react-icons/fa";

const icones = [
    FaWind,
    FaHeartBroken,
    FaBrain,
    FaWeight,
    FaCloudRain,
    FaBatteryQuarter,
    FaBed,
    FaRegSadTear,
    FaBalanceScale,
    FaTired,
];

const Dores = () => {
    return (
        <section id="dores" className="relative overflow-hidden bg-surface-low section-pad">
            <div className="section-shell">
                <SectionHeading
                    eyebrow="Como você tem se sentido?"
                    title={dores.title}
                    subtitle={dores.lead}
                />

                <RevealGroup className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 sm:gap-4">
                    {dores.itens.map((item, i) => {
                        const Icon = icones[i % icones.length];
                        return (
                            <RevealItem key={item}>
                                <div className="group flex h-full items-center gap-3 rounded-2xl bg-surface-lowest px-4 py-4 shadow-ambient ring-1 ring-outline-variant/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient-lg lg:flex-col lg:items-center lg:gap-3 lg:px-3 lg:py-6 lg:text-center">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary-fixed/70 text-secondary-dark transition-colors duration-300 group-hover:bg-secondary-container/50">
                                        <Icon className="h-4 w-4" />
                                    </span>
                                    <span className="text-sm font-medium leading-snug text-ink-soft">{item}</span>
                                </div>
                            </RevealItem>
                        );
                    })}
                </RevealGroup>

                <Reveal delay={0.15} className="mt-14 text-center">
                    <p className="font-display text-xl font-medium text-ink sm:text-2xl">
                        {dores.fechamento}
                    </p>
                    <p className="mt-3 inline-block rounded-full bg-primary-container/30 px-6 py-2.5 font-display text-lg font-semibold text-primary-dark sm:text-xl">
                        {dores.destaque}
                    </p>
                </Reveal>
            </div>
        </section>
    );
};

export default Dores;
