import Hero from "./../../components/Hero/Hero";
import { Helmet } from "react-helmet-async";
import Estates from "./../../components/Estates/Estates";
import { scrollToTop } from "../../utility/scrollToTop";
import { useEffect } from "react";

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
    </div>
  );
};

export default Home;
