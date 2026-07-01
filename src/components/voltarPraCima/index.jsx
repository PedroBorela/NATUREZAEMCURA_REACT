import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

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
            className="fixed bottom-8 right-8 z-50 rounded-full bg-primary p-3.5 text-white shadow-ambient-lg opacity-0 invisible transition-all duration-300 hover:-translate-y-1 hover:bg-primary-dark"
            aria-label="Voltar ao topo"
        >
            <FaArrowUp />
        </button>
    );
};

export default VoltarPraCima;
