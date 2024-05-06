
import PropTypes from "prop-types";
import { MdApartment } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { scrollToTop } from './../../utility/scrollToTop';

const NewsCard = ({ info='' }) => {
  const { id, thumbnail_img, title, release_date, description, author } = info;
  const animClass = ["fade-right", "fade-right", "fade-left",  "fade-right", "fade-left", "fade-right", "fade-left", 'fade-right', 'fade-left', 'fade-right'];


  return (
    <div 
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-delay="500"
    data-aos={animClass[id]}
    className="bg-base-100 border rounded-xl justify-between flex flex-col">
      <figure className="relative overflow-hidden rounded-xl">
        <img
          className="rounded-xl max-h-80 w-full hover:scale-125 ease-in-out duration-500 transition cursor-pointer"
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
          <p>
            {description?.split(" ").splice(0, 19).join(" ")}{" "}
            <Link 
            onClick={scrollToTop}
            to={`/news/${id}`} className="text-blue-400 hover:underline cursor-pointer italic">
              Read More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  info: PropTypes.object.isRequired,
};

export default NewsCard;
