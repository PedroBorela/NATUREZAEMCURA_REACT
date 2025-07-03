"use client";
import { useEffect, useRef } from "react";

const VoltarPraCima = () => {
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!buttonRef.current) return;

            if (window.pageYOffset > 300) {
                buttonRef.current.classList.remove("opacity-0", "invisible");
                buttonRef.current.classList.add("opacity-100", "visible");
            } else {
                buttonRef.current.classList.remove("opacity-100", "visible");
                buttonRef.current.classList.add("opacity-0", "invisible");
            }
        };

        const handleClick = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };

        window.addEventListener("scroll", handleScroll);
        const btn = buttonRef.current;
        btn?.addEventListener("click", handleClick);

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
            btn?.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <button
            ref={buttonRef}
            id="backToTop"
            className="fixed bottom-8 right-8 bg-gradient-to-br from-azulArpoador-100 to-azulArpoador-300 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 z-50"
            aria-label="Voltar ao topo"
        >
            <i className="fas fa-arrow-up"></i>
        </button>
    );
};

export default VoltarPraCima;
