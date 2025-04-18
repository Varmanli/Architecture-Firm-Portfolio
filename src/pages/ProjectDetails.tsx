// ProjectDetails.tsx: Renders a project detail page with gallery and contact form
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Project } from "../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Contact from "../components/sections/HomePage/Contact";
import ButtonLink from "../components/ui/ButtonLink";
import {
  PROJECT_DETAILS_ARIA_LABELS,
  PROJECT_DETAILS_CONTENT,
  PROJECT_DETAILS_SWIPER_CONFIG,
} from "../data/pages/projectDetalis";
import { projects } from "../data/sections/projects";

/**
 * ProjectDetails component that displays a project's details with a gallery
 * @returns {JSX.Element} The rendered project details page or not found page
 */
const ProjectDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const project: Project | undefined = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section
        className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
        role="region"
        aria-labelledby="not-found-title"
      >
        {/* Gradient Light */}
        <div
          className="absolute top-0 left-0 w-full h-140 bg-gradient-to-b from-white/10 via-white/0 to-transparent pointer-events-none z-10"
          aria-hidden="true"
        />
        <div className="relative z-20 max-w-xl mx-auto space-y-6">
          <h1
            id="not-found-title"
            className="text-6xl font-bold text-primary-gold font-serif"
            aria-label={PROJECT_DETAILS_ARIA_LABELS.notFound}
          >
            {PROJECT_DETAILS_CONTENT.notFoundTitle}
          </h1>
          <p className="text-xl text-gray-300">
            {PROJECT_DETAILS_CONTENT.notFoundMessage}
          </p>
          <ButtonLink
            href={PROJECT_DETAILS_CONTENT.backToProjectsHref}
            label={PROJECT_DETAILS_CONTENT.backToProjectsLabel}
            aria-label={PROJECT_DETAILS_ARIA_LABELS.backToProjects}
          />
        </div>
      </section>
    );
  }

  return (
    <section
      className="bg-black text-white overflow-x-hidden py-24 px-6 md:px-20 min-h-screen relative"
      role="region"
      aria-labelledby="project-title"
    >
      {/* Gradient Light */}
      <div
        className="absolute top-0 left-0 w-full h-140 bg-gradient-to-b from-white/10 via-white/0 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-20 relative">
        {/* Gallery (goes first on mobile) */}
        <div
          data-aos="fade-left"
          className="order-1 md:order-2 w-full rounded-xl overflow-hidden bg-white/5 backdrop-blur-md p-4 border border-white/10 shadow-lg"
          role="region"
          aria-label={PROJECT_DETAILS_ARIA_LABELS.gallery(project.title)}
        >
          {project.gallery && project.gallery.length > 0 ? (
            <Swiper
              spaceBetween={PROJECT_DETAILS_SWIPER_CONFIG.spaceBetween}
              slidesPerView={PROJECT_DETAILS_SWIPER_CONFIG.slidesPerView}
              loop={PROJECT_DETAILS_SWIPER_CONFIG.loop}
              autoplay={PROJECT_DETAILS_SWIPER_CONFIG.autoplay}
              modules={[Autoplay]}
              aria-label="Project image carousel"
            >
              {project.gallery.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    loading="lazy"
                    src={image}
                    alt={PROJECT_DETAILS_ARIA_LABELS.image(
                      project.title,
                      index
                    )}
                    onClick={() => {
                      setOpen(true);
                      setCurrentIndex(index);
                    }}
                    className="w-full h-[400px] object-cover rounded-md cursor-zoom-in transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/images/fallback.webp"; // Fallback image
                      console.warn(`Failed to load gallery image: ${image}`);
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-gray-400 text-center">No images available</p>
          )}
        </div>

        {/* Text (goes second on mobile) */}
        <div data-aos="fade-right" className="order-2 md:order-1">
          <h1
            id="project-title"
            className="text-3xl md:text-4xl font-bold text-primary-gold mb-6 font-serif"
            aria-label={PROJECT_DETAILS_CONTENT.title(project.title)}
          >
            {project.title}
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
            {project.description || "No description available"}
          </p>
          <ButtonLink
            href={PROJECT_DETAILS_CONTENT.backToProjectsHref}
            label={PROJECT_DETAILS_CONTENT.backToProjectsLabel}
            aria-label={PROJECT_DETAILS_ARIA_LABELS.backToProjects}
          />
        </div>
      </div>

      {/* Lightbox Fullscreen */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={
          project.gallery && project.gallery.length > 0
            ? project.gallery.map((img) => ({ src: img }))
            : []
        }
        plugins={[Zoom]}
        aria-label="Fullscreen project image gallery"
      />

      {/* Contact Section */}
      <Contact
        title={PROJECT_DETAILS_CONTENT.contactTitle}
        className={PROJECT_DETAILS_CONTENT.contactClassName}
      />
    </section>
  );
};

export default ProjectDetails;
