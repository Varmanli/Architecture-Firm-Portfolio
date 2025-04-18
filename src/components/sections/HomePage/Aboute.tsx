// About.tsx: Renders the "About Us" section with image and text content
import { ABOUT_CONTENT, ARIA_LABELS } from "../../../data/sections/About";
import ButtonLink from "../../ui/ButtonLink";

/**
 * About component that displays information about the studio with an image and call-to-action
 * @returns {JSX.Element} The rendered About section
 */
const About: React.FC = () => {
  return (
    <section
      id={ABOUT_CONTENT.sectionId}
      className="bg-hero-dark py-20 px-6 md:px-20 overflow-hidden"
      role="region"
      aria-labelledby="about-title"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <img
            loading="lazy"
            src={ABOUT_CONTENT.imageSrc}
            alt={ABOUT_CONTENT.imageAlt}
            className="rounded-lg object-cover w-full h-auto shadow-lg hover:scale-smooth"
            onError={(e) => {
              e.currentTarget.src = "/images/fallback.webp"; // Fallback image
              console.warn("Failed to load about image, using fallback");
            }}
          />
        </div>

        {/* Right Side - Text Content */}
        <div
          className="w-full md:w-1/2 text-center md:text-left"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <p className="text-sm text-gray-400 tracking-wider mb-4">
            {ABOUT_CONTENT.subtitle}
          </p>
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-semibold mb-5 text-primary-gold font-serif"
          >
            {ABOUT_CONTENT.title}
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            {ABOUT_CONTENT.description}
          </p>
          <ButtonLink
            label={ABOUT_CONTENT.buttonLabel}
            href={ABOUT_CONTENT.buttonHref}
            aria-label={ARIA_LABELS.button}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
