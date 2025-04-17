import Contact from "../components/sections/HomePage/Contact";
import ButtonLink from "../components/ui/ButtonLink";

export default function ContactPage() {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 sm:px-6 md:px-20 min-h-screen overflow-hidden">
      {/* Gradient Light */}
      <div className="absolute top-0 left-0 w-full h-140 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-24 ">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto px-5" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-gold font-serif mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            We'd love to hear from you. Whether you have a question, project, or
            idea — let's talk.
          </p>
        </div>

        {/* Contact Form */}
        <Contact id="" title="Send us a message" />

        {/* CTA */}
        <div className="text-center mt-12" data-aos="fade-up">
          <ButtonLink href="/" label="← Back to Home" />

          <p className="text-gray-400 text-sm mt-4">
            Not ready yet? Go back and explore more of our work.
          </p>
        </div>
      </div>
    </section>
  );
}
