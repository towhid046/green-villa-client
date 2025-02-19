import { BiSolidDownArrow } from "react-icons/bi";
import { PiQuotes } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";
const Review = ({ review }) => {
  const {description, rating, author} = review;
  return (
    <div className={`space-y-7 max-w-5xl mx-auto`}>
      <div className="bg-white p-6 rounded-xl relative shadow-sm ">
        <div className="mb-2">
          <PiQuotes className="text-5xl text-indigo-100 rotate-180 " />
        </div>
        <p className="text-gray-500 mb-2">
         {description}
        </p>
        <span className="absolute -bottom-6 left-6 text-white ">
          <BiSolidDownArrow className="text-4xl" />
        </span>
        <div className="mt-1 max-w-52 space-y-2 mx-auto text-center">
          <h2 className="text-lg font-bold italic">Rating</h2>
          <hr />
          <div className="flex items-center gap-2 justify-center">
            <FaRegStar className="text-xl text-yellow-400" />
            <strong>{rating}</strong>
            <FaRegStar className="text-xl text-yellow-400" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <img
          className="w-11 h-11 rounded-full"
          src={author?.image}
          alt="Img"
        />
        <div>
          <h3 className="font-bold text-lg">{author?.name}</h3>
          <p>{author?.location}</p>
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Review;
