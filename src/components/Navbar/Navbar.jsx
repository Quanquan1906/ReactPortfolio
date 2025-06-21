import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="bg-gradient-to-r from-[#0A162E] to-[#1B3A6D]
                    text-white w-full shadow-md 0"
    >
      <div className="container mx-auto px-8 py-3 flex items-center justify-between ">
        {/* Logo */}
        <a href="/" className="hover:scale-105 text-3xl font-bold ml-4">
          Portfolio
        </a>
        <header className="flex justify-between items-center text-white py-6">
          {/* Menu items (desktop only) */}
          <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
            <li className="p-4 hover:text-gray-300 transition-all cursor-pointer">
              About
            </li>
            <li className="p-4 hover:text-gray-300 transition-all cursor-pointer">
              Experience
            </li>
            <li className="p-4 hover:text-gray-300 transition-all cursor-pointer">
              Projects
            </li>
            <li className="p-4 hover:text-gray-300 transition-all cursor-pointer">
              Contact
            </li>
          </ul>
          {/* Menu icon (mobile only) */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <IoMenuSharp className="xl:hidden block text-5xl cursor-pointer" />
          </button>
          <div
            className={`absolute xl:hidden top-24 left-0 w-full
                        bg-gradient-to-r from-[#0A162E] to-[#1B3A6D]
                        flex flex-col items-center gap-6 font-semibold
                        text-lg transform trasition-transform
                        ${menuOpen ? "opacity-100" : "opacity-0"}`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            <li className="list-none w-full text-center p-4 hover:text-grey transition-all cursor-pointer">
              Home
            </li>
            <li className="list-none w-full text-center p-4 hover:text-grey transition-all cursor-pointer">
              Experience
            </li>
            <li className="list-none w-full text-center p-4 hover:text-grey transition-all cursor-pointer">
              Projects
            </li>
            <li className="list-none w-full text-center p-4 hover:text-grey transition-all cursor-pointer">
              Contact
            </li>
          </div>
        </header>
      </div>
    </div>
  );
};
