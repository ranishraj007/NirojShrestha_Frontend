import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const BaseLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
