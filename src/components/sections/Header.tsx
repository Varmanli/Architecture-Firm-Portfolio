import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="absolute top-0 left-0 z-30 w-full px-5 py-4 lg:px-20 flex items-center justify-between text-white font-sans">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src="./logo.png" alt="logo" className="w-20 object-contain" />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wider">
        {[
          { label: "Home", href: "#home" },
          { label: "Portfolio", href: "#portfolio" },
          { label: "Contact", href: "#contact" },
          { label: "About us", href: "#about-us" },
        ].map(({ label, href }) => (
          <a key={href} href={href} onClick={closeMenu} className="nav-link">
            {label}
          </a>
        ))}
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden z-40">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Slide Menu - From Right */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-black/90 backdrop-blur-sm z-30 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out md:hidden`}
      >
        <div className="flex flex-col justify-center items-center h-full gap-6 text-lg font-medium tracking-wide font-sans">
          <a
            href="#home"
            onClick={closeMenu}
            className="hover:text-primary-gold transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#portfolio"
            onClick={closeMenu}
            className="hover:text-primary-gold transition-colors duration-200"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="hover:text-primary-gold transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#about-us"
            onClick={closeMenu}
            className="hover:text-primary-gold transition-colors duration-200"
          >
            About us
          </a>
        </div>
      </div>

      {/* Dark overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
