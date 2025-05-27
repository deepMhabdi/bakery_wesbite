import React from "react";
import cookieImage from "../assets/cookie.png"; 
import avatarIcon from "../assets/avatar.png"; 

const Footer = () => {
  return (
    <section className="bg-[#A4DADC] rounded-3xl mt-10 px-6 md:px-10 py-10 mx-4 md:mx-15 relative font-primary mb-10">
      <img
        src={cookieImage}
        alt="Cookie"
        className="absolute -top-10 -right-8 w-20 md:w-26 rounded-tr-3xl"
      />

      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 leading-tight mb-4">
            WITH ENOUGH
            <br />
            <span className="text-yellow-600">BUTTER</span>, ANYTHING IS GOOD!
          </h2>

          <div className="flex items-center gap-4">
            <img
              src={avatarIcon}
              alt="Chef"
              className="w-16 h-20 rounded-full"
            />
            <p className="text-sm text-gray-800 max-w-[180px]">
              Our master plan to freshen up a 200-year-old
            </p>
          </div>

          <p className="mt-2 text-sm text-gray-700">What we are dishing out?</p>
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="text-2xl font-bold text-gray-900">
            3.73 <span className="text-sm">★★★★★</span>
          </p>
          <p className="text-sm text-gray-700 mb-4">Based on 1,350 reviews.</p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {[
              "PLAIN CAKE",
              "CROISSANT",
              "LOAF BREAD",
              "COOKIES",
              "BRETZEL",
              "APPLE PIE",
            ].map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-sm font-semibold bg-transparent border border-gray-700 rounded-full hover:bg-white transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
