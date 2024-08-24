"use client";
import React from "react";

export function PlayButton() {
  return (
    <div className=" flex items-center justify-center">
      {/* Unused Modal */}
      {/* <Modal>
        <ModalTrigger className="bg-neutral text-white shadow-2xl flex justify-center group/modal-btn w-96 h-20 rounded-lg items-center">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Buy Boost Up Pass
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            💰
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Let's Boost up
            </h4>
        
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <div className="text-black">hey</div>
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal> */}
      <a
        href="https://www.google.com"
        className="bg-neutral text-white shadow-2xl flex justify-center group/modal-btn w-96 h-20 rounded-lg items-center hover:bg-neutral-700 transition duration-500 animate-pulse"
      >
        Play to boost your chances
      </a>
    </div>
  );
}
