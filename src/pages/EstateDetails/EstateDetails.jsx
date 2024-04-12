import { useEffect, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { scrollToTop } from "../../utility/scrollToTop";
import { LuMapPin } from "react-icons/lu";
import { IoCarSportSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { PiSquaresFourThin } from "react-icons/pi";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import Estate from "./../../components/Estate/Estate";
import { saveItemToLS } from "../../utility/localStorage";

const EstateDetails = () => {
  const estates = useLoaderData();
  const [estate, setEstate] = useState({});
  const { estateId } = useParams();

  useEffect(() => {
    const targetedEstate = estates.find((est) => est.id === Number(estateId));
    setEstate(targetedEstate);
  }, [estates]);

  useEffect(() => {
    scrollToTop();
  }, []);

  const handelSaveItemToLS = (propertyId) => {
    saveItemToLS(propertyId);
  };

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
    description,
    segment_name,
    facilities,
  } = estate;

  return (
    <section className="container mx-auto px-4 py-12">
      <div className=" flex flex-col lg:flex-row justify-between gap-10 items-start">
        <Helmet>
          <title>Green Villa | Property Details</title>
        </Helmet>
        <figure className="relative flex-1">
          <img className="rounded-sm" src={image} alt="House Image" />
          <span
            className={`btn btn-sm rounded-none cursor-text absolute top-3 left-3 ${
              status === "sale"
                ? "bg-green-300 text-black hover:bg-green-300"
                : "bg-[#2B3440] hover:bg-[#2B3440]"
            } text-white border-none`}
          >
            For {status}
          </span>
        </figure>

        <div className="bg-base-100 flex-1">
          <div className="space-y-5">
            <div className="">
              <h2 className="md:text-4xl text-3xl font-bold mb-3">
                {estate_title}
              </h2>
              <p className="flex items-center text-lg font-medium gap-2 mb-6 ">
                <LuMapPin />
                <span>{location}</span>
              </p>
              <hr />
            </div>
            <div className="space-y-3">
              <p>
                <strong>Description:</strong> {description}
              </p>
              <p>
                <em>Category: </em>
                <strong>{segment_name}</strong>
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
            <hr />
            <ul className="space-y-2">
              <h2 className="text-lg font-semibold mb-1">Facilities</h2>

              {facilities &&
                facilities.map((facility, index) => (
                  <li key={index}>
                    <p className="flex items-center gap-2">
                      <IoCheckmarkCircle className="text-green-400 text-xl" />
                      <span>{facility}</span>
                    </p>
                  </li>
                ))}
            </ul>
            <button
              onClick={() => handelSaveItemToLS(id)}
              className="btn w-full rounded-lg hover:bg-black text-white bg-[#2B3440]"
            >
              Save Property
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold pt-16 pb-6">
          View related properties
        </h2>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {estates
            ?.filter((item) => item.id !== Number(estateId))
            .map((estate) => (
              <Estate key={estate.id} estate={estate} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default EstateDetails;
