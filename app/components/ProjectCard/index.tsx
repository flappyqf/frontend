/* eslint-disable @next/next/no-img-element */
import React from "react";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

const ProjectCard = ({ image, title, description }: CardProps) => {
  return (
    <div className="card bg-base-100 w-fit shadow-xl rounded-lg">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
