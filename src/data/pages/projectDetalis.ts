// Constants for section content and configuration
export const PROJECT_DETAILS_CONTENT = {
  title: (projectTitle: string) => `${projectTitle} Details`,
  notFoundTitle: "Project Not Found",
  notFoundMessage: "Oops! The project you’re looking for doesn’t exist.",
  backToProjectsLabel: "← Back to Projects",
  backToProjectsHref: "/portfolio",
  contactTitle: "Let's Work Together",
  contactClassName: "py-27",
  galleryHeight: "400px",
};

// Constants for Swiper configuration
export const PROJECT_DETAILS_SWIPER_CONFIG = {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
};

// Constants for accessibility attributes
export const PROJECT_DETAILS_ARIA_LABELS = {
  section: "Project details page",
  gallery: (projectTitle: string) => `${projectTitle} image gallery`,
  image: (projectTitle: string, index: number) =>
    `${projectTitle} image ${index + 1}`,
  backToProjects: "Return to project portfolio",
  notFound: "Project not found error",
};
