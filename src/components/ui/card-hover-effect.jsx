"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useCallback, memo } from "react";

// Componentes memoizados para evitar rerenders desnecessários
const Card = memo(({ className, children }) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-verdeEsmeralda-300 via-orquideaLilas-300 to-azulArpoador-400 to-90% border border-transparent dark:border-white/[0.2] group-hover:border-verdeEsmeralda-100 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
});

Card.displayName = "Card";

const CardTitle = memo(({ className, children }) => {
    return (
        <h4 className={cn("text-white text-lg font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
        
    );
});

CardTitle.displayName = "CardTitle";

const CardDescription = memo(({ className, children }) => {
    return (
        <p className={cn("mt-8 text-white tracking-wide leading-relaxed text-sm", className)}>
            {children}
        </p>
    );
});

CardDescription.displayName = "CardDescription";

const HoverBackground = memo(() => {
    return (
        <motion.span
            className="absolute inset-0 h-full w-full bg-orquideaLilas-300/[0.8] block rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.15 },
            }}
            exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
            }}
        />
    );
});

HoverBackground.displayName = "HoverBackground";

export const HoverEffect = memo(({ items, className }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // Usando useCallback para evitar recriação da função
    const handleMouseEnter = useCallback((idx) => {
        setHoveredIndex(idx);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredIndex(null);
    }, []);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
            {items.map((item, idx) => (
                <div
                    key={`${item.link}-${idx}`} // Melhor chave única
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && <HoverBackground />}
                    </AnimatePresence>
                    <Card>
                        {item.icon && <div className="text-2xl text-white">{item.icon}</div>}
                        <CardTitle>{item.title}</CardTitle>
                        <p className="text-white/80 text-sm italic mt-1">
                                {item.subtitle}
                            </p>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </div>
            ))}
        </div>
    );
});

HoverEffect.displayName = "HoverEffect";

// Exportando os componentes
export { Card, CardTitle, CardDescription };