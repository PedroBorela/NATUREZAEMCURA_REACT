const Bullet = ({
    corTitulo = "#5F6F52",
    corFundo = "#A9B388",
    icon = "fa-graduation-cap",
    titulo = "formação",
    texto = "psicologia clinica" }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
            <div className={`bg-[${corFundo}] bg-opacity-20 p-3 rounded-full mr-4`}>
                <i className={`fas ${icon} text-[${corTitulo}]`}></i>
            </div>
            <div>
                <h4 className={`font-bold text-[${corTitulo}]`}>{titulo}</h4>
                <p className="text-sm">{texto}</p>
            </div>
        </div>
    )
}

export default Bullet;