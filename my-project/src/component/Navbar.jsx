import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Title from "./Title";
import logo from "../assets/arun_logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo Section */}
        <a href="#" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-36" />
        </a>

        {/* Title - Arun Engineering Works */}
        <Title />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
          <a
            href="#about"
            className="transition hover:text-gray-700 text-gray-500"
          >
            About
          </a>
          <a
            href="#projects"
            className="transition hover:text-gray-700 text-gray-500"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            className="transition hover:text-gray-700 text-gray-500"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="transition hover:text-gray-700 text-gray-500"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md absolute w-full left-0">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a
              href="#about"
              className="text-gray-700 text-lg hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-700 text-lg hover:text-gray-900"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 text-lg hover:text-gray-900"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 text-lg hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
