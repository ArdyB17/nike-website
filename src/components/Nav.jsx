import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="focus:outline-none focus:ring-2 focus:ring-slate-400">
          <img src={headerLogo} alt="Nike Logo" width={130} height={29} />
        </a>

        {/* Desktop Navigation */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray 
                         hover:text-black transition-colors duration-300
                         focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>


        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="hidden max-lg:block focus:outline-none focus:ring-2 focus:ring-slate-400"
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <img src={hamburger} alt="" width={25} height={25} />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 lg:hidden">
            <ul className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat text-2xl text-slate-gray 
                             hover:text-black transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;