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

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1
          className="text-4xl md:text-6xl font-semibold tracking-wide mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          BUILDING FUTURE TRENDS
        </h1>

        <p
          className="text-lg md:text-xl max-w-xl mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We craft timeless architecture that balances innovation with elegance.
        </p>

        <a
          href="#projects"
          data-aos="fade-up"
          data-aos-delay="300"
          className="px-6 py-3 border rounded-lg border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
