// NotFound.tsx: Renders the 404 page with a message and back-to-home CTA
import ButtonLink from "../components/ui/ButtonLink";
import { NOT_FOUND_ARIA_LABELS, NOT_FOUND_CONTENT } from "../data/pages/notFound";

/**
 * NotFound component that displays a 404 error page
 * @returns {JSX.Element} The rendered 404 page
 */
const NotFound: React.FC = () => {
  return (
    <section
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      role="region"
      aria-labelledby="not-found-title"
    >
      {/* Gradient Light */}
      <div
        className="absolute top-0 left-0 w-full h-140 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl mx-auto space-y-6">
        <h1
          id="not-found-title"
          className="text-6xl font-bold text-primary-gold font-serif"
          aria-label={NOT_FOUND_ARIA_LABELS.title}
        >
          {NOT_FOUND_CONTENT.title}
        </h1>
        <p className="text-xl text-gray-300">{NOT_FOUND_CONTENT.message}</p>

        <ButtonLink
          href={NOT_FOUND_CONTENT.ctaHref}
          label={NOT_FOUND_CONTENT.ctaLabel}
          aria-label={NOT_FOUND_ARIA_LABELS.cta}
        />
      </div>
    </section>
  );
};

export default NotFound;
