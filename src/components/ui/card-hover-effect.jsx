import { cn } from "@/lib/utils";
import gsap from "gsap";
import { AnimatePresence, motion } from "motion/react";

import { useEffect, useState } from "react";



export const HoverEffect = ({
    items,
    className
}) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>
            {items.map((item, idx) => (
                <div
                    // href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}>
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-orquideaLilas-300/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }} />
                        )}
                    </AnimatePresence>
                    <Card className="cardzin" >
                        <div className="text-2xl text-white">{item.icon}</div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-verdeEsmeralda-300 via-orquideaLilas-300 to-azulArpoador-400 to-90% border border-transparent dark:border-white/[0.2] group-hover:border-verdeEsmeralda-100 relative z-20",
                className
            )}>
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children
}) => {
    return (
        <h4 className={cn("text-white text-lg font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children
}) => {
    return (
        <p
            className={cn("mt-8 text-white tracking-wide leading-relaxed text-sm", className)}>
            {children}
        </p>
    );
};
