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

declare module "swiper/css";
declare module "*.css";
