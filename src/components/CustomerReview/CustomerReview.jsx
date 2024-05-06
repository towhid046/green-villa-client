import Review from "./../Review/Review";
import SectionTitle from "../../pages/shared/SectionHeading/SectionHeading";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";
import useGetData from "./../../customHook/useGetData";

const CustomerReview = () => {
  const [reviews, err, loading] = useGetData("/reviews");

  const sectionDescription = `Discover what our valued customers have to say about their experiences with GreenVilla.`;

  return (
    <section className="bg-[#f3f3f3] py-12">
      <div className="container mx-auto px-4">
        <SectionTitle
          sectionTitle="What Our Customers Say"
          sectionDescription={sectionDescription}
        />

        {loading ? (
          <div className="text-center py-12">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
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
        )}
        <div className="py-12 flex justify-center">
          <h2 className="text-3xl font-bold  text-gray-300">{err}</h2>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
