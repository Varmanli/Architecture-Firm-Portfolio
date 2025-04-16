import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-semibold text-primary-gold mb-12 text-center"
          data-aos="fade-up"
        >
          Get In Touch
        </h2>

        {/* کارت کلی شامل فرم و اطلاعات */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden">
          {/* فرم تماس */}
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

          {/* اطلاعات تماس */}
          <div className="p-8 md:p-10 flex flex-col justify-center gap-6 text-gray-300">
            <h3 className="text-2xl font-semibold text-white">
              Contact Information
            </h3>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-primary-gold text-xl mt-1" />
              <p>Shahrak-e Gharb, Tehran, Iran</p>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-primary-gold text-xl mt-1" />
              <p>+98 901 133 1951</p>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-primary-gold text-xl mt-1" />
              <p>info@yourstudio.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
