import Reveal from "../motion/Reveal";

// Cabeçalho padrão de seção: eyebrow (chip) + título serifado + subtítulo
const SectionHeading = ({ eyebrow, title, subtitle, align = "center", dark = false, className = "" }) => {
    const alignCls = align === "left" ? "text-left items-start" : "text-center items-center";

    return (
        <div className={`flex flex-col gap-4 ${alignCls} ${className}`}>
            {eyebrow && (
                <Reveal y={16}>
                    <span
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] ${
                            dark
                                ? "bg-white/10 text-primary-fixed ring-1 ring-white/20"
                                : "bg-primary-container/30 text-primary-dark ring-1 ring-primary-container/60"
                        }`}
                    >
                        <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-primary-fixed" : "bg-primary"}`} />
                        {eyebrow}
                    </span>
                </Reveal>
            )}
            <Reveal delay={0.08}>
                <h2
                    className={`font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${
                        dark ? "text-white" : "text-ink"
                    }`}
                >
                    {title}
                </h2>
            </Reveal>
            {subtitle && (
                <Reveal delay={0.16}>
                    <p
                        className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
                            dark ? "text-white/80" : "text-ink-soft"
                        } ${align === "center" ? "mx-auto" : ""}`}
                    >
                        {subtitle}
                    </p>
                </Reveal>
            )}
        </div>
    );
};

export default SectionHeading;
