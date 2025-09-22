"use client";
import { useState, useRef, useId, useEffect, useCallback, memo, Suspense } from "react";

const Slide = memo(({ slide, index, current, handleSlideClick }) => {
    const { src, button, title } = slide;
    const isActive = current === index;
    const slideRef = useRef(null); // Ref para acessar o elemento <li>

    // Handler para o movimento do mouse
    const handleMouseMove = (event) => {
        // A animação só executa no slide ativo para economizar recursos
        if (!isActive || !slideRef.current) return;
        
        const el = slideRef.current;
        const rect = el.getBoundingClientRect();
        // Calcula a posição do mouse relativa ao centro do slide
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);

        // Atualiza as variáveis CSS. O JS só faz isso, o resto é com o CSS.
        el.style.setProperty('--x', `${x}px`);
        el.style.setProperty('--y', `${y}px`);
    };

    // Handler para quando o mouse sai do slide
    const handleMouseLeave = () => {
        if (!slideRef.current) return;
        // Reseta as variáveis para a posição inicial (centro)
        slideRef.current.style.setProperty('--x', '0px');
        slideRef.current.style.setProperty('--y', '0px');
    };

    return (
        <li
            ref={slideRef}
            className="flex flex-1 flex-col items-center justify-between relative text-center text-white w-[70vmin] h-[70vmin] mx-[4vmin] z-10 cursor-pointer"
            onClick={() => handleSlideClick(index)}
            // Adicionando os eventos do mouse
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `scale(${isActive ? 1 : 0.9})`,
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
        >
            {/* A div interna é a que vai ter o efeito de parallax */}
            <div 
                className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-2xl"
                style={{
                    // O transform só é aplicado se o slide estiver ativo
                    transform: isActive ? 'translate3d(calc(var(--x, 0) / 30), calc(var(--y, 0) / 30), 0)' : 'none',
                    // A TRANSIÇÃO é a chave da performance! O navegador anima suavemente
                    // a mudança de posição, em vez do JS calcular cada passo.
                    transition: 'transform 0.2s ease-out',
                }}
            >
                <img
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: isActive ? 1 : 0.5 }}
                    alt={title}
                    src={src}
                    loading="lazy"
                    decoding="async"
                />
                <div
                    className="absolute inset-0 bg-black/40 transition-opacity duration-500"
                    style={{ opacity: isActive ? 1 : 0 }}
                />
            </div>
            
            {/* O conteúdo textual permanece o mesmo */}
            <div className={`relative p-[4vmin] w-full h-full flex flex-col justify-between transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}>
                <article>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-shadow-md">
                        {title}
                    </h2>
                    <p className="mt-4 text-xs md:text-base font-light text-shadow">
                        {button}
                    </p>
                </article>
                <button
                    className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-all duration-300 self-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    Quero participar!
                </button>
            </div>
        </li>
    );
});

export default Slide;
Slide.displayName = "Slide";