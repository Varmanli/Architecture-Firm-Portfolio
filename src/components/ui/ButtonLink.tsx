import { ButtonLinkProps } from "../../types";

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, label, delay = 0 }) => {
  return (
    <a
      href={href}
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group inline-flex items-center gap-3 px-6 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out btn-transition btn-hover-gold"
    >
      {label}
      <span className="transform transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
};

export default ButtonLink;
