import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { IoCarSportSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { PiSquaresFourThin } from "react-icons/pi";
import PropTypes from "prop-types";
import { MdApartment } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";

const NewsCard = () => {
  return (
    <div className="bg-base-100 border rounded-xl justify-between flex flex-col">
      <figure className="relative overflow-hidden rounded-xl">
        <img
          className="rounded-xl hover:scale-125 ease-in-out transition cursor-pointer"
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="p-5 ">
        <div className=" space-y-4">
          <ul className="flex flex-col md:gap-16 gap-2 md:flex-row">
            <li className="flex items-center gap-2">
              <img className="w-8 h-8 rounded-full" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="" />
              <span className="text-gray-400 text-md">Author Name</span>
            </li>
            <li className="flex items-center gap-2">
              <MdApartment className="text-blue-400 text-xl" />
              <span className="text-gray-400 italic">Apartment</span>
            </li>
          </ul>
          <h2 className="text-xl font-semibold mb-3">
            New Apartment Nice in the Best Canadina Cities
          </h2>
          <hr />
        <ul className="flex justify-between flex-col gap-2 md:flex-row">
          <li className="flex items-center gap-2">
            <CiCalendar className="text-blue-400 text-xl" />
            <small className="text-gray-400">Jul 10, 2022</small>
          </li>
          <li className="text-md text-blue-600 hover:underline cursor-pointer font-medium">
            READ MORE
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
