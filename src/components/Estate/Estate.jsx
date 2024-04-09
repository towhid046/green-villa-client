import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { IoCarSportSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { PiSquaresFourThin } from "react-icons/pi";

const Estate = ({ estate }) => {
  const { image, id } = estate;

  return (
    <div className="bg-base-100 border rounded-xl">
      <figure className="">
        <img className="rounded-t-xl" src={image} alt="Shoes" />
      </figure>
      <div className="p-5 space-y-5">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-3">
            Sofi Berryessa 750 King Road
          </h2>
          <p className="flex items-center text-lg font-medium gap-2 mb-6 justify-center">
            <LuMapPin />
            <span>Location your road </span>
          </p>
          <hr />
        </div>
        <ul className=" grid md:grid-cols-2 gap-4 grid-cols-1">
          <li className="flex items-center gap-2">
            <PiSquaresFourThin />
            <span>23 Squer Feet</span>
          </li>
          <li className="flex items-center gap-2">
            <IoCarSportSharp />
            <span>4 Garages</span>
          </li>
          <li className="flex items-center gap-2">
            <FaBed />
            <span>Beedrooms</span>
          </li>
          <li className="flex items-center gap-2">
            <FaBath />
            <span>4 Bathrooms</span>
          </li>
        </ul>

        
        <div className=" justify-end">
          <Link
            to={`/estate/${id}`}
            className="btn  w-full bg-[#2B3440] hover:bg-black text-white"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Estate;
