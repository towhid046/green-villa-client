import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";

import heroBgImg from "../../assets/images/hero-img.png";

const Hero = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("sliders.json");
      const data = await res.json();
      setSliders(data);
    };
    loadData();
  }, []);

  return (
    <section
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBgImg})` }}
    >
      <div className="backdrop-brightness-50 ">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between container mx-auto px-4 md:py-12 py-7 xl:gap-56 lg:gap-40 gap-10 ">
          <div className=" space-y-6 text-center lg:text-left text-gray-100">
            <h1 className="md:text-5xl max-w-lg text-3xl font-bold bg-gradient-to-r from-blue-200 via-blue-100 to-green-400 inline-block text-transparent bg-clip-text">
              Welcome to <span className="text-green-300">Green</span> Villa:
              Where Serenity Meets Adventure!
            </h1>
            <p className="text-lg">
              Imagine waking up to the gentle rustle of leaves and the sweet
              symphony of birdsong. Picture yourself surrounded by lush
              greenery, with towering mountains in the distance, painting a
              breathtaking backdrop against the azure sky. Here in Paradise
              Valley, every day is an opportunity for adventure and tranquility.
            </p>
            <button className="btn btn-outline   text-white text-lg ">
              Explore Now
            </button>
          </div>

          <div className="relative lg:right-28 text-center">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              className="md:max-w-96 max-w-52 h-72 md:h-[480px]"
            >
              {sliders &&
                sliders.map((slide) => (
                  <SwiperSlide key={slide.id} className="rounded-2xl">
                    <img
                      className="rounded-2xl"
                      src={slide.imageUrl}
                      alt={`Slider Image ${slide.id}`}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
