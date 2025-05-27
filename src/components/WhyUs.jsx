import { Minus, Quote, Cookie } from "lucide-react";
import React from "react";
import cookie1 from "../assets/cookie1.png";
import breadCopy from "../assets/breadcopy.png";
import breadInBasket from "../assets/breadInBasket.png";
import cheifImage from "../assets/chief.png";

const WhyUs = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8 mt-20 ">
      <div className="w-full mx-auto flex-col mt-8 flex md:flex-row justify-between items-center">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl md:text-5xl uppercase font-primary">
            why bekery&apos;s{" "}
            <Cookie className="bg-orange-500 h-10 w-10 rounded-full px-2 py-2 inline text-white" />{" "}
            <br /> items is so special to customer?
          </h2>
        </div>
        <div className="flex items-baseline  gap-6">
          <hr className="border-none h-[2px] w-20 bg-black" />
          <button className="bg-yellow-300 uppercase flex items-center font-extrabold text-[#3a2125] text-lg mt-3 border-2 border-black rounded-full px-3 py-2 w-fit">
            <span className="h-2 w-2 block mr-2 bg-white rounded-full"> </span>
            Shop now
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 lg:flex-row justify-evenly items-center mx-auto mt-8">
        <div className=" flex justify-evenly gap-4 items-center">
          <div className="max-h-56 h-full max-w-56 w-full rounded-4xl bg-[#f7d8ad] overflow-hidden">
            <img
              src={cookie1}
              alt="cookie-1"
              width={224}
              height={224}
              className=""
            />
          </div>

          <div className="flex flex-col justify-between relative gap-4">
            <div className="bg-[#559a6b] h-28  -left-4 relative w-28  rounded-4xl ml-auto flex">
              <img
                src={breadInBasket}
                alt="cookie-1"
                width={112}
                height={112}
                className="absolute -top-5 -left-2"
              />
              <img
                src={breadInBasket}
                alt="cookie-1"
                width={112}
                height={112}
                className="z-40"
              />
            </div>
            <div className="bg-[#83481d] justify-between rounded-4xl px-4 py-4 flex w-72 flex-col h-56 ">
              <h2 className="text-3xl font-mono font-bold uppercase text-[#f4eae8]">
                Taste the real wheat baked items
              </h2>

              <div className="flex justify-between items-center">
                <span className="text-3xl uppercase font-bold font-mono text-orange-400">
                  $16
                </span>
                <img
                  src={breadCopy}
                  alt="bread"
                  width={112}
                  height={112}
                  className="z-40"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:ml-auto">
          <div className="relative w-64 h-56 rounded-3xl bg-yellow-400 overflow-hidden">
            <img
              src={cheifImage}
              alt="chef"
              width={224}
              height={300}
              className="absolute inset-0 object-cover"
            />
          </div>

          <div className=" w-full">
            <Quote className="text-[#83481d] mt-5" />
            <p className="font-2xl font-bold font-sans max-w-72">
              {" "}
              Baking is a craft in itself, and we bake these delecious and
              cumbly flavours bakery items.
              <span className="flex mt-4 items-center text-lg justify-end">
                <Minus className="text-bold" />
                Ashton Cooper
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
