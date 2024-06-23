import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { imageUpload } from "../Shared/utils/imageUpload";
import auth from "../../firebase/firebase.config";

export default function Register() {
  const isLoading = false;
  const { createUser, updateUserProfile, setUser, user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const [errPass, setErrPass] = useState(false);
  const [imgErr, setImgErr] = useState(null);
  const [eye, setEye] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = async (data) => {
    console.log(data);
    setImgErr(false);
    setErrPass(false);
    const { name, photo, email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setErrPass(true);
      return;
    }
    if (photo.name === "" || photo.size === 0) {
      setImgErr(true);
      return;
    }

    const imageFile = photo[0];

    const image = await imageUpload(imageFile);
    console.log(image);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Account created! Welcome!");
        navigate(location?.state ? location?.state : "/");
        //update profile
        if (image) {
          updateUserProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
          })
            .then(() => {
              setUser({ ...user, displayName: name, photoURL: image });
              //send user info to the db start ==========================
              const userInfo = {
                name: user?.displayName,
                email: user?.email,
                role: "User",
                photo: user?.photoURL,
                badge: "Bronze",
              };
              // console.log(userInfo);
              axiosPublic.post("/users", userInfo).then(() => {
                // console.log('from auth',res);
              });
              //send user info to the db end ==========================
            })
            .catch(() => {});
        }
      })
      .catch(() => toast.error("User already exist!"));

    reset();
  };
  return (
    <div className="min-h-screen text-white bg-slate-800">
      <div className="w-10/12 py-10 mx-auto">
        <h1 className="pt-10 pb-8 font-mono text-3xl font-bold text-center underline sm:text-4xl">
          SignUp
        </h1>
        <div className="w-full md:w-[500px] mx-auto">
          <form
            onSubmit={handleSubmit(formSubmit)}
            className="flex flex-col gap-5"
          >
            <div>
              <input
                className="w-full px-3 py-2 bg-transparent border rounded shadow-md shadow-slate-500"
                type="text"
                placeholder="Name"
                {...register("name", { required: true, maxLength: 20 })}
              />

              {errors.name && (
                <span className="text-red-600">Please Input Your Name</span>
              )}
            </div>
            <div>
              <div className="relative">
                <label
                  htmlFor="img"
                  className={`absolute left-0 top-0 bg-slate-600 px-3.5 py-[11px] text-base botder text-white border border-r-0 rounded-l cursor-pointer`}
                >
                  Choose Profile
                </label>
                <input
                  id="img"
                  className="w-full px-3 py-2 bg-transparent border rounded shadow-md shadow-slate-500 pl-9"
                  type="file"
                  accept="image/*"
                  placeholder="Name"
                  {...register("photo", { required: true })}
                />
              </div>
              {errors.photo && (
                <span className="text-red-600">Please Upload Your Photo</span>
              )}
              {imgErr && (
                <span className="text-red-600">Please Upload Your Photo</span>
              )}
            </div>
            <div>
              <input
                className="w-full px-3 py-2 bg-transparent border rounded shadow-md shadow-slate-500"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Please Input Your Email.</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-600">Invalid Email</p>
              )}
            </div>
            <div>
              <div className="relative">
                <span className="absolute text-xl -translate-y-1/2 cursor-pointer right-3 top-1/2">
                  {eye ? (
                    <span onClick={() => setEye(!eye)}>
                      <FaEyeSlash />
                    </span>
                  ) : (
                    <span onClick={() => setEye(!eye)}>
                      <FaEye />
                    </span>
                  )}
                </span>
                <input
                  className="w-full px-3 py-2 bg-transparent border rounded shadow-md shadow-slate-500"
                  type={eye ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", {
                    required: true,
                    max: 20,
                    min: 6,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                  })}
                />
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-600">Please Input a Password.</p>
              )}
              {errors.password?.type === "min" && (
                <p className="text-red-600">Password must be 6 word</p>
              )}
              {errors.password?.type === "max" && (
                <p className="text-red-600">Password must be less 20 word</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must be uppercase, lowercase & number
                </p>
              )}
            </div>
            <div>
              <input
                className="w-full px-3 py-2 bg-transparent border rounded shadow-md shadow-slate-500"
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-600">Confirm Password.</p>
              )}
              {errPass && (
                <p className="text-red-600">Password is not matched!</p>
              )}
            </div>
            <button
              //   disabled={isLoading}
              className="w-full py-2 font-semibold duration-200 border rounded shadow-md cursor-pointer shadow-slate-400 hover:shadow-lg hover:shadow-slate-200"
            >
              {isLoading ? (
                <ImSpinner9 className="mx-auto text-2xl animate-spin" />
              ) : (
                "Sign up"
              )}
            </button>
          </form>
          <p className="pt-3 text-slate-800 dark:text-slate-100">
            Already have an account?{" "}
            <Link to={"/login"} className="underline text-mClr">
              Login
            </Link>
          </p>
          <div>
            <div className="relative flex items-center justify-center w-full h-5 my-5">
              <div className="h-[1px] w-full bg-white"></div>
              <span className="absolute px-3 font-medium -translate-x-1/2 text-slate-100 bg-slate-800 left-1/2">
                or
              </span>
            </div>
            <div className="flex flex-col w-full gap-2 lg:flex-row xl:gap-3 text-slate-900 dark:text-stone-100">
              <button
                disabled={isLoading}
                // onClick={() => socialLogin(googleLogin)}
                className="flex items-center justify-center w-full gap-1 px-1 py-2 font-medium border rounded-md hover:shadow-lg shadow-indigo-900/20 border-mClr"
              >
                <span className="text-2xl ">
                  <FcGoogle />
                </span>
                Login With Google
              </button>
              <button
                disabled={isLoading}
                // onClick={() => socialLogin(gitHubLogin)}
                className="flex items-center justify-center w-full gap-1 px-1 py-2 font-medium border rounded-md hover:shadow-lg shadow-blue-500/20 border-mClr"
              >
                <span className="text-2xl text-mClr dark:text-white">
                  <FaGithub />
                </span>
                Login With GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
