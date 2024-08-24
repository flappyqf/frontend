/* eslint-disable @next/next/no-img-element */
import React from "react";
import CardTemplate from "../CardTemplate";
import { describe } from "node:test";

const Banner = () => {
  return (
    <div className="bg-black shadow-xl w-full h-full flex flex-col md:flex-row justify-evenly items-center p-4">
      {/* Left Side: APUBCC Logo and Title */}
      <div className="flex lg:flex-row flex-col items-center gap-4 md:gap-8 ">
        <img
          src="/apubcclogo.jpg"
          alt="APUBCC"
          className="rounded-full w-24 h-24 md:w-48 md:h-48 object-cover"
        />

        <div className="flex flex-col mt-5 items-center justify-center lg:items-start lg:justify-start">
          <h1 className="text-white uppercase text-4xl md:text-7xl">APUBCC</h1>
          <p className="text-gray-400 text-center lg:text-left">
            Asia largest blackchain club, based in APU University Malaysia,
            total 1000 members
          </p>
        </div>
      </div>

      {/* Right Side: Card Templates */}
      <div className="flex flex-col gap-4 my-2 mt-4 md:mt-0">
        <CardTemplate title="Total Funds Raised" description="Dynamic" />

        <CardTemplate title="Total Contributors" description="dynamic" />
      </div>
    </div>
  );
};

export default Banner;
