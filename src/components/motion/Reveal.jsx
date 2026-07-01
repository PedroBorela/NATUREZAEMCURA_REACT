import { motion, useReducedMotion } from "motion/react";

// Primitivos de animação compartilhados — todos respeitam prefers-reduced-motion.
const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 28, className, as = "div", once = true }) => {
    const reduce = useReducedMotion();
    const Tag = motion[as] ?? motion.div;

    return (
        <Tag
            className={className}
            initial={reduce ? false : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, amount: 0.25, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.7, delay, ease: EASE }}
        >
            {children}
        </Tag>
    );
};

// Container que revela os filhos em cascata (stagger)
export const RevealGroup = ({ children, className, stagger = 0.08, delay = 0 }) => {
    const reduce = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={reduce ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
            }}
        >
            {children}
        </motion.div>
    );
};

export const RevealItem = ({ children, className, y = 22 }) => {
    const reduce = useReducedMotion();

    return (
        <motion.div
            className={className}
            variants={{
                hidden: reduce ? { opacity: 1 } : { opacity: 0, y },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
            }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
