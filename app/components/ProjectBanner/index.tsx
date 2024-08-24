/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BackgroundBeamsWithCollision } from "@/app/DetailsPage/components/ui/background-beams-with-collision";

export function ProjectBanner() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="bg-black">
      <h2 className="text-6xl relative z-20 md:text-7xl lg:text-8xl font-bold text-center bg-black text-white font-sans tracking-tight">
        Flappy{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">QF</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">QF</span>
          </div>
        </div>
      </h2>
      <div className="text-center text-xl relative bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mt-2">Fair Funding, Fun Flapping</div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}



export default ProjectBanner;
