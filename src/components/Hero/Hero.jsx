import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const Hero = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("sliders.json");
      const data = await res.json();
      console.log(data);
      setSliders(data);
    };
    loadData();
  }, []);

  return (
    <section className="flex flex-col lg:flex-row lg:items-start justify-between container mx-auto px-4 md:py-12 py-7 xl:gap-56 lg:gap-40 gap-10">
      <div className=" space-y-5 text-center lg:text-left">
        <h1 className="md:text-5xl text-2xl font-bold">
          Discover a place <br /> where you’ll love <br /> to live
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          explicabo molestias voluptates distinctio! Quibusdam rem eligendi
          atque maiores laborum! Minima, at non quibusdam labore harum quaerat
          repellat fuga error sit, repudiandae minus tenetur, commodi ex.
          Praesentium excepturi iure aspernatur fugiat.
        </p>
      </div>

      <div className="relative lg:right-24 text-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="md:max-w-96 max-w-52 h-72  md:h-[75vh]"
        >
          {sliders && sliders.map((slide) => (
            <SwiperSlide key={slide.id} className="rounded-2xl">
              <img className="rounded-2xl" src={slide.imageUrl} alt={`Slider Image ${slide.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
