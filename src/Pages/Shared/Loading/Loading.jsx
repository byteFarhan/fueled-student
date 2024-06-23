import { CgSpinnerTwoAlt } from "react-icons/cg";
// import { Link } from 'react-router-dom';

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-92px)] relative flex items-center justify-center">
      <span className="text-4xl loader animate-spin">
        <CgSpinnerTwoAlt />
      </span>
      {/* <Link to={'/'} className="">
        <button className="absolute bottom-0 px-5 py-2 font-semibold text-white -translate-x-1/2 rounded-md bg-error left-1/2 hover:bg-orange-700">
          Go Back Home
        </button>
      </Link> */}
    </div>
  );
};

export default Loading;
