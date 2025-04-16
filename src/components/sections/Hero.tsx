import ButtonLink from "./ButtonLink";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background image */}
      <img
        src="./images/image15.webp"
        alt="Architecture background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 h-full px-4 text-center text-white">
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

        <ButtonLink href="/portfolio" label="View Projects" delay={450} />
      </div>
    </section>
  );
}
