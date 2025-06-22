import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const Navbarlinks = [
    { id: 1, name: "About", link: "#about" },
    { id: 2, name: "Skills", link: "#skills" },
    { id: 3, name: "Projects", link: "#projects" },
    { id: 4, name: "Contact", link: "#contact" },
  ];
  return (
    <div
      className="bg-gradient-to-r from-[#0A162E] to-[#1B3A6D]
                    text-white w-full shadow-md 0"
    >
      <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className=" hover:scale-105 text-3xl font-bold ml-4">
          Portfolio
        </a>
        <header className="flex justify-between items-center">
          {/* Menu items (desktop only) */}
          <nav className="gap-8 hidden xl:flex items-center text-white py-6 font-semibold">
            {Navbarlinks.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="mr-7 hover:text-gray-300 "
              >
                {link.name}
              </a>
            ))}
          </nav>
           {menuOpen && (
    <div
      className="fixed inset-0 backdrop-blur-sm"
      onClick={() => setMenuOpen(false)}
    />
  )}
          {/* Menu icon (mobile only) */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <IoMenuSharp className="xl:hidden block text-5xl cursor-pointer" />
          </button>
          <div
            className={`absolute xl:hidden top-24 left-0 w-full
                        bg-gradient-to-r from-[#0A162E] to-[#1B3A6D]
                        flex flex-col items-center gap-6 font-semibold
                        text-lg transform trasition-transform pb-7
                        ${menuOpen ? "opacity-100" : "opacity-0"}`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            {Navbarlinks.map((link) => (
              <a
                key={link.id}
                href={link.link}
                className="mr-7 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </header>
      </div>
    </div>
  );
};
