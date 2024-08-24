import React from "react";
import { Card } from "flowbite-react";

type CardProps = {
    title: string;
    description: string;
};


export default function CardTemplate({title, description}: CardProps) {

  return (
    <Card href="#" className="max-w-sm bg-base-100 shadow-2xl p-4 w-96">
      <h5 className="text-2xl font-bold tracking-tight text-white">
       {title}
      </h5>
      <p className="font-normal text-gray-400">
       {description}
      </p>
    </Card>
  );
}
