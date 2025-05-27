import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Only import Autoplay

import "swiper/css";
import "swiper/css/autoplay";

import sprinkleImage from "../assets/sprinkle.png";
import GirasoleImage from "../assets/Girasole.png";
import girlImage from "../assets/girl.png";

const BakingArtSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-10 py-20 sm:px-6 lg:px-8 mt-20 mb-20">
      {/* Swiper Section */}
      <div className="w-full md:w-[500px] lg:w-[550px] h-[300px] overflow-hidden rounded-md">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src={GirasoleImage}
                alt="Baking 1"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src={girlImage}
                alt="Baking 2"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src={sprinkleImage}
                alt="Baking 3"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Text Content */}
      <div className="max-w-md md:ml-10 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug mb-3">
          WHY IS BAKING <br />
          CONSIDERED AS <br />
          <span className="text-pink-600 font-bold">ART FORM?</span>
        </h2>
        <p className="text-gray-700 mb-5 text-base leading-relaxed">
          Their experience plays a role in the way they work. <br />
          Bakers use flavours and visual appeal <br />
          to produce an edible art piece.
        </p>
        <a
          href="bake off.html"
          className="inline-block bg-pink-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-pink-700 transition"
        >
          LEARN BAKING
        </a>
      </div>
    </div>
  );
};

export default BakingArtSection;
