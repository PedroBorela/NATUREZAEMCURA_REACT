"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useTransform, useAnimationFrame, useReducedMotion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

// Velocidade do auto-scroll em px/s
const SPEEDS = { fast: 120, normal: 60, slow: 30 };

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "slow",
    pauseOnHover = true,
    className
}) => {
    const trackRef = useRef(null);
    const [loopWidth, setLoopWidth] = useState(0);
    const x = useMotionValue(0);
    const reduce = useReducedMotion();

    const dragging = useRef(false);
    const hovering = useRef(false);
    const lastPointerX = useRef(0);
    const lastPointerT = useRef(0);
    const velocity = useRef(0);

    // Distância exata de um ciclo: do 1º item da 1ª cópia ao 1º da 2ª cópia
    useEffect(() => {
        const measure = () => {
            const track = trackRef.current;
            if (!track || track.children.length <= items.length) return;
            const first = track.children[0];
            const firstClone = track.children[items.length];
            setLoopWidth(firstClone.offsetLeft - first.offsetLeft);
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [items.length]);

    useAnimationFrame((_, delta) => {
        if (!loopWidth || dragging.current) return;

        let next = x.get();
        if (Math.abs(velocity.current) > 40) {
            // Inércia após soltar o arrasto, com decaimento suave
            next += (velocity.current * delta) / 1000;
            velocity.current *= Math.exp(-delta / 350);
        } else {
            velocity.current = 0;
            if (reduce || (pauseOnHover && hovering.current)) return;
            const dir = direction === "right" ? 1 : -1;
            next += (dir * (SPEEDS[speed] ?? SPEEDS.slow) * delta) / 1000;
        }
        x.set(next);
    });

    // Mantém o deslocamento sempre dentro de um ciclo (loop infinito nos dois sentidos)
    const wrappedX = useTransform(x, (v) => {
        if (!loopWidth) return 0;
        return (((v % loopWidth) + loopWidth) % loopWidth) - loopWidth;
    });

    const onPointerDown = (e) => {
        dragging.current = true;
        velocity.current = 0;
        lastPointerX.current = e.clientX;
        lastPointerT.current = performance.now();
        try {
            e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
            // pointer já inativo (ex.: gesto cancelado) — o arrasto segue sem captura
        }
    };

    const onPointerMove = (e) => {
        if (!dragging.current) return;
        const now = performance.now();
        const dx = e.clientX - lastPointerX.current;
        const dt = now - lastPointerT.current;
        lastPointerX.current = e.clientX;
        lastPointerT.current = now;
        x.set(x.get() + dx);
        if (dt > 0) {
            velocity.current = Math.max(-2500, Math.min(2500, (dx / dt) * 1000));
        }
    };

    const endDrag = () => {
        dragging.current = false;
    };

    return (
        <div
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden cursor-grab select-none active:cursor-grabbing [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
            style={{ touchAction: "pan-y" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onMouseEnter={() => { hovering.current = true; }}
            onMouseLeave={() => { hovering.current = false; }}
        >
            <motion.ul
                ref={trackRef}
                style={{ x: wrappedX }}
                className="flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4"
            >
                {[...items, ...items].map((item, i) => (
                    <li
                        className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px]"
                        key={`${item.name}-${i}`}>
                        <blockquote>
                            <span
                                className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800">
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span
                                        className="text-sm leading-[1.6] font-semibold text-neutral-700">
                                        {item.name}
                                    </span>
                                    <span
                                        className="text-sm leading-[1.6] font-normal text-neutral-500">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </motion.ul>
        </div>
    );
};
