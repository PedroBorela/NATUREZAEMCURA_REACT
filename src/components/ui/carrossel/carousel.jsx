"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React, {lazy , useState, useRef, useId, useEffect, useCallback, memo, Suspense } from "react";
// import Slide from "../carrossel/slide";
const Slide = lazy(() => import('../carrossel/slide'));


// Slide.displayName = "Slide";

const CarouselControl = memo(({ type, title, handleClick }) => (
    <button
        className={`w-10 h-10 flex items-center justify-center mx-2 bg-neutral-200 dark:bg-neutral-800 rounded-full transition-transform hover:-translate-y-0.5 active:translate-y-0 ${type === "previous" ? "rotate-180" : ""
            }`}
        title={title}
        onClick={handleClick}
        aria-label={title}
    >
        <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
));

CarouselControl.displayName = "CarouselControl";

export default function Carousel({ slides, sectionTitle = "Nossos Serviços" }) {
    const [current, setCurrent] = useState(0);
    const intervalRef = useRef(null);
    const id = useId();

    const handlePreviousClick = useCallback(() => {
        setCurrent(prev => (prev - 1 + slides.length) % slides.length);
        resetAutoPlay();
    }, [slides.length]);

    const handleNextClick = useCallback(() => {
        setCurrent(prev => (prev + 1) % slides.length);
        resetAutoPlay();
    }, [slides.length]);

    const handleSlideClick = useCallback((index) => {
        if (current !== index) {
            setCurrent(index);
            resetAutoPlay();
        }
    }, [current]);

    const resetAutoPlay = useCallback(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 10000);
    }, [slides.length]);

    useEffect(() => {
        resetAutoPlay();
        return () => clearInterval(intervalRef.current);
    }, [resetAutoPlay]);

    return (
        <section className="flex flex-col items-center py-8 ">
            <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-12 text-green-500 ">
                {sectionTitle}
            </h2>

            <div
                className="relative w-[70vmin] h-[70vmin] mx-auto"
                aria-labelledby={`carousel-heading-${id}`}
            >
                <ul
                    className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
                    style={{
                        transform: `translateX(-${current * (100 / slides.length)}%)`,
                    }}
                >
                    
                    {slides.map((slide, index) => (
                        
                        <Slide
                            key={`${id}-${index}`}
                            slide={slide}
                            index={index}
                            current={current}
                            handleSlideClick={handleSlideClick}
                        />
                    ))}
                </ul>

                <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
                    <CarouselControl
                        type="previous"
                        title="Ir para o slide anterior"
                        handleClick={handlePreviousClick}
                    />
                    <CarouselControl
                        type="next"
                        title="Ir para o próximo slide"
                        handleClick={handleNextClick}
                    />
                </div>
            </div>
        </section>
    );
}