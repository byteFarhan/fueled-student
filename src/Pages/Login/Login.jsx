import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export default function Login() {
  const axiosPublic = useAxiosPublic();
  const { isLoading, signInUser, githubLogin, googleLogin } = useAuth();
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then(() => {
        toast.success("Login successfull! Welcome back!");
        navigate(location?.state ? location?.state : "/");
      })
      .catch((error) => {
        toast.error(error?.message);
      });
    reset();
  };

  // all Social Login
  const socialLogin = (socialLogin) => {
    socialLogin()
      .then((result) => {
        navigate(location?.state ? location?.state : "/");
        toast.success("Login Successfull.");
        const user = result.user;
        const name = user?.displayName;
        const email = user?.email;
        const role = "User";
        const photo = user?.photoURL;
        const badge = "Bronze";

        const userInfo = {
          name,
          email,
          photo,
          role,
          badge,
        };

        axiosPublic.post("/users", userInfo).then(() => {});
        //send user info to the db end ==========================
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <div className="min-h-screen text-white bg-slate-800">
      <div className="w-10/12 py-10 mx-auto">
        <h1 className="pt-10 pb-8 font-mono text-3xl font-bold text-center underline sm:text-4xl">
          SignIn
        </h1>
        <div className="w-full md:w-[500px] mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div>
              <input
                className="w-full px-3 py-2 bg-transparent border rounded shadow-md shadow-slate-500"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="text-red-600">Please Input Your Email.</p>
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
                  })}
                />
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-600">Please Input a Password.</p>
              )}
            </div>
            <button
              //   disabled={isLoading}
              className="w-full py-2 font-semibold duration-200 border rounded shadow-md cursor-pointer shadow-slate-400 hover:shadow-lg hover:shadow-slate-200"
            >
              {isLoading ? (
                <ImSpinner9 className="mx-auto text-2xl animate-spin" />
              ) : (
                "Sign in"
              )}
            </button>
          </form>
          <p className="pt-3 text-slate-800 dark:text-slate-100">
            Already have an account?{" "}
            <Link to={"/register"} className="underline text-mClr">
              Sign Up
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
                onClick={() => socialLogin(googleLogin)}
                className="flex items-center justify-center w-full gap-1 px-1 py-2 font-medium border rounded-md hover:shadow-md hover:shadow-slate-200 border-mClr"
              >
                <span className="text-2xl ">
                  <FcGoogle />
                </span>
                Login With Google
              </button>
              <button
                disabled={isLoading}
                onClick={() => socialLogin(githubLogin)}
                className="flex items-center justify-center w-full gap-1 px-1 py-2 font-medium border rounded-md hover:shadow-md hover:shadow-slate-200 border-mClr"
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
