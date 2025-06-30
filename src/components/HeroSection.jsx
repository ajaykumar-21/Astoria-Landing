const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen text-white relative"
      style={{
        backgroundImage: `url('/assets/Astoria-Royals-Landing-Page-Desktop.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Royal living reimagined
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Luxurious 3 & 4 BHK homes in Ravet. Nearing Possession.
        </p>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition">
          Schedule a Site Visit
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
