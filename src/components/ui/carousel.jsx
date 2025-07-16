"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect, useCallback, memo } from "react";

const Slide = memo(({ slide, index, current, handleSlideClick }) => {
    const slideRef = useRef(null);
    const animationFrame = useRef();
    const mousePosition = useRef({ x: 0, y: 0 });

    const animate = useCallback(() => {
        if (!slideRef.current) return;

        const { x, y } = mousePosition.current;
        slideRef.current.style.setProperty("--x", `${x}px`);
        slideRef.current.style.setProperty("--y", `${y}px`);
        animationFrame.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        animationFrame.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame.current);
    }, [animate]);

    const handleMouseMove = useCallback((event) => {
        const el = slideRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        mousePosition.current = {
            x: event.clientX - (rect.left + rect.width / 2),
            y: event.clientY - (rect.top + rect.height / 2)
        };
    }, []);

    const handleMouseLeave = useCallback(() => {
        mousePosition.current = { x: 0, y: 0 };
    }, []);

    const { src, button, title } = slide;

    return (
        <div className="[perspective:1200px] [transform-style:preserve-3d]">
            <li
                ref={slideRef}
                className="flex flex-1 flex-col items-center justify-between relative text-center text-white w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
                onClick={() => handleSlideClick(index)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1)",
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
                    style={{
                        transform: current === index
                            ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                            : "none",
                    }}
                >
                    <img
                        className="absolute inset-0 w-[120%] h-[120%] object-cover transition-opacity duration-600"
                        style={{ opacity: current === index ? 1 : 0.5 }}
                        alt={title}
                        src={src}
                        loading="lazy"
                        decoding="async"
                    />
                    {current === index && (
                        <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
                    )}
                </div>

                {/* Conteúdo superior */}
                <article className={`relative p-[6vmin] w-full transition-opacity duration-1000 ${current === index ? "opacity-100" : "opacity-0"}`}>
                    <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold ">
                        {title}
                    </h2>
                    <p className="mt-6 text-orquideaLilas-100 text-sm text-wrap md:text-base font-medium break-words">
                        {button}
                    </p>
                </article>

                {/* Botão inferior */}
                <div className={`relative p-[4vmin] w-full transition-opacity duration-1000 ${current === index ? "opacity-100" : "opacity-0"}`}>
                    <button
                        className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-all duration-300"
                        onClick={(e) => {
                            e.stopPropagation(); // Impede que o clique no botão ative o handleSlideClick
                            // Adicione aqui a ação do botão
                        }}
                    >
                        Quero participar!
                    </button>
                </div>
            </li>
        </div>
    );
});

Slide.displayName = "Slide";

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