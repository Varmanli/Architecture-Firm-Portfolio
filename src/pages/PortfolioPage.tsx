// PortfolioPage.tsx: Renders the portfolio page with a masonry grid of projects
import { Link } from "react-router-dom";
import { Project } from "../types"; // Assuming Project type is defined in types.ts
import {
  PORTFOLIO_PAGE_ARIA_LABELS,
  PORTFOLIO_PAGE_CONTENT,
} from "../data/pages/portfolioPage";
import { projects } from "../data/sections/projects";

/**
 * PortfolioPage component that displays all projects in a masonry grid
 * @returns {JSX.Element} The rendered portfolio page
 */
const PortfolioPage: React.FC = () => {
  return (
    <section
      className="py-24 px-6 md:px-20"
      role="region"
      aria-labelledby="portfolio-title"
    >
      {/* Gradient Light */}
      <div
        className="absolute top-0 left-0 w-full h-140 bg-gradient-to-b from-white/10 via-white/0 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          id="portfolio-title"
          className="text-3xl md:text-4xl font-semibold text-primary-gold text-center mb-12"
          data-aos="fade-up"
        >
          {PORTFOLIO_PAGE_CONTENT.title}
        </h2>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.length > 0 ? (
            projects.map((project: Project, index: number) => (
              <Link
                to={`/portfolio/${project.slug || project.id}`}
                key={project.id}
                className="group block overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary-gold hover:shadow-xl hover:shadow-primary-gold/10 transition-all duration-500 ease-in-out"
                data-aos="fade-up"
                data-aos-delay={index * 70}
                aria-label={PORTFOLIO_PAGE_ARIA_LABELS.project(project.title)}
              >
                <div className="relative overflow-hidden">
                  <img
                    loading="lazy"
                    src={project.thumbnail}
                    alt={`Thumbnail for ${project.title}`}
                    className="w-full h-auto object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/images/fallback.webp"; // Fallback image
                      console.warn(
                        `Failed to load thumbnail: ${project.thumbnail}`
                      );
                    }}
                  />

                  {/* Subtle top gradient for elegance */}
                  <div
                    className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/30 via-black/10 to-transparent z-10 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold font-serif text-primary-gold group-hover:text-primary-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    {project.description
                      ? project.description.slice(
                          0,
                          PORTFOLIO_PAGE_CONTENT.descriptionLength
                        ) + "..."
                      : "No description available"}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-400 text-center">No projects available</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
