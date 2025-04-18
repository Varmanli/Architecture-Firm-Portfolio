export const clients = [
  "/images/clients/client-1.svg",
  "/images/clients/client-2.svg",
  "/images/clients/client-3.svg",
  "/images/clients/client-4.svg",
  "/images/clients/client-5.svg",
  "/images/clients/client-6.svg",
];

// Constants for Swiper configuration
export const CLIENT_SWIPER_CONFIG = {
  spaceBetween: 40,
  slidesPerView: 2,
  breakpoints: {
    640: { slidesPerView: 3 },
    1024: { slidesPerView: 5 },
  },
  autoplay: { delay: 1000, disableOnInteraction: false },
  loop: true,
};

// Constants for accessibility attributes
export const CLIENT_ARIA_LABELS = {
  carousel: "Carousel of client logos",
};
