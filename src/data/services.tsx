import { FaCity, FaCubes, FaPencilRuler } from "react-icons/fa";

export const services = [
  {
    icon: <FaPencilRuler size={32} />,
    title: "Architectural Design",
    description: "Modern and functional design tailored to your needs.",
  },
  {
    icon: <FaCity size={32} />,
    title: "Urban Planning",
    description: "Sustainable planning for smart and efficient cities.",
  },
  {
    icon: <FaCubes size={32} />,
    title: "Interior Design",
    description: "Beautiful interiors that blend style with purpose.",
  },
];
// Constants for section configuration and content
export const SERVICES_SECTION_CONFIG = {
  id: "services",
  title: "Our Services",
};

// Constants for accessibility attributes
export const SERVICES_ARIA_LABELS = {
  section: "Our services overview",
  service: (title: string) => `Details for ${title} service`,
};
