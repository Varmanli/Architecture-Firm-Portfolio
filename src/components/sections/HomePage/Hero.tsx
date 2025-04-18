// Hero.tsx: Renders the hero section with a background image and call-to-action
import { HERO_ARIA_LABELS, HERO_CONTENT } from "../../../data/sections/hero";
import ButtonLink from "../../ui/ButtonLink";

/**
 * Hero component that displays a full-screen hero section with a background image
 * @returns {JSX.Element} The rendered hero section
 */
const Hero: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Background image */}
      <img
        loading="lazy"
        src={HERO_CONTENT.imageSrc}
        alt={HERO_CONTENT.imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
        onError={(e) => {
          e.currentTarget.src = "/images/fallback.webp"; // Fallback image
          console.warn(`Failed to load hero image: ${HERO_CONTENT.imageSrc}`);
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 h-full px-4 text-center text-white">
        <h1
          id="hero-title"
          className="text-4xl md:text-6xl font-serif font-semibold tracking-wide mb-4 text-primary-gold"
          data-aos="fade-up"
          data-aos-delay="100"
          aria-label={HERO_ARIA_LABELS.title}
        >
          {HERO_CONTENT.title}
        </h1>

        <p
          className="text-gray-300 text-lg md:text-xl max-w-xl mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {HERO_CONTENT.description}
        </p>

        <ButtonLink
          href={HERO_CONTENT.buttonHref}
          label={HERO_CONTENT.buttonLabel}
          delay={HERO_CONTENT.buttonDelay}
          aria-label={HERO_ARIA_LABELS.button}
        />
      </div>
    </section>
  );
};

export default Hero;
