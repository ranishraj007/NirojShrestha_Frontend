const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex flex-row justify-between px-[30px]">
      <div className="pt-[28px]">
        <a
          href="/"
          className="text-[#2E7D32] font-bold text-[31px] transform hover:scale-110 transition-all duration-300 ease-in-out"
        >
          Niroj Shrestha
        </a>
      </div>

      <div className="flex flex-row justify-between gap-[16px] pt-[24px] text-[#424242] text-[20px] font-[400]">
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
    </nav>
  );
};

export default Navbar;