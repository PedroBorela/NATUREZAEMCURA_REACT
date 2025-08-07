import React, { useRef, useEffect, useMemo, useState, lazy, Suspense } from 'react';
import './cta.css';

// Lazy loading de componentes pesados
const StarBorder = lazy(() => import('../../Animations/StarBorder/StarBorder'));
const ShinyText = lazy(() => import('../../blocks/TextAnimations/ShinyText/ShinyText'));
const BotaoSeta = lazy(() => import('../../components/BotaoSeta'));

// Placeholder components para evitar layout shift
const StarBorderPlaceholder = () => (
    <a
        href="https://wa.me/5533984385658?text=Olá, tenho interesse em fazer parte"
        className="text-white font-bold py-3 px-8 bg-gradient-to-br from-green-700 via-green-500 to-green-700 rounded-lg hover:scale-110 transition-all inline-block"
    >
        Quero me inscrever!
    </a>
);

const BotaoSetaPlaceholder = () => (
    <a
        href="#servicos"
        className="text-white font-bold py-3 px-8 border border-white rounded-lg hover:bg-white hover:text-black transition-all inline-block"
    >
        Saiba mais
    </a>
);

const CTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationsLoaded, setAnimationsLoaded] = useState(false);
    const logoRef = useRef(null);
    const headRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef(null);
    const sectionRef = useRef(null);

    // Memoizar o texto da descrição
    const descriptionText = useMemo(() => (
        "Venha participar das aulas de Yoga, dos Cursos de Reiki, Encontros Mensais, das Excursões, Cerimônias Espirituais Indígenas, Cerimônia de Cacau Medicinal e Encontros Exclusivos para Mulheres!"
    ), []);

    // Intersection Observer para lazy loading das animações
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { 
                threshold: 0.1,
                rootMargin: '100px 0px' // Pré-carrega antes de ser visível
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    // Carregar GSAP apenas quando necessário
    useEffect(() => {
        if (!isVisible || animationsLoaded) return;

        let gsap;
        
        const loadGSAP = async () => {
            try {
                const gsapModule = await import('gsap');
                gsap = gsapModule.default;
                
                // Animar apenas elementos críticos inicialmente
                const tl = gsap.timeline({
                    defaults: {
                        ease: 'power2.out',
                        duration: 0.8 // Duração reduzida
                    }
                });

                // Estados iniciais mais suaves
                gsap.set([logoRef.current, headRef.current, descriptionRef.current, buttonsRef.current], {
                    opacity: 0,
                });

                gsap.set(logoRef.current, { scale: 0.95, y: -20 });
                gsap.set([headRef.current, descriptionRef.current], { y: 20 });
                gsap.set(buttonsRef.current, { scale: 0.98 });

                // Sequência de animação mais rápida
                tl.to(logoRef.current, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6
                })
                .to([headRef.current, descriptionRef.current], {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1
                }, '-=0.3')
                .to(buttonsRef.current, {
                    opacity: 1,
                    scale: 1
                }, '-=0.2');

                // Animação de pulse mais sutil e performática
                gsap.to(logoRef.current, {
                    scale: 1.02,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                });

                setAnimationsLoaded(true);

            } catch (error) {
                console.warn('Failed to load GSAP:', error);
                // Fallback: mostrar conteúdo sem animação
                if (logoRef.current) logoRef.current.style.opacity = '1';
                if (headRef.current) headRef.current.style.opacity = '1';
                if (descriptionRef.current) descriptionRef.current.style.opacity = '1';
                if (buttonsRef.current) buttonsRef.current.style.opacity = '1';
            }
        };

        // Usar requestIdleCallback se disponível
        if (window.requestIdleCallback) {
            requestIdleCallback(loadGSAP);
        } else {
            setTimeout(loadGSAP, 100);
        }

    }, [isVisible, animationsLoaded]);

    return (
        <section 
            ref={sectionRef}
            id="home" 
            className="hero parallax min-h-screen flex items-center justify-center text-white pt-20"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                   {/*} <picture> */}
                        {/* WebP para navegadores modernos */}
                        {/*<source srcSet="/imgs/logo.webp" type="image/webp" /> */}
                        {/* Fallback para navegadores mais antigos */}
                        <img
                            ref={logoRef}
                            src="/imgs/logo.png"
                            alt="Logo Natureza e Cura"
                            className="rounded-lg w-full h-auto md:max-h-[325px] object-contain object-center"
                            width="325" // Dimensões explícitas para evitar layout shift
                            height="325"
                            fetchPriority="high" // Priorizar o carregamento
                            decoding="async"
                            style={{ opacity: isVisible ? undefined : 1 }} // Mostrar imediatamente se animações não carregaram
                        />
                    {/*</picture> */}
                </h1>

                <h2
                    ref={headRef}
                    className="text-2xl md:text-3xl mb-6 font-serif italic font-bold text-white py-2 rounded-md"
                    style={{
                        textShadow: '0 0 10px #8388f1, 0 0 20px #8388f1',
                        opacity: isVisible ? undefined : 1
                    }}
                >
                    Terapias alternativas<br />e complementares
                </h2>

                <p
                    ref={descriptionRef}
                    className="md:text-lg max-w-3xl text-sm mx-auto px-20 mb-10 font-serif font-bold tracking-wide text-white py-2"
                    style={{
                        textShadow: '0 0 12px #8388f1, 0 0 24px #8388f1',
                        opacity: isVisible ? undefined : 1
                    }}
                >
                    {descriptionText}
                </p>

                <div
                    ref={buttonsRef}
                    className="flex flex-col sm:flex-row justify-center gap-4 items-center pb-5"
                    style={{ opacity: isVisible ? undefined : 1 }}
                >
                    <Suspense fallback={<StarBorderPlaceholder />}>
                        <StarBorder
                            as="a"
                            color="white"
                            bgColor="bg-gradient-to-br from-green-700 via-green-500 to-green-700 to-90%"
                            thickness={3}
                            speed="1s"
                            href="https://wa.me/5533984385658?text=Olá, tenho interesse em fazer parte"
                            className="text-white font-bold py-3 px-8 hover:scale-110 transition-all"
                        >
                            <Suspense fallback="Quero me inscrever!">
                                <ShinyText text="Quero me inscrever!" />
                            </Suspense>
                        </StarBorder>
                    </Suspense>
                    
                    <Suspense fallback={<BotaoSetaPlaceholder />}>
                        <BotaoSeta texto="Saiba mais" referencia="#servicos" />
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default React.memo(CTA);