import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ClientsSlider() {
  const logos = [
    "/images/clients/client-1.svg",
    "/images/clients/client-2.svg",
    "/images/clients/client-3.svg",
    "/images/clients/client-4.svg",
    "/images/clients/client-5.svg",
    "/images/clients/client-6.svg",
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <Swiper
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 1500 }}
          loop={true}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <img
                  src={logo}
                  alt={`client-${index}`}
                  className="w-28 h-auto opacity-100  transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
