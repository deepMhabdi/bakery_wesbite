import React from "react";
import { Link } from "react-router-dom";

const DailyProducts = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8 mt-20 mb-20 ">
      <div className="mb-6 md:mb-0 md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-[#7f5539] leading-snug">
          PRODUCT WE BAKE <br className="hidden md:block" /> HERE DAILY-
        </h2>
      </div>

      <div className="md:w-1/2 flex flex-wrap gap-4">
        <a
          href="/cookies"
          className="bg-[#e6ccb2] text-[#7f5539] px-4 py-2 rounded-full shadow hover:bg-[#ddb892] transition duration-300"
        >
          Cookies <span className="ml-2 text-sm text-[#9c6644]">(12)</span>
        </a>
        <a
          href="/cake"
          className="bg-[#e6ccb2] text-[#7f5539] px-4 py-2 rounded-full shadow hover:bg-[#ddb892] transition duration-300"
        >
          Cake <span className="ml-2 text-sm text-[#9c6644]">(27)</span>
        </a>
        <a
          href="/bretzel"
          className="bg-[#e6ccb2] text-[#7f5539] px-4 py-2 rounded-full shadow hover:bg-[#ddb892] transition duration-300"
        >
          Bretzel <span className="ml-2 text-sm text-[#9c6644]">(8)</span>
        </a>
        <a
          href="/pastries"
          className="bg-[#e6ccb2] text-[#7f5539] px-4 py-2 rounded-full shadow hover:bg-[#ddb892] transition duration-300"
        >
          Pastries <span className="ml-2 text-sm text-[#9c6644]">(23)</span>
        </a>
        <a
          href="/croissant"
          className="bg-[#e6ccb2] text-[#7f5539] px-4 py-2 rounded-full shadow hover:bg-[#ddb892] transition duration-300"
        >
          Croissant <span className="ml-2 text-sm text-[#9c6644]">(21)</span>
        </a>
        <a
          href="/bagel"
          className="bg-[#e6ccb2] text-[#7f5539] px-4 py-2 rounded-full shadow hover:bg-[#ddb892] transition duration-300"
        >
          Bagel <span className="ml-2 text-sm text-[#9c6644]">(13)</span>
        </a>
      </div>
    </div>
  );
};

export default DailyProducts;
