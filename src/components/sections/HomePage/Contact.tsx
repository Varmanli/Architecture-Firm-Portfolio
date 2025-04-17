import { contactInfo } from "../../../data/contactInfo";

interface ContactProps {
  title?: string;
  id?: string;
  className?: string;
}

export default function Contact({
  title = "Get In Touch",
  id = "contact",
  className = "",
}: ContactProps) {
  return (
    <section id={id} className={`py-24 px-6 md:px-20 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-semibold text-primary-gold mb-12 text-center"
          data-aos="fade-up"
        >
          {title}
        </h2>

        {/* Contact card */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden">
          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="p-8 md:p-10 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-white/10"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="p-4 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="p-4 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={6}
              className="p-4 rounded-lg bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-primary-gold resize-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-6 text-gray-300">
            <h3 className="text-2xl font-semibold text-white">
              Contact Information
            </h3>

            {contactInfo.map(({ icon: Icon, label }, index) => (
              <div key={index} className="flex items-start gap-4">
                <Icon className="text-primary-gold text-xl mt-1" />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
