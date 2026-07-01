import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { acolhimento, WHATSAPP_URL } from "../../constants/copy";
import Reveal from "../../components/motion/Reveal";
import { ArrowRight } from "lucide-react";

const Acolhimento = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const [showVideo, setShowVideo] = useState(false);
    const reduce = useReducedMotion();

    // Só injeta o vídeo (6MB) quando a seção se aproxima do viewport
    useEffect(() => {
        if (reduce) return;
        const el = sectionRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowVideo(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "400px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [reduce]);

    // Pausa a reprodução quando a seção sai da tela
    useEffect(() => {
        if (!showVideo) return;
        const vid = videoRef.current;
        if (!vid) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    vid.play().catch(() => {});
                } else {
                    vid.pause();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(vid);
        return () => observer.disconnect();
    }, [showVideo]);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-surface-inverse py-20 sm:py-24">
            {/* Vídeo de fundo com overlay escuro para legibilidade */}
            {showVideo && (
                <video
                    ref={videoRef}
                    className="absolute inset-0 h-full w-full object-cover opacity-30"
                    src="/imgs/video_fundo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    aria-hidden="true"
                />
            )}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-surface-inverse/80 via-surface-inverse/60 to-surface-inverse/80"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary-container/15 blur-3xl" />
                <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-secondary-container/15 blur-3xl" />
            </div>

            <div className="section-shell relative mx-auto max-w-4xl text-center">
                <Reveal>
                    <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                        {acolhimento.title}
                    </h2>
                </Reveal>

                <Reveal delay={0.12}>
                    <p className="mt-6 text-lg leading-relaxed text-white/80">
                        {acolhimento.paragrafos[0]}
                    </p>
                </Reveal>

                <Reveal delay={0.2}>
                    <p className="mt-4 font-display text-2xl font-medium leading-snug text-primary-fixed sm:text-3xl">
                        Pedir ajuda não é fraqueza. <br className="hidden sm:block" />
                        É um passo de coragem.
                    </p>
                </Reveal>

                <Reveal delay={0.28}>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75">
                        {acolhimento.paragrafos[2]}
                    </p>
                </Reveal>

                <Reveal delay={0.36}>
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary-container px-8 py-3.5 text-base font-semibold text-primary-onContainer shadow-ambient-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-fixed"
                    >
                        Dar o primeiro passo
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </Reveal>
            </div>
        </section>
    );
};

export default Acolhimento;
