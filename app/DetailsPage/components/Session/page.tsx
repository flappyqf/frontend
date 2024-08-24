import React from "react";
import { SwapModel } from "../Model/SwapModel/page";
import { ContributeModel } from "../Model/ContributeModel/page";
import { PlayButton } from "../Model/PlayButton/page";

const Session = () => {
  return (
    <div className="mx-16 my-8 mb-12">
      <div className="flex flex-col justify-center items-center lg:flex-row md:flex-row mt-5 md:mt-10 gap-4">
        <SwapModel />
        <ContributeModel />
        <PlayButton />
      </div>
    </div>
  );
};

export default Session;
