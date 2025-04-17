import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { clients } from "../../../data/clients";
import { Autoplay } from "swiper/modules";

export default function ClientsSlider() {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <Swiper
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          modules={[Autoplay]}
          loop={true}
        >
          {/* Client logos carousel */}
          {clients.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`client-${index}`}
                  className="w-28 h-auto opacity-100 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
