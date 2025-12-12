const LoadingScreen = () => (
    <div className="fixed inset-0 bg-verdeEsmeralda-200 backdrop-blur-sm flex flex-col justify-center items-center z-50">
        <div className="flex space-x-2">
            <div className="w-4 h-4 bg-orquideaLilas-500 rounded-full animate-pulse" style={{ animationDelay: '0s', animationDuration: '1.5s' }}></div>
            <div className="w-4 h-4 bg-orquideaLilas-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s', animationDuration: '1.5s' }}></div>
            <div className="w-4 h-4 bg-orquideaLilas-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s', animationDuration: '1.5s' }}></div>
        </div>
        <p className="mt-6 text-lg text-orquideaLilas-700 tracking-wider font-light">
            Despertando a energia...
        </p>
    </div>
);

export default LoadingScreen;
