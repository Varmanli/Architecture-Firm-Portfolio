import { Link } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

export default function Footer() {
  // Dynamic rendering for each nav item
  const renderNavItem = ({ label, href }: { label: string; href: string }) => {
    if (href.startsWith("#")) {
      return (
        <a
          key={href}
          href={href}
          className="hover:text-primary-gold transition-colors duration-300"
        >
          {label}
        </a>
      );
    }

    return (
      <Link
        key={href}
        to={href}
        className="hover:text-primary-gold transition-colors duration-300"
      >
        {label}
      </Link>
    );
  };

  return (
    <footer className=" relative text-gray-400 pt-16 px-6 md:px-20 border-t border-white/10">
      {/* Main footer section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
        {/* Brand / Logo */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white tracking-wide">
            ARCHI STUDIO
          </h3>
          <p className="mt-2 text-sm">Timeless Architecture & Design</p>
        </div>

        {/* Navigation menu */}
        <div className="flex flex-col items-center gap-3">
          {navLinks.map(renderNavItem)}
        </div>

        {/* Contact info */}
        <div className="flex flex-col items-center text-sm gap-2">
          <p className="text-white font-medium">Contact</p>
          <p>info@yourstudio.com</p>
          <p>+98 901 133 1951</p>
          <p>Shahrak-e Gharb, Tehran, Iran</p>
        </div>
      </div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-0 w-full h-160 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none z-10" />

      {/* Divider */}
      <div className="border-t border-white/10 my-8" />

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 pb-6">
        <p>© {new Date().getFullYear()} Archi Studio. All rights reserved.</p>
        <a href="https://varmanli.ir" className="mt-1">
          Designed & Developed by
          <span className="text-white font-medium"> Amirhosein Varmanli</span>
        </a>
      </div>
    </footer>
  );
}
