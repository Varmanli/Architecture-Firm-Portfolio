// ClientsSlider.tsx: Renders a responsive carousel of client logos
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  CLIENT_ARIA_LABELS,
  CLIENT_SWIPER_CONFIG,
  clients,
} from "../../../data/sections/clients";

/**
 * ClientsSlider component that displays a carousel of client logos
 * @returns {JSX.Element} The rendered carousel section
 */
const ClientsSlider: React.FC = () => {
  return (
    <section
      className="py-20 px-6 md:px-20"
      role="region"
      aria-label={CLIENT_ARIA_LABELS.carousel}
    >
      <div className="max-w-5xl mx-auto text-center">
        <Swiper
          {...CLIENT_SWIPER_CONFIG}
          modules={[Autoplay]}
          role="group"
          aria-label={CLIENT_ARIA_LABELS.carousel}
        >
          {/* Client logos carousel */}
          {clients.length > 0 ? (
            clients.map((logo: string, index: number) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <img
                    loading="lazy"
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="w-28 h-auto opacity-100 transition duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/images/fallback.webp"; // Fallback image
                      console.warn(`Failed to load client logo: ${logo}`);
                    }}
                  />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <div className="text-gray-400">No client logos available</div>
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSlider;
