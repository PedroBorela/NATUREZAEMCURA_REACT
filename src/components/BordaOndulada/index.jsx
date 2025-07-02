const BordaOndulada = ({ cor = "#e6f6d5", direcao = "bottom" }) => {
    const isTop = direcao === "top";

    return (
        <section className="bg-[#FFF] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4  text-center pb-[150px]">
                {/* Conteúdo opcional pode ser inserido aqui */}
            </div>

            {/* SVG BordaOndulada */}
            <div
                className={`absolute w-full ${isTop ? "top-0 rotate-180" : "bottom-0"
                    }`}
            >
                <svg
                    viewBox="0 0 1440 320"
                    className="w-full h-[80px] sm:h-[100px] lg:h-[120px]" // Altura reduzida
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        fill={cor}
                        d="M0,160L60,160C120,160,240,160,360,149.3C480,139,600,117,720,112C840,107,960,117,1080,138.7C1200,160,1320,192,1380,208L1440,224L1440,320L0,320Z"
                    />
                </svg>
            </div>
        </section>
    );
};

export default BordaOndulada;
