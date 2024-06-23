import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";
import "react-loading-skeleton/dist/skeleton.css";
// import "@smastrom/react-rating/style.css";

const MainLayout = () => {
  const { isLoading = false } = {};
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);
  // console.log(scrolled);
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="text-slate-800 m-14 text-center w-[60px] h-[60px] flex items-center justify-center text-8xl mx-auto">
          <ImSpinner3 className="animate-spin" />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-slate-800 text-slate-100">
        <Toaster />
        <div
          className={
            scrolled
              ? "w-full fixed top-0 left-0 z-50 py-2 pb-4 bg-[#0b1625ca] shadow-xl shadow-[#343a4298] duration-300"
              : "w-full fixed top-0 left-0 z-50 pt-5 sm:pt-6 pb-4 duration-300"
          }
        >
          <Navbar />
        </div>
        <Outlet />
        <Footer />
        {/* GO to Up */}
        {scrolled && (
          <button
            onClick={handleScrollTop}
            className="fixed bottom-10 hover:scale-105 duration-300 right-6 p-3 bg-[#212428] cursor-pointer rounded-full hover:-translate-y-2 text-2xl text-rClr"
          >
            <IoMdArrowUp />
          </button>
        )}
      </div>
    </>
  );
};

export default MainLayout;
