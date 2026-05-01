import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Impact", path: "/projects" },
  { name: "Stories", path: "/blog" },
  { name: "Inspiration", path: "/inspiration" },
  { name: "Articles", path: "/articles" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#e8ddca]/80 bg-[#fbf7ee]/92 backdrop-blur-xl">
      <div className="story-container flex h-[76px] items-center justify-between md:h-[88px]">
        <Link
          to="/"
          className="group flex flex-col leading-none"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="text-[22px] font-black text-[#264f36] md:text-[28px]">
            Niroj Shrestha
          </span>
          <span className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#b15b3f]">
            Community impact
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.path);

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`rounded-full px-4 py-2 text-[15px] font-bold transition ${
                  isActive
                    ? "bg-[#264f36] text-[#fffaf1]"
                    : "text-[#4f4638] hover:bg-[#eadfce] hover:text-[#264f36]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-full bg-[#d96f4b] px-5 py-3 text-[14px] font-black text-white shadow-[0_12px_28px_rgba(217,111,75,0.24)] transition hover:-translate-y-0.5 hover:bg-[#bf5737] lg:inline-flex"
        >
          Start a conversation
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d7c9b3] text-[#264f36] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-[#e8ddca] bg-[#fbf7ee] px-5 py-5 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-[17px] font-bold text-[#3d352b] hover:bg-[#eadfce]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
