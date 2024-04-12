import SectionHeading from "./../shared/SectionHeading/SectionHeading";
import NewsCard from "./../../components/NewsCard/NewsCard";
import { useEffect } from "react";
import { scrollToTop } from "../../utility/scrollToTop";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const sectionDescription = `Stay informed and inspired with GreenVilla's latest news feeds, where we curate exclusive updates on residential real estate trends, market insights, property showcases, and lifestyle tips. `;
const News = () => {
  const news = useLoaderData();

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <section className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Green Villa | News</title>
      </Helmet>
      <SectionHeading
        sectionTitle="Discover the Latest Real Estate Trends"
        sectionDescription={sectionDescription}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
        {news.map((info) => (
          <NewsCard key={info.id} info={info} />
        ))}
      </div>
    </section>
  );
};

export default News;
