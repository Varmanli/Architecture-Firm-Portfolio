import { Link } from "react-router-dom";
import { ButtonLinkProps } from "../../types";

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  label,
  delay = 400,
}) => {
  return (
    <Link
      to={href}
      data-aos="fade-up"
      data-aos-delay={delay}
      className="group inline-flex items-center gap-3 px-6 py-3 border border-white rounded-lg  hover:bg-white hover:text-black transition-all duration-300 ease-in-out btn-transition btn-hover-gold"
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
