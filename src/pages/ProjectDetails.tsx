import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Project } from "../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Contact from "../components/sections/HomePage/Contact";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project: Project | undefined = projects.find((p) => p.slug === slug);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project) {
    return (
      <div className="text-white text-center py-20">Project not found.</div>
    );
  }

  return (
    <section className="bg-black text-white overflow-x-hidden py-24 px-6 md:px-20 min-h-screen relative">
      <div className="absolute top-0 left-0 w-full h-140 bg-gradient-to-b from-white/10 via-white/0 to-transparent pointer-events-none z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-20 relative ">
        {/* Text */}
        <div data-aos="fade-right">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-gold mb-6 font-serif">
            {project.title}
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
            {project.description}
          </p>
          <Link
            to="/portfolio"
            className="inline-block px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Gallery */}
        <div
          data-aos="fade-left"
          className="w-full rounded-xl overflow-hidden bg-white/5 backdrop-blur-md p-4 border border-white/10 shadow-lg"
        >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {project.gallery.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${project.title} ${index + 1}`}
                  onClick={() => {
                    setOpen(true);
                    setCurrentIndex(index);
                  }}
                  className="w-full h-[400px] object-cover rounded-md cursor-zoom-in transition-all duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Lightbox Fullscreen */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={project.gallery.map((img) => ({ src: img }))}
        plugins={[Zoom]}
      />
      <Contact title="Let's Work Together" />
    </section>
  );
}
