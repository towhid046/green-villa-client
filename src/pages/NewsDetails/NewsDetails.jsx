import { Link, useLoaderData } from "react-router-dom";

import { MdApartment } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import SectionHeading from "./../shared/SectionHeading/SectionHeading";
const NewsDetails = () => {
  const singleNews = useLoaderData();
  const {_id, id, thumbnail_img, title, release_date, description, author } =
    singleNews;

  return (
    <section className="container mx-auto px-4 py-12">
      <SectionHeading
        sectionTitle={title}
        sectionDescription={description?.split(" ").splice(0, 15).join(" ")}
      />
      <div className="max-w-2xl mx-auto">
        <div className="bg-base-100 border justify-between flex flex-col">
          <figure className="relative overflow-hidden">
            <img
              className="max-h-80 w-full"
              src={thumbnail_img}
              alt="News Image"
            />
          </figure>
          <div className="p-5 ">
            <div className=" space-y-4">
              <ul className="flex flex-wrap gap-4 justify-between ">
                <li className="flex items-center gap-2">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={author?.image}
                    alt=""
                  />
                  <span className="text-gray-400 text-md">{author?.name}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MdApartment className="text-blue-400 text-xl" />
                  <span className="text-gray-400 italic">Apartment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CiCalendar className="text-blue-400 text-xl" />
                  <small className="text-gray-400">{release_date}</small>
                </li>
              </ul>
              <hr />
              <h2 className="text-xl font-semibold mb-3">{title}</h2>
              <p>{description}</p>
            </div>
            <Link to={'/news'} className="w-full mt-12 block">
            <button className="btn btn-info w-full"> View All News</button>
            
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
