/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

type CardProps = {
  image: string;
  title: string;
  description: string;

};

const ProjectCard = ({ image, title, description}: CardProps) => {
  return (
    <div className="card bg-base-100 w-fit shadow-2xl rounded-lg">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href="/DetailsPage">
            <button className="btn btn-primary">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
