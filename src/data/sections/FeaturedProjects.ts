// Constants for section configuration and content
export const FEATURED_SECTION_CONFIG = {
  id: "portfolio",
  maxProjects: 7,
  title: "Featured Projects",
  viewAllLabel: "View All Projects",
  viewAllHref: "/portfolio",
  viewAllDelay: 450,
};

// Constants for accessibility attributes
export const FEATURED_ARIA_LABELS = {
  section: "Featured projects portfolio",
  project: (title: string) => `View details for ${title}`,
  viewAll: "View all projects in portfolio",
};
