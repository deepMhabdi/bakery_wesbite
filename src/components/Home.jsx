import React from "react";
import breadImage from "../assets/bread.png";

const Hero = () => {
  return (
    <section className="bg-white rounded-3xl w-full mt-10 max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10 font-primary">
      <div className="flex-1">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          BAKE
          <br />
          THE
          <br />
          COOKIES
        </h1>

        <p className="mt-6 text-xl font-bold text-gray-800">
          PREMIUM BREAD AND COOKIES MADE FROM SCRATCH
          <span className="ml-2 inline-block bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            FRESH
          </span>
        </p>

        <p className="mt-4 text-sm text-gray-600">
          We’re literally obsessed with giving more of what you love!
        </p>

        <div className="mt-6 flex gap-4 flex-wrap">
          <button className="bg-yellow-400 px-6 py-3 rounded-full text-gray-900 font-semibold hover:bg-yellow-500 transition-all">
            ORDER NOW
          </button>
          <button className="text-gray-800 font-medium hover:text-black transition-all">
            COOKING BLOG &gt;
          </button>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center h-64 md:h-auto">
        <div className=" rounded-2xl p-2 md:p-4  justify-center flex items-center h-full">
          <img
            src={breadImage}
            alt="Bread"
            className="rounded-xl w-full max-w-[360px] md:max-w-[480px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
