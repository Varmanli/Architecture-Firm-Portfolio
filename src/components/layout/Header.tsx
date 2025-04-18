// Header.tsx: Renders the navigation bar with responsive desktop and mobile menus
import { useState, useEffect, JSX } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/sections/navLinks";
import { NavLink } from "../../types";
import { HEADER_ARIA_LABELS } from "../../data/sections/Header";

/**
 * Header component that displays the logo, navigation links, and a mobile menu toggle
 * @returns {JSX.Element} The rendered header component
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  // Close mobile menu
  const closeMenu = (): void => setIsMenuOpen(false);

  // Scroll to section if hash exists in URL
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Element with hash ${location.hash} not found`);
      }
    }
  }, [location]);

  // Handle Escape key to close mobile menu for accessibility
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  /**
   * Renders a single navigation link
   * @param {NavLink} props - Navigation item properties
   * @returns {JSX.Element} The rendered link
   */
  const renderNavItem = ({ label, href }: NavLink): JSX.Element => (
    <Link
      key={href}
      to={href}
      onClick={closeMenu}
      className="nav-link hover:text-primary-gold transition-colors duration-200"
      aria-label={HEADER_ARIA_LABELS.navLink(label)}
      aria-current={location.pathname === href ? "page" : undefined}
    >
      {label}
    </Link>
  );

  return (
    <header
      className="absolute top-0 left-0 z-30 w-full px-5 py-4 lg:px-20 flex items-center justify-between text-white font-sans"
      role="banner"
    >
      {/* Logo */}
      <Link to="/" aria-label={HEADER_ARIA_LABELS.logo}>
        <img
          src="/logo.png"
          alt="Architecture Firm Logo"
          className="w-20 object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wider"
        role="navigation"
        aria-label="Main navigation"
      >
        {navLinks.length > 0 ? (
          navLinks.map(renderNavItem)
        ) : (
          <span>No navigation links available</span>
        )}
      </nav>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden z-40">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
          aria-label={HEADER_ARIA_LABELS.menuButton(isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <HiX className="w-8 h-8" />
          ) : (
            <HiMenu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black/90 backdrop-blur-sm z-30 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out md:hidden`}
        role="dialog"
        aria-hidden={!isMenuOpen}
      >
        <nav
          className="flex flex-col justify-center items-center h-full gap-6 text-lg font-medium tracking-wide font-sans"
          aria-label="Mobile navigation"
        >
          {navLinks.length > 0 ? (
            navLinks.map(renderNavItem)
          ) : (
            <span>No navigation links available</span>
          )}
        </nav>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
