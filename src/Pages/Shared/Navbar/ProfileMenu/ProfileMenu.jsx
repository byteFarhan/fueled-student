import { NavLink } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { LuLogOut } from "react-icons/lu";
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";

const ProfileMenu = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut().then(() => {
      toast.success("Logout successfull.");
    });
  };
  return (
    <div className="relative cursor-pointer group">
      <div className="flex items-center justify-between w-full text-center text-white duration-200">
        <div className="relative group">
          <img
            className="size-[60px] bg-slate-500 object-cover rounded-full border-4 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]"
            src={
              user.photoURL
                ? user.photoURL
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt="avatar navigate ui"
          />
          <span className="size-5 bg-white p-[2px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-2 left-[50%] -translate-x-1/2 text-red-800">
            <GoPlus />
          </span>
        </div>
      </div>
      <div className="absolute right-0 z-50 flex flex-col invisible text-center bg-gray-500 min-w-48 shadow-4xl group-hover:visible">
        <div>
          <h1 className="px-3 py-2 text-xl font-semibold text-white bg-slate-800">
            {user.displayName ? user.displayName : "User Name"}
          </h1>
        </div>
        <NavLink
          to={"/dashboard"}
          className="flex items-center justify-center gap-1 py-3 font-semibold tracking-widest border-b hover:shadow hover:shadow-slate-200"
        >
          <span className="text-2xl">
            <CgProfile />
          </span>
          My Dashboard
        </NavLink>
        <button
          onClick={handleLogout}
          className="hover:bg-[#c52323] font-semibold border-b bg-sClr py-3 tracking-widest flex items-center justify-center gap-3 hover:shadow hover:shadow-slate-200"
        >
          <span className="text-2xl">
            <LuLogOut />
          </span>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
