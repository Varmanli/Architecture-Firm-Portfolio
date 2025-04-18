// Services.tsx: Renders a grid of services with hover effects and animations
import {
  services,
  SERVICES_ARIA_LABELS,
  SERVICES_SECTION_CONFIG,
} from "../../../data/services";
import { Service } from "../../../types";

/**
 * Services component that displays a grid of service cards
 * @returns {JSX.Element} The rendered services section
 */
const Services: React.FC = () => {
  return (
    <section
      id={SERVICES_SECTION_CONFIG.id}
      className="bg-hero-dark py-24 px-6 md:px-20"
      role="region"
      aria-labelledby="services-title"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="services-title"
          className="text-3xl md:text-4xl font-semibold text-primary-gold mb-12"
          data-aos="fade-up"
        >
          {SERVICES_SECTION_CONFIG.title}
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.length > 0 ? (
            services.map((service: Service, index: number) => (
              <div
                key={index}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-easing="ease-in-out"
                role="article"
                aria-label={SERVICES_ARIA_LABELS.service(service.title)}
              >
                {/* Gradient Glow Effect on Hover */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500 bg-gradient-to-tr from-primary-gold/30 to-white/10 z-0"
                  aria-hidden="true"
                />

                {/* Service Card */}
                <div className="relative z-10 bg-black/30 p-8 rounded-xl shadow-xl backdrop-blur-md border border-white/10 hover:border-primary-gold transition-all duration-500">
                  {/* Icon with hover animation */}
                  <div
                    className="text-primary-gold mb-4 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300"
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No services available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
