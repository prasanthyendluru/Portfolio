import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <header
      className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg text-white shadow-lg z-50 font-poppins"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Name */}
        <div className="text-3xl font-bold">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
          >
            Prasanth Yendluru
          </Link>
        </div>

        {/* Navbar Links */}
        <nav className="hidden md:flex space-x-6">
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="relative px-3 py-2 hover:text-blue-400 cursor-pointer transition-colors duration-300 group"
            >
              {section === "home" && <i className="fas fa-home mr-2"></i>}
              {section === "about" && <i className="fas fa-user mr-2"></i>}
              {section === "skills" && <i className="fas fa-cogs mr-2"></i>}
              {section === "projects" && (
                <i className="fas fa-project-diagram mr-2"></i>
              )}
              {section === "contact" && (
                <i className="fas fa-envelope mr-2"></i>
              )}
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-3xl focus:outline-none">
            {isOpen ? (
              <span className="text-white hover:text-blue-400 transition-colors duration-300">✕</span>
            ) : (
              <span className="text-white hover:text-blue-400 transition-colors duration-300">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-900/80 backdrop-blur-lg w-full fixed top-16 left-0 p-4 space-y-4 transition-all duration-300 ease-in-out font-poppins`}
      >
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="block text-white text-center hover:text-blue-400 cursor-pointer py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            {section === "home" && <i className="fas fa-home mr-2"></i>}
            {section === "about" && <i className="fas fa-user mr-2"></i>}
            {section === "skills" && <i className="fas fa-cogs mr-2"></i>}
            {section === "projects" && (
              <i className="fas fa-project-diagram mr-2"></i>
            )}
            {section === "contact" && (
              <i className="fas fa-envelope mr-2"></i>
            )}
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
    </header>
  );
};