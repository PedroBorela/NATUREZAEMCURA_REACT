import { FaGraduationCap } from "react-icons/fa";

const Bullet = ({
    corTitulo = "#5F6F52",
    corFundo = "#A9B388",
    icon = <FaGraduationCap />,
    titulo = "formação",
    texto = "psicologia clinica"
}) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className={`bg-[${corFundo}] bg-opacity-20 p-3 rounded-full mr-4`}>
                <span style={{ color: corTitulo }} className="text-lg">{icon}</span>
            </div>
            <div>
                <h4 className={`font-bold text-[${corTitulo}]`}>{titulo}</h4>
                <p className="text-sm">{texto}</p>
            </div>
        </div>
    )
}

export default Bullet;
