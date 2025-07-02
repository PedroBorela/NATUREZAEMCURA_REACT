import ScrollVelocity from "../../blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import Bullet from "../../components/Bullet.jsx";
import SpotlightCard from "../../components/SpotlightCard/SpotlightCard";
import './hero.css';

// import '../../../public/imgs/AllanBorela.svg';
const Hero = () => {
  return (
    <section id="sobre" className="py-20 min-h-36 bg-[url('./imgs/fundodesfoc.jpg')] relative overflow-hidden overflow-x-hidden">
      {/* <div className="leaf-decoration top-0 left-0 transform absolute -translate-x-1/2 -translate-y-1/2">
                <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#5F6F52"
                        d="M50,20 C70,0 130,0 150,20 C170,40 170,80 150,100 C130,120 70,120 50,100 C30,80 30,40 50,20 Z"
                        transform="rotate(45 100 100)" />
                </svg>
            </div> */}


      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            {/* <img src="../../../public/imgs/logo.png" alt="Psicólogo em sessão"
                        className="rounded-lg  w-full h-auto max-h-[500px] object-contain "/> */}
            <SpotlightCard className="z-10">
              <img src="./imgs/allanb.jpg" alt="Allan Borela"
                className="rounded-lg w-full h-auto max-h-[500px] object-cover " />


            </SpotlightCard>

          </div>
          <div className="md:w-1/2 z-10">

            <h2 className="text-4xl font-bold mb-6 text-white">Allan Borela</h2>
            <p className="text-lg mb-6 font-bold text-white">
              Psicólogo clínico com pós-graduação em Terapias de Terceira e Quarta Geração e uma trajetória marcada pela união entre ciência moderna e saberes ancestrais. Atua há mais de uma década com <span className="text-verdeEsmeralda-200">yoga, meditação e práticas integrativas</span>, promovendo saúde em <span className="text-verdeEsmeralda-200">níveis físico, emocional, mental, energético e espiritual</span>.
            </p>
            <p className="text-lg mb-8 font-bold text-white">
              Minha jornada começou no SUS, levando yoga e meditação para centenas de pessoas em postos de saúde e CAPS. Com o tempo, compreendi que a verdadeira cura exige olhar o ser humano como um todo. Hoje, dedico minha vida à <span className="text-verdeEsmeralda-200">formação de terapeutas conscientes</span> e ao desenvolvimento de <span className="text-verdeEsmeralda-200">programas de equilíbrio emocional</span> profundamente enraizados na natureza e na alma.
            </p>
            <div className="flex flex-wrap gap-4">
              <Bullet />
              <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <div className="bg-[#A9B388] bg-opacity-20 p-3 rounded-full mr-4">
                  <i className="fas fa-leaf text-[#5F6F52]"></i>
                </div>
                <div>
                  <h4 className="font-bold text-[#5F6F52]">Diferencial</h4>
                  <p className="text-sm">Ciência e Sabedoria Ancestral em União</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <ScrollVelocity className="text-orquideaLilas-200  text-shadow-lg/30 pt-5 z-10" texts={['#PazInterior #Meditação #SaúdeMental', '#TerapiaComplementar #SabedoriaAncestral']} />
      <img className="selector w-[1250px] h-auto absolute z-0 top-0 opacity-20 right-0" src="/imgs/mandala.png"/>
    </section>
  )
}

export default Hero;
