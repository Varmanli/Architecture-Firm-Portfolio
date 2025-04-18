export interface Project {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  gallery: string[];
}

export interface ButtonLinkProps {
  href: string;
  label: string;
  delay?: number;
}

export interface ContactProps {
  title?: string;
  id?: string;
  className?: string;
}

// Define interface for navigation link
export interface NavLink {
  label: string;
  href: string;
}

// Define interface for service data
export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode; // For React icons or JSX elements
}

declare module "swiper/css";
declare module "*.css";
