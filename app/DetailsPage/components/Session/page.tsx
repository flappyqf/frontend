import React from "react";
import { SwapModel } from "../Model/SwapModel";
import { ContributeModel } from "../Model/ContributeModel";
import { PlayButton } from "../Model/PlayButton";

const Session = () => {
  return (
    <div className="mx-16 my-8 mb-12">
      <div className="flex flex-col md:flex-row justify-center items-center lg:flex-row mt-5 md:mt-10 gap-4">
        <SwapModel />
        <ContributeModel />
        <PlayButton />
      </div>
    </div>
  );
};

export default Session;
