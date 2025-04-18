// FeaturedProjects.tsx: Renders a grid of featured projects with a view all button

import ButtonLink from "../../ui/ButtonLink";
import { Project } from "../../../types"; // Import Project type from types.ts
import {
  FEATURED_ARIA_LABELS,
  FEATURED_SECTION_CONFIG,
} from "../../../data/sections/FeaturedProjects";
import { projects } from "../../../data/sections/projects";

/**
 * FeaturedProjects component that displays a grid of featured projects
 * @returns {JSX.Element} The rendered featured projects section
 */
const FeaturedProjects: React.FC = () => {
  // Limit to first 7 projects
  const featured: Project[] = projects.slice(
    0,
    FEATURED_SECTION_CONFIG.maxProjects
  );

  return (
    <section
      id={FEATURED_SECTION_CONFIG.id}
      className="bg-hero-dark py-20 px-6 md:px-20"
      role="region"
      aria-labelledby="portfolio-title"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          id="portfolio-title"
          className="text-3xl md:text-4xl font-semibold mb-10 text-center text-primary-gold font-serif"
          data-aos="fade-up"
        >
          {FEATURED_SECTION_CONFIG.title}
        </h2>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {featured.length > 0 ? (
            featured.map((project: Project, index: number) => (
              <a
                key={project.id}
                href={`/project/${project.id}`}
                className="relative block overflow-hidden rounded-xl shadow-md break-inside-avoid group"
                data-aos="fade-up"
                data-aos-delay={index * 70}
                aria-label={FEATURED_ARIA_LABELS.project(project.title)}
              >
                <img
                  loading="lazy"
                  src={project.thumbnail}
                  alt={`Thumbnail for ${project.title}`}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    e.currentTarget.src = "/images/fallback.webp"; // Fallback image
                    console.warn(
                      `Failed to load thumbnail: ${project.thumbnail}`
                    );
                  }}
                />
                {/* Title on top of the image */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 py-3">
                  <h3 className="text-lg font-medium text-white group-hover:text-primary-gold transition-colors duration-300 drop-shadow-sm">
                    {project.title}
                  </h3>
                </div>
              </a>
            ))
          ) : (
            <p className="text-gray-400 text-center">
              No featured projects available
            </p>
          )}
        </div>

        {/* View All Button */}
        <div
          className="mt-14 flex justify-center"
          data-aos-delay={projects.length * 150}
        >
          <ButtonLink
            href={FEATURED_SECTION_CONFIG.viewAllHref}
            label={FEATURED_SECTION_CONFIG.viewAllLabel}
            delay={FEATURED_SECTION_CONFIG.viewAllDelay}
            aria-label={FEATURED_ARIA_LABELS.viewAll}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
