"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../ui/animated-modal";
import { useRouter } from "next/navigation";
import Swapper from "./ui/Swapper";


export function SwapModel() {
  const router = useRouter();

  return (
    <div className=" flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-neutral text-white shadow-2xl flex justify-center group/modal-btn w-96 h-14 rounded-lg items-center">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Swap
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            💰
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600  font-bold text-center mb-8">
              Let&apos;s swap
            </h4>

            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center text-black">
                <Swapper />
              </div>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
