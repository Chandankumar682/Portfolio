import React, { useState } from "react";
import { TbMenu2, TbMenu3 } from "react-icons/tb";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { label: "Home", id: "Home" },
    { label: "About Me", id: "About" },
    { label: "Skill", id: "Skill" },
    { label: "Project", id: "Project" },
    { label: "Education", id: "Education" },
    { label: "Contact", id: "Contact" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 backdrop-blur-md bg-[#111837]/90 z-50 shadow-md">
      <nav className="max-w-[1400px] mx-auto px-5 sm:px-10 h-[10vh] flex justify-between items-center relative">
        {/* Logo */}
        <a href="#Home" className="text-2xl sm:text-3xl font-bold text-white">
          Chandan
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="font-semibold tracking-wider text-white hover:text-[#2790f7] transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-x-4">
          <a href="mailto:chandankumad29@gmail.com" target="_blank">
            <button className="hidden lg:block bg-[#1710f7] text-white font-semibold px-5 py-2 rounded-full hover:bg-transparent hover:border-[#1710f7] border-2 border-transparent transition-all duration-300">
              Connect With Me
            </button>
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden text-white text-3xl"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col items-center gap-y-6  md:hidden absolute top-full left-1/2 -translate-x-1/2 w-[90%]
          bg-[#111837]/95 backdrop-blur-md shadow-md rounded-xl py-8 transition-all duration-500 ${showMenu? "opacity-100 scale-100": "opacity-0 scale-95 pointer-events-none"}`}
        >
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={() => setShowMenu(false)}
                className="font-semibold tracking-wider text-white hover:text-[#2790f7]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
