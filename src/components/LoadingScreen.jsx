const LoadingScreen = () => (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-surface">
        <div className="flex space-x-2">
            <div className="h-3.5 w-3.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0s', animationDuration: '1.4s' }}></div>
            <div className="h-3.5 w-3.5 rounded-full bg-primary-container animate-pulse" style={{ animationDelay: '0.2s', animationDuration: '1.4s' }}></div>
            <div className="h-3.5 w-3.5 rounded-full bg-secondary-container animate-pulse" style={{ animationDelay: '0.4s', animationDuration: '1.4s' }}></div>
        </div>
        <p className="mt-6 font-display text-lg tracking-wide text-ink-soft">
            Preparando um espaço de calma...
        </p>
    </div>
);

export default LoadingScreen;
