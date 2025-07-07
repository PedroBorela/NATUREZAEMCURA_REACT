import React from 'react';

const Chamado = () => {
    return (
        <div className="relative bg-orquideaLilas-100 overflow-hidden">
            {/* Fundo com elementos naturais */}
            <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-orquideaLilas-200"></div>
                <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-orquideaLilas-200 to-transparent"></div>
                <svg
                    className="absolute bottom-0 left-0 transform translate-x-32"
                    width="404"
                    height="384"
                    fill="none"
                    viewBox="0 0 404 384"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="d1a40a66-2a7b-46a1-907d-6dfe7a5f3e6a"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" className="text-orquideaLilas-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#d1a40a66-2a7b-46a1-907d-6dfe7a5f3e6a)" />
                </svg>
            </div>

            <div className="relative pt-12 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl">
                                <span className="block">Encontre cura e</span>
                                <span className="block text-azulArpoador-300">renovação na natureza</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Reconecte-se com sua essência através de experiências transformadoras em meio à natureza. Descubra o poder curativo das florestas, montanhas e rios.
                            </p>
                            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <a
                                            href="#reserve"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-azulArpoador-300 hover:bg-azulArpoador-400 md:py-4 md:text-lg md:px-10 transition duration-300"
                                        >
                                            Reserve sua experiência
                                        </a>
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <a
                                            href="#saiba-mais"
                                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-azulArpoador-300 bg-orquideaLilas-100 hover:bg-orquideaLilas-200 md:py-4 md:text-lg md:px-10 transition duration-300"
                                        >
                                            Saiba mais
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                                <div className="relative block w-full bg-white overflow-hidden rounded-lg">
                                    <img
                                        className="w-full h-auto object-cover transform hover:scale-105 transition duration-500"
                                        src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
                                        alt="Pessoa meditando na natureza"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-orquideaLilas-500 to-transparent opacity-70"></div>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h3 className="text-xl font-semibold text-white">Retiro de Cura na Floresta</h3>
                                        <p className="mt-1 text-orquideaLilas-100">Próxima data: 15-17 de Outubro</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chamado;