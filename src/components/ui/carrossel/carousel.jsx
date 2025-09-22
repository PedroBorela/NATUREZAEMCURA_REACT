// carousel.jsx

"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React, { lazy, useState, useRef, useEffect, useCallback, memo } from "react";

const Slide = lazy(() => import('../carrossel/slide'));

const CarouselControl = memo(({ type, title, handleClick, disabled }) => (
    <button
        className={`w-10 h-10 flex items-center justify-center mx-2 bg-neutral-200 dark:bg-neutral-800 rounded-full transition-all hover:scale-110 active:scale-100 ${type === "previous" ? "rotate-180" : ""} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        title={title}
        onClick={handleClick}
        disabled={disabled}
        aria-label={title}
    >
        <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
));
CarouselControl.displayName = "CarouselControl";

export default function Carousel({ slides, sectionTitle = "Nossos Serviços" }) {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef(null);
    const autoPlayRef = useRef(null);
    const slidesLength = slides.length;

    const goToSlide = useCallback((newIndex) => {
        if (isAnimating) return;

        setIsAnimating(true);
        const finalIndex = (newIndex + slidesLength) % slidesLength;
        setCurrent(finalIndex);

        // O timeout agora tem uma duração que corresponde à transição do CSS (duration-500)
        timeoutRef.current = setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    }, [isAnimating, slidesLength]);
    
    // Função para resetar o autoplay ao interagir manualmente
    const resetAutoPlay = useCallback(() => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        
        autoPlayRef.current = setInterval(() => {
            // Usamos a forma funcional para não depender do 'current' aqui
            setCurrent(prev => (prev + 1) % slidesLength);
        }, 10000);
    }, [slidesLength]);


    const handlePreviousClick = useCallback(() => {
        goToSlide(current - 1);
        resetAutoPlay();
    }, [current, goToSlide, resetAutoPlay]);

    const handleNextClick = useCallback(() => {
        goToSlide(current + 1);
        resetAutoPlay();
    }, [current, goToSlide, resetAutoPlay]);

    const handleIndicatorClick = useCallback((index) => {
        goToSlide(index);
        resetAutoPlay();
    }, [goToSlide, resetAutoPlay]);

    // Efeito para o autoplay
    useEffect(() => {
        if (slidesLength > 1) {
            resetAutoPlay();
        }
        // A função de limpeza aqui limpa APENAS o intervalo do autoplay
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [slidesLength, resetAutoPlay]);

    // Efeito para limpar o timeout APENAS quando o componente for desmontado
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);


    return (
        <section className="flex flex-col items-center py-8 w-full overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-12 text-green-500">
                {sectionTitle}
            </h2>

            <div className="relative w-[70vmin] h-[70vmin] mx-auto">
                <ul
                    className="absolute flex transition-transform duration-500 ease-in-out"
                    style={{
                        width: `${slidesLength * 100}%`,
                        transform: `translateX(-${current * (100 / slidesLength)}%)`
                    }}
                >
                    {slides.map((slide, index) => (
                        <Slide
                            key={index}
                            slide={slide}
                            index={index}
                            current={current}
                            handleSlideClick={handleIndicatorClick}
                        />
                    ))}
                </ul>

                <div className="absolute flex justify-between w-[calc(100%+4rem)] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20">
                    <CarouselControl type="previous" title="Anterior" handleClick={handlePreviousClick} disabled={isAnimating} />
                    <CarouselControl type="next" title="Próximo" handleClick={handleNextClick} disabled={isAnimating} />
                </div>
            </div>

            <div className="flex justify-center mt-20 space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${index === current ? 'bg-green-500' : 'bg-neutral-300 hover:bg-neutral-400'}`}
                        onClick={() => handleIndicatorClick(index)}
                        aria-label={`Ir para slide ${index + 1}`}
                        disabled={isAnimating}
                    />
                ))}
            </div>
        </section>
    );
}