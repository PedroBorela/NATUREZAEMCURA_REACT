const Footer = () => {
    return (
        <footer className=" bg-gradient-to-br from-green-500 via-green-700 to-green-500 to-90% text-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4"><span className="text-verdeEsmeralda-500">Natureza</span><span className="text-orquideaLilas">emCura</span></h3>
                        <p className="mb-4">Integrando psicologia moderna e sabedoria ancestral para promover cura profunda e
                            transformação pessoal.</p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/naturezaemcura/"
                                className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/naturezaemcura"
                                className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition duration-300">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.youtube.com/@Natureza_em_Cura"
                                className="bg-white bg-opacity-10 p-3 rounded-full hover:bg-opacity-20 transition duration-300">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-orquideaLilas-200 transition duration-300">Início</a></li>
                            <li><a href="#about" className="hover:text-orquideaLilas-200 transition duration-300">Sobre</a></li>
                            <li><a href="#services" className="hover:text-orquideaLilas-200 transition duration-300">Serviços</a></li>
                            <li><a href="#testimonials" className="hover:text-orquideaLilas-200 transition duration-300">Depoimentos</a>
                            </li>
                            <li><a href="#contact" className="hover:text-orquideaLilas-200 transition duration-300">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Contato</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <i className="fas fa-map-marker-alt mt-1 mr-2 text-orquideaLilas-200"></i>
                                <span>Rua da Conceição, 170 - MG</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-phone-alt mt-1 mr-2 text-orquideaLilas-200"></i>
                                <span>(33) 98438-5658</span>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-envelope mt-1 mr-2 text-orquideaLilas-200"></i>
                                <span>contato@curaintegral.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#A9B388] border-opacity-30 mt-12 pt-8 text-center text-sm">
                    <p>&copy; 2025 Natureza em Cura. Todos os direitos reservados.</p>
                    <p className="mt-2">Desenvolvido por Pedro Borela</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;