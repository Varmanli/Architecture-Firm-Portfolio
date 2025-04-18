// AboutPage.tsx: Renders the About page with hero, content, and call-to-action
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { ABOUT_PAGE_ARIA_LABELS, ABOUT_PAGE_CONTENT } from "../data/pages/AboutPage";

/**
 * AboutPage component that displays information about Archi Studio
 * @returns {JSX.Element} The rendered About page
 */
const AboutPage: React.FC = () => {
  return (
    <section
      className="relative bg-black text-white py-35 px-4 sm:px-6 md:px-20 overflow-hidden"
      role="region"
      aria-labelledby="about-title"
    >
      <div
        className="absolute top-0 left-0 w-full h-140 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <p className="text-primary-gold text-sm uppercase tracking-wider mb-2">
            {ABOUT_PAGE_CONTENT.subtitle}
          </p>
          <h1
            id="about-title"
            className="text-3xl md:text-5xl font-bold text-primary-gold font-serif mb-4"
            aria-label={ABOUT_PAGE_ARIA_LABELS.hero}
          >
            {ABOUT_PAGE_CONTENT.title}
          </h1>
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            {ABOUT_PAGE_CONTENT.description}
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
              src={ABOUT_PAGE_CONTENT.imageSrc}
              alt={ABOUT_PAGE_CONTENT.imageAlt}
              className="rounded-xl shadow-xl object-cover w-full h-[400px] group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = "/images/fallback.webp"; // Fallback image
                console.warn(
                  `Failed to load about image: ${ABOUT_PAGE_CONTENT.imageSrc}`
                );
              }}
            />
          </div>

          {/* Text (goes second on mobile) */}
          <div className="order-2 md:order-1" data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-serif">
              {ABOUT_PAGE_CONTENT.whoWeAreTitle}
            </h2>
            <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-6">
              {ABOUT_PAGE_CONTENT.whoWeAreDescription}
            </p>

            <ul className="space-y-4" role="list">
              {ABOUT_PAGE_CONTENT.features.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-300 text-base"
                >
                  <FaCheckCircle
                    className="text-primary-gold mt-1"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center" data-aos="fade-up">
          <p className="text-lg text-gray-400 mb-4">
            {ABOUT_PAGE_CONTENT.ctaText}
          </p>
          <Link
            to={ABOUT_PAGE_CONTENT.ctaHref}
            className="inline-block px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            aria-label={ABOUT_PAGE_ARIA_LABELS.cta}
          >
            {ABOUT_PAGE_CONTENT.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
