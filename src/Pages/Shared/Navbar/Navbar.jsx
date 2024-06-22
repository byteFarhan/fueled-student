import { useState } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";

import { IoNotifications } from "react-icons/io5";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { user = true, isLoading = false } = {};
  // console.log(userDta);
  const isAdmin = false;
  // console.log(isAdmin);
  return (
    <>
      <nav>
        <div className="flex items-center justify-between w-11/12 mx-auto xl:w-10/12">
          <Link to={"/"} className="w-32 text-3xl font-bold ">
            <img className="max-h-14" src="logo.png" alt="" />
          </Link>
          <div className="items-center hidden gap-5 md:flex navigation">
            <NavLink className="px-5 py-2 rounded-md " to={"/"}>
              Home
            </NavLink>
            <NavLink className="px-5 py-2 font-medium rounded-md" to={"/meals"}>
              Meals
            </NavLink>
            {isAdmin ? (
              <NavLink
                className="px-5 py-2 font-medium rounded-md"
                to={"/Dashboard"}
              >
                Dashboard
              </NavLink>
            ) : (
              <NavLink
                className="px-5 py-2 font-medium rounded-md"
                to={"/upcoming-meals"}
              >
                Upcoming Meals
              </NavLink>
            )}
          </div>
          <div className="flex gap-2 sm:gap-4">
            <div className="flex items-center justify-center">
              <div className="relative flex items-center justify-center pr-2 duration-300 sm:pr-0 hover:-translate-y-1">
                <button className="text-3xl">
                  <IoNotifications />
                </button>

                <span className="absolute -top-3 -right-1.5 sm:-right-2.5 bg-pClr rounded-full px-1.5 font-semibold text-sm">
                  {"0"}
                </span>
              </div>
            </div>

            {isLoading ? (
              <div className="py-2 w-[60px] h-[60px] flex items-center justify-center text-5xl text-white">
                <ImSpinner9 className="animate-spin" />
              </div>
            ) : user ? (
              <ProfileMenu />
            ) : (
              <NavLink to={"/login"}>
                <button className="px-3 py-2 font-bold duration-300 rounded shadow-md sm:px-6 shadow-slate-200 hover:shadow-slate-200 hover:shadow-lg hover:scale-110 text-slate-100">
                  Join Us
                </button>
              </NavLink>
            )}
            <button
              onClick={() => setMenu(!menu)}
              className="text-3xl sm:text-4xl md:hidden"
            >
              <CgMenuRightAlt />
            </button>
            {menu && (
              <div className="absolute right-0 flex flex-col items-center gap-5 p-5 rounded-md top-12 w-44 bg-slate-600 md:hidden navigation">
                <NavLink
                  onClick={() => setMenu(!menu)}
                  className="w-full py-2 font-medium text-center text-white duration-300 rounded-md shadow-md shadow-slate-200 hover:shadow-lg hover:shadow-slate-200 hover:scale-110"
                  to={"/"}
                >
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setMenu(!menu)}
                  className="w-full py-2 font-medium text-center rounded-md"
                  to={"/meals"}
                >
                  Meals
                </NavLink>
                <NavLink
                  onClick={() => setMenu(!menu)}
                  className="w-full py-2 font-medium text-center rounded-md"
                  to={"/upcoming-meals"}
                >
                  Upcoming Meals
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
