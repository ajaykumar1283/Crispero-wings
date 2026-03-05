import heroBg from "@/assets/hero1-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroBg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-[0.15em] leading-tight mb-6">
          Crispero Wings & Things
        </h1>

        <p className="font-heading font-bold text-primary text-xl md:text-2xl tracking-wider uppercase mb-4">
          Bold. Flavorful. Unforgettable.
        </p>

        <p className="text-gray-200 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Premium Wings, Seafood & Signature Bowls in Millbrook, Alabama.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#menu" className="btn-primary-solid">
            View Menu
          </a>

          <a href="tel:3349124151" className="btn-primary-outline">
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
