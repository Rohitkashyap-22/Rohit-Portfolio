// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 cursor-pointer"
        >
          Rohit Kashyap
        </Link>
        <nav className="hidden md:flex space-x-6">
          {[
            "hero",
            "about",
            "education",
            "projects",
            "skills",
            "achievements",
            "experience",
            "coding",
            "contact",
          ].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
        <button
          onClick={toggleDarkMode}
          className="md:hidden text-gray-300 hover:text-white mr-4"
        >
          {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <nav className="flex flex-col space-y-4 py-4 px-4">
            {[
              "hero",
              "about",
              "education",
              "projects",
              "skills",
              "achievements",
              "experience",
              "coding",
              "contact",
            ].map((section) => (
              <Link
                key={section}
                to={section}
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="text-gray-300 hover:text-white self-start"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;