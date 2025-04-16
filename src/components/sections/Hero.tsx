import heroImage from "../../assets/images/image15.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background image */}
      <img
        src={heroImage}
        alt="Architecture background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1
          className="text-4xl md:text-6xl font-serif font-semibold tracking-wide mb-4 text-primary-gold"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          BUILDING FUTURE TRENDS
        </h1>

        <p
          className="text-gray-300 text-lg md:text-xl max-w-xl mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We craft timeless architecture that balances innovation with elegance.
        </p>

        <a
          href="#projects"
          data-aos="fade-up"
          data-aos-delay="300"
          className="group inline-flex items-center gap-3 px-6 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out btn-transition btn-hover-gold"
        >
          View Projects
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
