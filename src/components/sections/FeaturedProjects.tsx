import { projects } from "../../data/projects";

import ButtonLink from "../ui/ButtonLink";

function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="bg-hero-dark text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-semibold mb-10 text-center text-primary-gold font-serif"
          data-aos="fade-up"
        >
          Featured Projects
        </h2>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-xl shadow-md break-inside-avoid"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
              />
              {/* Title on top of the image */}
              <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-4 py-3">
                <h3 className="text-lg font-medium text-white group-hover:text-primary-gold transition-colors duration-300 drop-shadow-sm">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className="mt-14 flex justify-center"
          data-aos-delay={projects.length * 150}
        >
          <ButtonLink href="/portfolio" label="View All Projects" delay={450} />
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
