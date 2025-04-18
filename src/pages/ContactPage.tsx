// ContactPage.tsx: Renders the Contact page with a form and call-to-action
import Contact from "../components/sections/HomePage/Contact";
import ButtonLink from "../components/ui/ButtonLink";
import {
  CONTACT_PAGE_ARIA_LABELS,
  CONTACT_PAGE_CONTENT,
} from "../data/pages/contactPage";

/**
 * ContactPage component that displays a contact form and back-to-home CTA
 * @returns {JSX.Element} The rendered Contact page
 */
const ContactPage: React.FC = () => {
  return (
    <section
      className="relative bg-black text-white py-24 md:py-32 sm:px-6 md:px-20 min-h-screen overflow-hidden"
      role="region"
      aria-labelledby="contact-page-title"
    >
      {/* Gradient Light */}
      <div
        className="absolute top-0 left-0 w-full h-140 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto space-y-24">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto px-5" data-aos="fade-up">
          <h1
            id="contact-page-title"
            className="text-4xl md:text-5xl font-bold text-primary-gold font-serif mb-4"
            aria-label={CONTACT_PAGE_ARIA_LABELS.title}
          >
            {CONTACT_PAGE_CONTENT.title}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            {CONTACT_PAGE_CONTENT.description}
          </p>
        </div>

        {/* Contact Form */}
        <Contact
          id={CONTACT_PAGE_CONTENT.contactId}
          title={CONTACT_PAGE_CONTENT.contactTitle}
        />

        {/* CTA */}
        <div className="text-center mt-12" data-aos="fade-up">
          <ButtonLink
            href={CONTACT_PAGE_CONTENT.ctaHref}
            label={CONTACT_PAGE_CONTENT.ctaLabel}
            aria-label={CONTACT_PAGE_ARIA_LABELS.cta}
          />
          <p className="text-gray-400 text-sm mt-4">
            {CONTACT_PAGE_CONTENT.ctaDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
