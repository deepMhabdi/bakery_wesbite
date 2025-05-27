// src/components/ProductCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import pitaBreadImaege from "../assets/pitaBread.png"; 
import seeds from "../assets/seeds.png"; 
import cupcakes from "../assets/cupcakes.png";
import cookie1 from "../assets/cookie1.png";

const products = [
  {
    id: 1,
    name: "BAGEL WITH SEEDS",
    image: seeds,
    bgColor: "bg-orange-100",
  },
  {
    id: 2,
    name: "SLICED PIECE BREAD",
    image: pitaBreadImaege,
    bgColor: "bg-blue-100",
  },
  {
    id: 3,
    name: "COOKIES GLUCOSE",
    image: cookie1,
    bgColor: "bg-yellow-100",
  },
  {
    id: 4,
    name: "CUPCAKES MIXED",
    image: cupcakes,
    bgColor: "bg-pink-100",
  },
];

const Product = () => {
  return (
    <section className="py-12 px-4 font-primary">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Products</h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-7xl mx-auto"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className={` rounded-xl p-6 flex flex-col items-center text-center`}
            >
              <div className="w-55 h-55 rounded-xl overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-bold text-gray-800 tracking-wide uppercase">
                {product.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Product;
