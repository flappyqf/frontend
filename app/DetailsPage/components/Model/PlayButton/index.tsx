"use client";
import React from "react";

export function PlayButton() {
  return (
    <div className=" flex items-center justify-center">
      <a
        href="/FlappyBird"
        className="bg-neutral text-white shadow-2xl flex justify-center group/modal-btn w-96 h-14 rounded-lg items-center hover:bg-neutral-700 transition duration-500 animate-pulse"
      >
        Play to boost your chances
      </a>
    </div>
  );
}
