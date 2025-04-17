import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  // Scroll to section if hash exists in URL
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const renderNavItem = ({ label, href }: { label: string; href: string }) => (
    <Link
      key={href}
      to={href}
      onClick={closeMenu}
      className="nav-link hover:text-primary-gold transition-colors duration-200"
    >
      {label}
    </Link>
  );

  return (
    <header className="absolute top-0 left-0 z-30 w-full px-5 py-4 lg:px-20 flex items-center justify-between text-white font-sans">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src="/logo.png" alt="logo" className="w-20 object-contain" />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wider">
        {navLinks.map(renderNavItem)}
      </nav>

      {/* Hamburger */}
      <div className="md:hidden z-40">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
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
      >
        <div className="flex flex-col justify-center items-center h-full gap-6 text-lg font-medium tracking-wide font-sans">
          {navLinks.map(renderNavItem)}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
