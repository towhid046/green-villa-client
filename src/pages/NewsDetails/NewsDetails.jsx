import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import PropTypes from "prop-types";
import { MdApartment } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";
import SectionHeading from "./../shared/SectionHeading/SectionHeading";
import NewsCard from "./../../components/NewsCard/NewsCard";

const NewsDetails = () => {
  const { newsId } = useParams();
  const news = useLoaderData();
  const [singleNews, setSingleNews] = useState({});


  useEffect(() => {
    const targetedNews = news.find((info) => info.id === Number(newsId));
    setSingleNews(targetedNews);
  }, [news]);

  const { id, thumbnail_img, title, release_date, description, author } =
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
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold pt-16 pb-6">View related News</h2>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.filter(item=>item.id !== Number(newsId)).map((info) => (
            <NewsCard key={info.id} info={info} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;
