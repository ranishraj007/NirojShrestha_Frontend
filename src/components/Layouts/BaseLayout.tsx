import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const BaseLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <>
      <div className="flex min-h-screen flex-col bg-[#fbf7ee] text-[#2f2a22]">
        <Navbar />
        <div className="flex-1 pt-[76px] md:pt-[88px]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
