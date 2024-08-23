"use client";
import React, { useState } from "react";

const Header = () => {
  return (
    <header className="mx-auto py-8 lg:py-6 bg-neutral sticky top-0 z-50">
      <div className="container mx-auto px-8 lg:px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold uppercase text-primary">
            FlappyQF
          </h1>
        </div>
        {/* Put connect button here */}
        <button className="border rounded-md py-2 px-4 hover:bg-black hover:text-white transition-all duration-300">
          Test
        </button>
      </div>
    </header>
  );
};

export default Header;
