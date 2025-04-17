import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function PortfolioPage() {
  return (
    <section className="py-24 px-6 md:px-20">
      <div className="absolute top-0 left-0 w-full h-140 bg-gradient-to-b from-white/10 via-white/0 to-transparent pointer-events-none z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-semibold text-primary-gold text-center mb-12"
          data-aos="fade-up"
        >
          All Projects
        </h2>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <Link
              to={`/portfolio/${project.slug}`}
              key={project.id}
              className="group block overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary-gold hover:shadow-xl hover:shadow-primary-gold/10 transition-all duration-500 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-auto object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                />

                {/* Subtle top gradient for elegance */}
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/30 via-black/10 to-transparent z-10 pointer-events-none" />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold font-serif text-white group-hover:text-primary-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                  {project.description.slice(0, 120)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
