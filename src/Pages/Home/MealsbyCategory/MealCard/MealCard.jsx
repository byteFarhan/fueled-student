import { PropTypes } from "prop-types";
import { FaDollarSign, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MealCard = ({ data }) => {
  const { title, images, rating, price, _id } = data;
  return (
    <div className="max-w-[500px] mx-auto w-full p-2 bg-slate-700 text-slate-300 rounded-md">
      <div
        className="relative w-full bg-yellow-100 bg-center bg-cover rounded-md h-60"
        style={{
          backgroundImage: `url(${
            images ? images : "https://i.ibb.co/PwXW3g8/sdfsaf.jpg"
          })`,
        }}
      >
        <div className="bg-[#fa973ab3] text-slate-100 absolute top-3 right-3 rounded-full px-2 flex items-center gap-1">
          <FaRegStar /> {rating || 0}
        </div>
        <h1 className="bg-[#00000060] text-slate-100 absolute top-2 left-2 rounded-full px-2 flex items-center gap-1 text-2xl font-bold">
          <FaDollarSign />
          {price < 10 ? `0${price}` : price}
        </h1>
      </div>
      <div className="w-full ">
        <div className="w-full pt-4 pb-3 min-h-24">
          <h1 className="text-2xl font-bold">
            {title.slice(0, 50)} {title.length > 54 && "..."}
          </h1>
        </div>
        <div className="w-full">
          <Link to={`/meal/${_id}`}>
            <button className="w-full py-2 font-bold duration-300 bg-yellow-600 rounded-md hover:bg-pClr text-slate-100 active:scale-95 hover:-translate-y-1">
              Go to details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
MealCard.propTypes = {
  data: PropTypes.object,
};
