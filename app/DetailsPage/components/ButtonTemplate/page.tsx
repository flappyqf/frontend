"use client";

import { Button } from "flowbite-react";
import { useRouter } from 'next/navigation';

type ButtonProps = {
    title: string;
    href: string;  // URL to navigate to
};

export function ButtonTemplate({ title, href }: ButtonProps): JSX.Element {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <div className="flex flex-wrap gap-2 bg-neutral shadow-2xl text-white w-96 h-20 rounded-lg justify-center items-center text-xl">
      <Button onClick={handleClick}>{title}</Button>
    </div>
  );
}