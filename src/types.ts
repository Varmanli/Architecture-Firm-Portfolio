export interface Project {
  id: number;
  title: string;
  image: string;
  slug?: string;
}
export interface ButtonLinkProps {
  href: string;
  label: string;
  delay?: number;
}