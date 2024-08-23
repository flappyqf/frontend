/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectBanner = () => {
  return (
    <div className="bg-neutral shadow-xl w-full h-96 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center my-auto gap-4">
        <h1 className="card-title text-white uppercase text-7xl">
          FlappyQF round 1
        </h1>
        <p className="text-white uppercase">
          join our game to stand a chance to win a portion of the funding round
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary uppercase">JOIn us</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
