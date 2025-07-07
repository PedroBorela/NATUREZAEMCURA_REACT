import { useEffect, useRef } from "react";
import Bullet from "../../components/Bullet.jsx";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import './hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animationDefaults = {
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      };

      // Create a single timeline for all animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      tl.from(".hero-img", {
        ...animationDefaults,
        x: -50
      })
      .from(".hero-title", {
        ...animationDefaults,
        y: 40
      }, "-=0.8")
      .from(".hero-paragraph", {
        ...animationDefaults,
        y: 30,
        stagger: 0.2
      }, "-=0.7")
      .from(".hero-bullet", {
        ...animationDefaults,
        y: 30
      }, "-=0.6")
      .from(".selector", {
        ...animationDefaults,
        scale: 0.95,
        duration: 2
      }, "-=1");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
     <section id="sobre" ref={sectionRef} className="py-20 min-h-36 bg-[url('./imgs/fundodesfoc.jpg')] relative overflow-hidden overflow-x-hidden">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Added title section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Curar é Relembrar <span className="text-verdeEsmeralda-200">Quem Somos</span>
          </h1>
          <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
            Unindo psicologia clínica e saberes ancestrais para transformar vidas com propósito
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <SpotlightCard className="z-10">
              <img 
                src="./imgs/allanb.jpg" 
                alt="Allan Borela"
                className="hero-img rounded-lg w-full h-auto max-h-[500px] object-cover"
                loading="lazy"
              />
            </SpotlightCard>
          </div>

          <div className="md:w-1/2 z-10">
            <h2 className="hero-title text-4xl font-bold mb-6 text-white">
              Allan Borela
            </h2>
            
            <p className="hero-paragraph text-lg mb-6 font-bold text-white">
              Psicólogo clínico com pós-graduação em Terapias de Terceira e Quarta Geração e uma trajetória marcada pela união entre ciência moderna e saberes ancestrais. Atua há mais de uma década com <span className="text-verdeEsmeralda-200">yoga, meditação e práticas integrativas</span>, promovendo saúde em <span className="text-verdeEsmeralda-200">níveis físico, emocional, mental, energético e espiritual</span>.
            </p>
            
            <p className="hero-paragraph text-lg mb-8 font-bold text-white">
              "Minha jornada começou no SUS, levando yoga e meditação para centenas de pessoas em postos de saúde e CAPS. Com o tempo, compreendi que a verdadeira cura exige olhar o ser humano como um todo. Hoje, dedico minha vida à <span className="text-verdeEsmeralda-200">formação de terapeutas conscientes</span> e ao desenvolvimento de <span className="text-verdeEsmeralda-200">programas de equilíbrio emocional</span> profundamente enraizados na natureza e na alma."
            </p>
            
            <div className="hero-bullet flex flex-wrap gap-4">
              <Bullet />
              <Bullet 
                titulo="Diferencial" 
                texto="Ciência e Sabedoria Ancestral em União" 
                icon="fa-leaf" 
                corTitulo="#5F6F52" 
                corFundo="#A9B388" 
              />
            </div>
          </div>
        </div>
      </div>

      <img 
        className="selector w-[1250px] h-auto absolute z-0 sm:-top-20 bottom-0 opacity-20 right-0 pointer-events-none" 
        src="/imgs/mandala.png" 
        alt="Decorative mandala"
        loading="lazy"
      />
      
    </section>
  );
};

export default Hero;