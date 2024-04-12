import Review from "./../Review/Review";
import SectionTitle from "../../pages/shared/SectionHeading/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);

  const sectionDescription = `Discover what our valued customers have to say about their experiences with GreenVilla.`;

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("reviews.json");
      const data = await res.json();
      setReviews(data);
    };
    loadData();
  }, []);

  return (
    <section className="bg-[#f3f3f3] py-12">
      <div className="container mx-auto px-4">
     <SectionTitle 
      sectionTitle="What Our Customers Say"
      sectionDescription={sectionDescription}
      />

      <div
       data-aos-duration="1000"
       data-aos-delay="400"
       data-aos-easing="ease-in-out"
       data-aos='fade-left'
      className="max-w-5xl mx-auto">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay ,Pagination]}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex md:flex-row flex-col gap-6">
                <Review review={review} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </section>
  );
};

export default CustomerReview;
