import {
    FaStar,
} from "react-icons/fa";
import CountUp from "../../blocks/TextAnimations/CountUp/CountUp";
import ScrollVelocity from "../../blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import { GiDiploma, GiMeditation } from "react-icons/gi";
import { FaHandsPraying } from "react-icons/fa6";
import { PiFlowerLotus } from "react-icons/pi";
import { IoIosPeople } from "react-icons/io";
import { MdEmojiPeople } from "react-icons/md";
import { SiReasonstudios } from "react-icons/si";

const Numeros = () => {
    return (
        <div className="bg-[url('/imgs/fundodesfoc.jpg')] drop-shadow-xl text-white py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 text-center px-4">
                {/* Item 1 */}
                <div className="p-4">
                    <div className="flex justify-center mb-2">
                        <GiMeditation className="w-12 h-12 rotate-y-hover" />
                    </div>
                    <p className="text-4xl font-bold"><CountUp to={7} duration={1} /></p>
                    <p className="text-xl sm:text-lg md:text-xl mt-1">Anos Professor de Yoga</p>
                </div>

                {/* Item 2 */}
                <div className="p-4">
                    <div className="flex justify-center mb-2">
                        <FaStar className="w-12 h-12 rotate-y-hover" />
                    </div>
                    <p className="text-4xl font-bold">+<CountUp to={2500} duration={2} /></p>
                    <p className="text-xl sm:text-lg md:text-xl mt-1">Alunos Atendidos</p>
                </div>

                {/* Item 3 */}
                <div className="p-4">
                    <div className="flex justify-center mb-2">
                        <FaHandsPraying className="w-12 h-12 rotate-y-hover" />
                    </div>
                    <p className="text-4xl font-bold"><CountUp to={8} duration={3} /></p>
                    <p className="text-xl sm:text-lg md:text-xl mt-1">Anos Terapeuta Reiki</p>
                </div>

                {/* Item 4 */}
                <div className="p-4">
                    <div className="flex justify-center mb-2">
                        <PiFlowerLotus className="w-12 h-12 rotate-y-hover" />
                    </div>
                    <p className="text-4xl font-bold"><CountUp to={5} duration={4} /></p>
                    <p className="text-xl sm:text-lg md:text-xl mt-1">Anos de Cerimônias Espirituais</p>
                </div>

                {/* Item 5 */}
                <div className="p-4">
                    <div className="flex justify-center mb-2">
                        <IoIosPeople className="w-12 h-12 rotate-y-hover" />
                    </div>
                    <p className="text-4xl font-bold">+<CountUp to={25} duration={5} /></p>
                    <p className="text-xl sm:text-lg md:text-xl mt-1">Encontros realizados</p>
                </div>

                {/* Item 6 */}
                <div className="p-4">
                    <div className="flex justify-center mb-2">
                        <MdEmojiPeople className="w-12 h-12 rotate-y-hover" />
                    </div>
                    <p className="text-4xl font-bold">+<CountUp to={350} duration={6} /></p>
                    <p className="text-xl sm:text-lg md:text-xl mt-1">Participantes</p>
                </div>

                {/* Item 7 */}
                <div className="p-4">
                    <div className="flex justify-center mb-2">
                        <GiDiploma className="w-12 h-12 rotate-y-hover" />
                    </div>
                    <p className="text-4xl font-bold"><CountUp to={5} duration={7} /></p>
                    <p className="text-xl sm:text-lg md:text-xl mt-1">Anos Mestre Reiki</p>
                </div>

                {/* Item 8 */}
                <div className="p-4">
                    <div className="flex justify-center mb-2">
                        <SiReasonstudios className="w-12 h-12 rotate-y-hover" />
                    </div>
                    <p className="text-4xl font-bold"><CountUp to={5} duration={8} /></p>
                    <p className="text-xl sm:text-lg md:text-xl mt-1">Anos com Estúdio Próprio</p>
                </div>
            </div>

            <ScrollVelocity 
                className="text-orquideaLilas-200 relative text-shadow-lg/30 pt-5 z-10" 
                texts={['#PazInterior #Meditação #SaúdeMental', '#TerapiaComplementar #SabedoriaAncestral']} 
            />
        </div>
    );
};

export default Numeros;