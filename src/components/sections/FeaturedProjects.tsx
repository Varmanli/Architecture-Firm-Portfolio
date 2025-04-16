import { projects } from "../../data/projects";
import { Project } from "../../types";
import ButtonLink from "./ButtonLink";

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
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: Project, index: number) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group cursor-pointer transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Gradient Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>

                {/* Title on top of the image */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-lg font-medium text-white group-hover:text-primary-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
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
