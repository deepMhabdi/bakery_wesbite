import React from "react";
import breadImage from "../assets/bread.png";
import crossiantImage from "../assets/crossiant.png";
import cookieImage from "../assets/cookie.png";
import donutImage from "../assets/donut.png";

const HomePage2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10 gap-6 sm:gap-8 md:gap-10 lg:gap-6 w-full max-w-7xl mx-auto">
      {/* Image container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end pb-6 lg:pb-0">
        <img
          src={donutImage}
          alt="Bread"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>

      {/* Text container */}
      <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-8 lg:p-10">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold flex items-center justify-center sm:justify-start gap-2">
            <span>YOUR ONLY</span>
            <img
              src={cookieImage}
              alt="Cookie"
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain inline-block"
            />
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-center sm:text-left">
            DOSE OF DELIGHT
          </h2>
        </div>

        <div className="mt-4 sm:mt-6">
          <h3 className="text-base sm:text-lg font-semibold mb-2">
            Featured Item &gt;
          </h3>
          <img
            src={crossiantImage}
            alt="Croissant"
            className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 object-contain"
          />
          <p className="mt-3 sm:mt-4 font-serif text-gray-700 text-sm sm:text-base leading-relaxed">
            All cookies should have a show-stopping{" "}
            <br className="hidden sm:block" />
            German chocolate cake in their repertoire,{" "}
            <br className="hidden sm:block" />
            and this is one of your favourites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;
