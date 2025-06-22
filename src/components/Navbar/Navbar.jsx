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
    <div className="relative z-50">
      {/* Logo + Menu Icon */}
      <div
        className="bg-gradient-to-r from-[#0A162E] to-[#1B3A6D]
                    text-white w-full shadow-md "
      >
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between relative z-50">
          <a href="/" className=" hover:scale-105 text-3xl font-bold ml-4">
            Portfolio
          </a>
          {/*desktop*/}
          <nav className="flex justify-between ml-auto gap-8 hidden xl:flex items-center text-white py-7 font-semibold">
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
          {/* Menu icon (mobile only) */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <IoMenuSharp className="xl:hidden block text-5xl cursor-pointer" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`absolute xl:hidden top-24 left-0 w-full z-50
                        bg-gradient-to-r from-[#0A162E] to-[#1B3A6D]
                        flex flex-col items-center gap-6 text-white font-semibold
                        text-lg transition-opacity duration-300 pb-7
                        ${
                          menuOpen
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        {Navbarlinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="mr-7 hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
