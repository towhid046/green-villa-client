import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { IoCarSportSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { PiSquaresFourThin } from "react-icons/pi";
import PropTypes from "prop-types";

const Estate = ({ estate }) => {
  const {
    image,
    id,
    estate_title,
    location,
    area,
    bedrooms,
    garages,
    bathrooms,
    status,
    price,
  } = estate;

  return (
    <div className="bg-base-100 border rounded-xl justify-between flex flex-col">
      <figure className="relative">
        <img className="rounded-xl" src={image} alt="Shoes" />
        <span
          className={`btn btn-sm cursor-text absolute top-3 left-3 ${
            status === "sale"
              ? "bg-green-300 text-black hover:bg-green-300"
              : "bg-[#2B3440] hover:bg-[#2B3440]"
          } text-white border-none`}
        >
          For {status}
        </span>
      </figure>
      <div className="p-5 space-y-5">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-3">{estate_title}</h2>
          <p className="flex items-center text-md font-medium gap-2 mb-6 justify-center">
            <LuMapPin />
            <span>{location}</span>
          </p>
          <hr />
        </div>
        <ul className=" grid md:grid-cols-2 gap-4 grid-cols-1">
          <li className="flex items-center gap-2">
            <PiSquaresFourThin className="text-blue-400 text-xl" />
            <span>{area}</span>
          </li>
          <li className="flex items-center gap-2">
            <IoCarSportSharp className="text-blue-400 text-xl" />
            <span>{garages} Garages</span>
          </li>
          <li className="flex items-center gap-2">
            <FaBed className="text-blue-400 text-xl" />
            <span>{bedrooms} Beedrooms</span>
          </li>
          <li className="flex items-center gap-2">
            <FaBath className="text-blue-400 text-xl" />
            <span>{bathrooms} Bathrooms</span>
          </li>
        </ul>
        <hr />

        <p>
          <strong>Price: </strong>
          {price}
        </p>

        <div className=" justify-end">
          <Link
            to={`/estate/${id}`}
            className="btn  w-full bg-[#2B3440] hover:bg-black text-white"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

Estate.propTypes = {
  estate: PropTypes.object.isRequired,
};

export default Estate;
