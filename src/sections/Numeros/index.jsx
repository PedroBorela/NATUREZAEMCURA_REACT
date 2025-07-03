import {
    FaCalendarAlt,
    FaUserTie,
    FaBell,
    FaStar,
} from "react-icons/fa";
import CountUp from "../../blocks/TextAnimations/CountUp/CountUp";
import ScrollVelocity from "../../blocks/TextAnimations/ScrollVelocity/ScrollVelocity";


const Numeros = () => {
    return (
        <div className="bg-gradient-to-br from-orquideaLilas-200 via-azulArpoador-300 to-indigo-900 to-90% drop-shadow-xl  text-white py-20 mb-12">
            <div className="max-w-7xl mx-auto   grid grid-cols-1 md:grid-cols-4 gap-8 text-center px-4">

                {/* Item 1 */}
                <div>
                    <div className="flex justify-center mb-2">
                        <FaCalendarAlt className="w-12 h-12 rotate-y-hover" />
                    </div>
                    <p className="text-4xl font-bold"><CountUp to={7} duration={3} /></p>
                    <p className="text-2xl mt-1">Anos de yoga</p>
                </div>


                {/* Item 2 */}
                <div>
                    <div className="flex justify-center mb-2">
                        <FaUserTie className="w-12 h-12 rotate-y-hover" />
                    </div>
                    <p className="text-4xl font-bold"><CountUp to={3} duration={4} /></p>
                    <p className="text-2xl mt-1">Espaços de atendimento</p>
                </div>

                {/* Item 3 */}
                <div>
                    <div className="flex justify-center mb-2">
                        <FaBell className="w-12 h-12 rotate-y-hover" />
                    </div>
                    <p className="text-4xl font-bold">+<CountUp to={20} duration={3} /></p>
                    <p className="text-2xl mt-1">Experiências xamânicas</p>
                </div>

                {/* Item 4 */}
                <div>
                    <div className="flex justify-center mb-2">
                        <FaStar className="w-12 h-12 rotate-y-hover" />
                    </div>
                    <p className="text-4xl font-bold">+<CountUp to={1000} duration={3} /></p>
                    <p className="text-2xl mt-1">Pacientes</p>
                </div>

            </div>
            <ScrollVelocity className="text-orquideaLilas-200 relative  text-shadow-lg/30 pt-5 z-10" texts={['#PazInterior #Meditação #SaúdeMental', '#TerapiaComplementar #SabedoriaAncestral']} />
        </div>
    );
};

export default Numeros;
