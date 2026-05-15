export const BackgroundHero = () => {
  return (
    <div className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/imgs/video_fundo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};
