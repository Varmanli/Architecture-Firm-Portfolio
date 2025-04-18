// Footer.tsx: Renders the footer with navigation, contact info, and copyright
import { Link } from "react-router-dom";
import { navLinks } from "../../data/sections/navLinks";
import { NavLink } from "../../types";
import { JSX } from "react";
import { FOOTER_ARIA_LABELS, FOOTER_CONTENT } from "../../data/sections/Footer";

/**
 * Footer component that displays brand info, navigation links, contact details, and copyright
 * @returns {JSX.Element} The rendered footer component
 */
const Footer: React.FC = () => {
  /**
   * Renders a single navigation item as a Link or anchor tag
   * @param {NavLink} props - Navigation item properties
   * @returns {JSX.Element} The rendered link
   */
  const renderNavItem = ({ label, href }: NavLink): JSX.Element => {
    if (href.startsWith("#")) {
      return (
        <a
          key={href}
          href={href}
          className="hover:text-primary-gold transition-colors duration-300"
          aria-label={FOOTER_ARIA_LABELS.navLink(label)}
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
        aria-label={FOOTER_ARIA_LABELS.navLink(label)}
        aria-current={window.location.pathname === href ? "page" : undefined}
      >
        {label}
      </Link>
    );
  };

  return (
    <footer
      className="relative text-gray-400 pt-16 px-6 md:px-20 border-t border-white/10"
      role="contentinfo"
    >
      {/* Main footer section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
        {/* Brand / Logo */}
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold text-white tracking-wide">
            {FOOTER_CONTENT.brand}
          </h3>
          <p className="mt-2 text-sm">{FOOTER_CONTENT.tagline}</p>
        </div>

        {/* Navigation menu */}
        <nav
          className="flex flex-col items-center gap-3"
          aria-label="Footer navigation"
        >
          {navLinks.length > 0 ? (
            navLinks.map(renderNavItem)
          ) : (
            <span>No navigation links available</span>
          )}
        </nav>

        {/* Contact info */}
        <address
          className="flex flex-col items-center text-sm gap-2 not-italic"
          aria-label={FOOTER_ARIA_LABELS.contact}
        >
          <p className="text-white font-medium">Contact</p>
          <p>{FOOTER_CONTENT.email}</p>
          <p>{FOOTER_CONTENT.phone}</p>
          <p>{FOOTER_CONTENT.address}</p>
        </address>
      </div>

      {/* Bottom gradient glow */}
      <div
        className="absolute bottom-0 left-0 w-full h-160 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Divider */}
      <div className="border-t border-white/10 my-8" />

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 pb-6">
        <p>
          © {new Date().getFullYear()} {FOOTER_CONTENT.brand}. All rights
          reserved.
        </p>
        <a
          href={FOOTER_CONTENT.developerUrl}
          className="mt-1 inline-block"
          aria-label={FOOTER_ARIA_LABELS.developer}
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed & Developed by
          <span className="text-white font-medium">
            {FOOTER_CONTENT.developerName}
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
