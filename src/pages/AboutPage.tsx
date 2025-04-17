import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutPage() {
  return (
    <section className="relative bg-black text-white py-35 px-4 sm:px-6 md:px-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-140 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <p className="text-primary-gold text-sm uppercase tracking-wider mb-2">
            Welcome to Archi Studio
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-primary-gold font-serif mb-4">
            Designing Future Spaces
          </h1>
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            At Archi Studio, we don't just build structures — we shape
            experiences. With a passion for timeless elegance and functional
            innovation, we craft spaces that inspire.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Image (goes first on mobile) */}
          <div
            className="order-1 md:order-2 relative group"
            data-aos="fade-left"
          >
            <img
              loading="lazy"
              src="/images/About.webp"
              alt="Archi Studio Team"
              className="rounded-xl shadow-xl object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text (goes second on mobile) */}
          <div className="order-2 md:order-1" data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-serif">
              Who We Are
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">
              Archi Studio is an architecture and interior design firm based in
              Tehran, dedicated to creating spaces that are not only visually
              stunning but also deeply meaningful. With over 10 years of
              experience, we’ve delivered award-winning projects across
              residential, commercial, and cultural sectors.
            </p>

            <ul className="space-y-4">
              {[
                "10+ years of experience",
                "Customized solutions for every client",
                "Focus on sustainability and innovation",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-300 text-base"
                >
                  <FaCheckCircle className="text-primary-gold mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center" data-aos="fade-up">
          <p className="text-lg text-gray-400 mb-4">
            Let’s bring your vision to life — we’re just one message away.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
