"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React, { lazy, useState, useRef, useId, useEffect, useCallback, memo, Suspense, useMemo } from "react";

const Slide = lazy(() => import('../carrossel/slide'));

const CarouselControl = memo(({ type, title, handleClick, disabled }) => (
    <button
        className={`w-10 h-10 flex items-center justify-center mx-2 bg-neutral-200 dark:bg-neutral-800 rounded-full transition-transform hover:-translate-y-0.5 active:translate-y-0 ${type === "previous" ? "rotate-180" : ""
            } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        title={title}
        onClick={handleClick}
        aria-label={title}
        disabled={disabled}
    >
        <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
));

CarouselControl.displayName = "CarouselControl";

export default function Carousel({ slides, sectionTitle = "Nossos Serviços" }) {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
    const id = useId();

    // Memoizar cálculos pesados
    const slidesLength = useMemo(() => slides.length, [slides.length]);

    const transformStyle = useMemo(() => ({
        transform: `translateX(-${current * (100 / slidesLength)}%)`,
        willChange: isTransitioning ? 'transform' : 'auto'
    }), [current, slidesLength, isTransitioning]);

    // Debounce das mudanças de slide
    const debouncedSetCurrent = useCallback((newIndex) => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrent(newIndex);

        // Usar requestAnimationFrame para suavizar a transição
        requestAnimationFrame(() => {
            timeoutRef.current = setTimeout(() => {
                setIsTransitioning(false);
            }, 300); // Duração da animação CSS
        });
    }, [isTransitioning]);

    const handlePreviousClick = useCallback(() => {
        const newIndex = (current - 1 + slidesLength) % slidesLength;
        debouncedSetCurrent(newIndex);
        resetAutoPlay();
    }, [current, slidesLength, debouncedSetCurrent]);

    const handleNextClick = useCallback(() => {
        const newIndex = (current + 1) % slidesLength;
        debouncedSetCurrent(newIndex);
        resetAutoPlay();
    }, [current, slidesLength, debouncedSetCurrent]);

    const handleSlideClick = useCallback((index) => {
        if (current !== index && !isTransitioning) {
            debouncedSetCurrent(index);
            resetAutoPlay();
        }
    }, [current, isTransitioning, debouncedSetCurrent]);

    const resetAutoPlay = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        // Usar requestIdleCallback se disponível
        const scheduleAutoPlay = () => {
            intervalRef.current = setInterval(() => {
                setCurrent(prev => {
                    const newIndex = (prev + 1) % slidesLength;
                    return newIndex;
                });
            }, 10000);
        };

        if (window.requestIdleCallback) {
            requestIdleCallback(scheduleAutoPlay);
        } else {
            setTimeout(scheduleAutoPlay, 0);
        }
    }, [slidesLength]);

    // Cleanup melhorado
    useEffect(() => {
        resetAutoPlay();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [resetAutoPlay]);

    // Preload próximo slide
    const preloadSlides = useMemo(() => {
        const nextIndex = (current + 1) % slidesLength;
        const prevIndex = (current - 1 + slidesLength) % slidesLength;
        return [prevIndex, current, nextIndex];
    }, [current, slidesLength]);

    return (
        <section className="flex flex-col items-center py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-12 text-green-500">
                {sectionTitle}
            </h2>

            <div
                className="relative w-[70vmin] h-[70vmin] mx-auto"
                aria-labelledby={`carousel-heading-${id}`}
            >
                <ul
                    className="absolute flex mx-[-4vmin] transition-transform duration-300 ease-out"
                    style={transformStyle}
                >
                    <Suspense fallback={<div className="w-full h-full bg-neutral-200 animate-pulse" />}>
                        {slides.map((slide, index) => (
                            <Slide
                                key={`${id}-${index}`}
                                slide={slide}
                                index={index}
                                current={current}
                                handleSlideClick={handleSlideClick}
                                shouldLoad={preloadSlides.includes(index)}
                            />
                        ))}
                    </Suspense>
                </ul>

                <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
                    <CarouselControl
                        type="previous"
                        title="Ir para o slide anterior"
                        handleClick={handlePreviousClick}
                        disabled={isTransitioning}
                    />
                    <CarouselControl
                        type="next"
                        title="Ir para o próximo slide"
                        handleClick={handleNextClick}
                        disabled={isTransitioning}
                    />
                </div>
            </div>

            {/* Indicadores de slide */}
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${index === current
                                ? 'bg-green-500'
                                : 'bg-neutral-300 hover:bg-neutral-400'
                            }`}
                        onClick={() => handleSlideClick(index)}
                        aria-label={`Ir para slide ${index + 1}`}
                        disabled={isTransitioning}
                    />
                ))}
            </div>
        </section>
    );
}