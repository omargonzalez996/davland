import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">L0G0</div>
        <div>
          {/* Botón hamburguesa para móviles */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          {/* Links del menú */}
          <ul
            className={`md:flex-col px-2 bg-slate-500 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <li>
              <a href="#home" className="text-white w-full hover:text-gray-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-gray-300">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-gray-300">
                Servicios
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-300">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
