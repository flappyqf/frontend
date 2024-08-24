import React from "react";
import CardTemplate from "../CardTemplate/page";
import { SwapModel } from "../Model/SwapModel/page";
import { ContributeModel } from "../Model/ContributeModel/page";
import { PlayButton } from "../PlayButton/page";

const Session = () => {
  return (
    <div className=" mx-16">
      <div className="flex gap-4 justify-center items-center mt-5 md:mt-10">
        <SwapModel />
        <ContributeModel />
        <PlayButton />
      </div>
      {/* <div className='bg-neutral flex flex-col gap-4 justify-start items-center mt-5 md:mt-10'>
    Flappy
  </div> */}
    </div>
  );
};

export default Session;
