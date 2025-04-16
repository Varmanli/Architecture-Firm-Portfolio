import { FaPencilRuler, FaCity, FaCubes } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaPencilRuler size={32} />,
      title: "Architectural Design",
      description: "Modern and functional design tailored to your needs.",
    },
    {
      icon: <FaCity size={32} />,
      title: "Urban Planning",
      description: "Sustainable planning for smart and efficient cities.",
    },
    {
      icon: <FaCubes size={32} />,
      title: "Interior Design",
      description: "Beautiful interiors that blend style with purpose.",
    },
  ];

  return (
    <section id="services" className="bg-hero-dark text-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl  md:text-4xl font-semibold text-primary-gold mb-12"
          data-aos="fade-up"
        >
          Our Services
        </h2>

        {/* گرید خدمات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-easing="ease-in-out"
            >
              {/* افکت گرادینت دور کارت */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500 bg-gradient-to-tr from-primary-gold/30 to-white/10 z-0" />

              {/* کارت اصلی */}
              <div className="relative z-10 bg-black/30 p-8 rounded-xl shadow-xl backdrop-blur-md border border-white/10 hover:border-primary-gold transition-all duration-500">
                {/* آیکون با افکت انیمیشنی */}
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
