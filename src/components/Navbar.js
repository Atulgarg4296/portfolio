import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-between items-center bg-gray-900 p-4 text-white fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex-1">
        <h1 className="py-6 px-5 font-bold text-3xl">Portfolio</h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row sm:space-x-9 absolute sm:static bg-gray-900 w-full sm:w-auto top-16 left-0 sm:top-auto sm:left-auto p-5 sm:p-0`}
      >
        <button
          onClick={() => {
            scrollToSection("home");
            setIsMenuOpen(false);
          }}
          className="transform hover:scale-110 transition duration-300 cursor-pointer font-semibold py-2 sm:py-0"
        >
          HOME
        </button>
        <button
          onClick={() => {
            scrollToSection("skills");
            setIsMenuOpen(false);
          }}
          className="transform hover:scale-110 transition duration-300 cursor-pointer font-semibold py-2 sm:py-0"
        >
          SKILLS
        </button>
        <button
          onClick={() => {
            scrollToSection("projects");
            setIsMenuOpen(false);
          }}
          className="transform hover:scale-110 transition duration-300 cursor-pointer font-semibold py-2 sm:py-0"
        >
          PROJECTS
        </button>
        <button
          onClick={() => {
            scrollToSection("contact");
            setIsMenuOpen(false);
          }}
          className="transform hover:scale-110 transition duration-300 cursor-pointer font-semibold py-2 sm:py-0"
        >
          CONTACT
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
