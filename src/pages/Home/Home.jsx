import Hero from "./../../components/Hero/Hero";
import { Helmet } from "react-helmet-async";
import Estates from "./../../components/Estates/Estates";
import { scrollToTop } from "../../utility/scrollToTop";
import { useEffect } from "react";
import CustomerReview from "./../../components/CustomerReview/CustomerReview";
import PhotoGallery from "../../components/PhotoGallery/PhotoGallery";


const Home = () => {
  useEffect(() => {
    scrollToTop();
  }, []);


  return (
    <div>
      <Helmet>
        <title>Green Villa | Home</title>
      </Helmet>
      <Hero />
      <Estates />
      <PhotoGallery/>
      <CustomerReview />
    </div>
  );
};

export default Home;
