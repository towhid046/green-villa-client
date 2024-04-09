import notFoundImg from "../../assets/images/not-found-img.gif";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen container mx-auto px-4 relative">
      <Helmet>
        <title>Green Villa | Error</title>
      </Helmet>
      <img src={notFoundImg} alt="Not Found Image" />
      <Link to="/" className="btn btn-error z-10 absolute bottom-[15%]">
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
