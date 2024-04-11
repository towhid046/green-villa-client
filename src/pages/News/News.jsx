import SectionHeading from "./../shared/SectionHeading/SectionHeading";
import NewsCard from './../../components/NewsCard/NewsCard';
import { useEffect } from "react";
import { scrollToTop } from "../../utility/scrollToTop";

const sectionDescription = `Stay informed and inspired with GreenVilla's latest news feeds, where we curate exclusive updates on residential real estate trends, market insights, property showcases, and lifestyle tips. `;
const News = () => {

  useEffect(()=>{
    scrollToTop()
},[])
  return (
    <section className="container mx-auto px-4 py-12">
      <SectionHeading
        sectionTitle="Discover the Latest Real Estate Trends"
        sectionDescription={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
      </div>
    </section>
  );
};

export default News;
