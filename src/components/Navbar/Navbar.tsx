import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Inspiration", path: "/inspiration" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md flex flex-row justify-between items-center px-[30px] py-[20px] md:py-0 transition-all duration-300">
      <div className="md:pt-[28px]">
        <a
          href="/"
          className="text-[#2E7D32] font-bold text-[28px] md:text-[31px] transform hover:scale-105 transition-all duration-300 ease-in-out block"
        >
          Niroj Shrestha
        </a>
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-[#424242] focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row justify-between gap-[16px] pt-[24px] text-[#424242] text-[20px] font-[400]">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className="px-[21px] py-[10px] hover:text-[#2E7D32] transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full bg-white flex-col items-center gap-4 py-8 shadow-lg md:hidden z-50`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-[#424242] text-[20px] font-[400] hover:text-[#2E7D32] transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
