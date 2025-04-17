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
declare module "swiper/css";
declare module "*.css";
