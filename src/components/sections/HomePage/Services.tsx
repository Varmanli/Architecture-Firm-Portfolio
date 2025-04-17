import { services } from "../../../data/services";

export default function Services() {
  return (
    <section id="services" className="bg-hero-dark py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold text-primary-gold mb-12"
          data-aos="fade-up"
        >
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-easing="ease-in-out"
            >
              {/* Gradient Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500 bg-gradient-to-tr from-primary-gold/30 to-white/10 z-0" />

              {/* Service Card */}
              <div className="relative z-10 bg-black/30 p-8 rounded-xl shadow-xl backdrop-blur-md border border-white/10 hover:border-primary-gold transition-all duration-500">
                {/* Icon with hover animation */}
                <div className="text-primary-gold mb-4 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
