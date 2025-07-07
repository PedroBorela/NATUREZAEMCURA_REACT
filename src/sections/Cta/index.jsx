import React, { useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';
import StarBorder from '../../Animations/StarBorder/StarBorder';
import ShinyText from '../../blocks/TextAnimations/ShinyText/ShinyText';
import BotaoSeta from '../../components/BotaoSeta';
import './cta.css';

const CTA = () => {
    const logoRef = useRef(null);
    const headRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonsRef = useRef(null);
    const animationRef = useRef(null);

    //Meoizar o texto da descrição para evitar re-renderizações desnecessárias
    const descriptionText = useMemo(() => (
        "Venha participar das aulas de Yoga, dos Cursos de Reiki, Encontros Mensais, das Excursões, Cerimônias Espirituais Indígenas, Cerimônia de Cacau Medicinal e Encontros Exclusivos para Mulheres!"
    ), []);

    useEffect(() => {
        // Criar uma linha do tempo de animação
        const tl = gsap.timeline({
            defaults: {
                ease: 'power2.out',
                duration: 1
            }
        });

        //definir estados iniciais
        gsap.set([logoRef.current, headRef.current, descriptionRef.current, buttonsRef.current], {
            opacity: 0,
        });

        gsap.set(logoRef.current, { scale: 0.9, y: -50 });
        gsap.set(headRef.current, { y: 30 });
        gsap.set(descriptionRef.current, { y: 30 });
        gsap.set(buttonsRef.current, { scale: 0.95 });

        // Build animation sequence
        tl.to(logoRef.current, {
            opacity: 1,
            scale: 1,
            y: 0
        })
            .to(headRef.current, {
                opacity: 1,
                y: 0
            }, '-=0.5')
            .to(descriptionRef.current, {
                opacity: 1,
                y: 0
            }, '-=0.5')
            .to(buttonsRef.current, {
                opacity: 1,
                scale: 1
            }, '-=0.4');

        // Create pulsing animation
        const pulseAnimation = gsap.to(logoRef.current, {
            scale: 1.05,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
        });

        //Armazenar a referência da animação para limpeza
        animationRef.current = {
            timeline: tl,
            pulse: pulseAnimation
        };

        //Limpar a animação quando o componente for desmontado
        return () => {
            tl.kill();
            pulseAnimation.kill();
        };
    }, []);

    return (
        <section id="home" className="hero parallax min-h-screen flex items-center justify-center text-white pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <img
                        ref={logoRef}
                        src="/imgs/logo.png"
                        alt="Psicólogo em sessão"
                        className="rounded-lg w-full h-auto md:max-h-[325px]  object-contain transition-transform"
                        loading="lazy" // Add lazy loading
                    />
                </h1>

                <h2
                    ref={headRef}
                    className="text-2xl md:text-3xl mb-6 font-serif italic font-bold text-white py-2 rounded-md"
                    style={{
                        textShadow: '0 0 10px #8388f1, 0 0 20px #8388f1',
                    }}
                >
                    Terapias alternativas<br />e complementares
                </h2>

                <p
                    ref={descriptionRef}
                    className="md:text-base max-w-3xl text-sm mx-auto mb-10 font-serif font-bold tracking-wide text-white lg: py-2"
                    style={{
                        textShadow: '0 0 12px #8388f1, 0 0 24px #8388f1',
                    }}
                >
                    {descriptionText}
                </p>

                <div
                    ref={buttonsRef}
                    className="flex flex-col sm:flex-row justify-center gap-4 items-center pb-5"
                >
                    <StarBorder
                        as="a"
                        color="white"
                        bgColor="bg-gradient-to-br from-green-700 via-green-500 to-green-700 to-90%"
                        thickness={3}
                        speed="1s"
                        href="https://wa.me/5533984385658?text=Olá, tenho interesse em fazer parte"
                        className="text-white font-bold py-3 px-8 hover:scale-110 transition-all"
                    >
                        <ShinyText text="Quero me inscrever!" />
                    </StarBorder>
                    <BotaoSeta texto="Saiba mais" />
                </div>
            </div>
        </section>
    );
};

export default React.memo(CTA);