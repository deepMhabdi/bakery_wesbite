import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons, you can use others if preferred

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="container mx-auto px-4 flex justify-between items-center font-primary relative">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">ROLLIN.</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            CAKE
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            BAKERY
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            ABOUT US
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            COOKIES
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            CONTACT
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden z-50">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              CAKE
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              BAKERY
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              ABOUT US
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              COOKIES
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              CONTACT
            </a>

          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
