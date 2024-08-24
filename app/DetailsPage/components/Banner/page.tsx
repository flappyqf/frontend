import React from 'react';
import CardTemplate from '../CardTemplate/page';
import { describe } from 'node:test';

const Banner = () => {
  return (
    <div className="bg-black shadow-xl w-full h-96 flex flex-col md:flex-row justify-evenly items-center">
      {/* Left Side: APUBCC Logo and Title */}
      <div className="flex flex-row items-center gap-4 md:gap-8 ">
        <img src="/apubcclogo.jpg" alt="APUBCC" className="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover" />

        <div className='flex flex-col mt-5'>
        <h1 className="text-white uppercase text-4xl md:text-7xl">
          APUBCC
        </h1>
        <p className='text-gray-400'>Asia largest blackchain club, based in APU University Malaysia, total 1000 members</p>
        </div>
      </div>

      {/* Right Side: Card Templates */}
      <div className='flex flex-col gap-4 my-2 mt-4 md:mt-0'>
        <CardTemplate 
          title="Total Funds Raised"
          description="Dynamic"
        />

        <CardTemplate 
          title="Total Contributors"
          description="dynamic"
        />
      </div>
    </div>
  );
}

export default Banner;