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

export function ContributeModel() {
  const router = useRouter();
  const [contributeAmount, setContributeAmount] = React.useState('');

  const handleContributeAmountChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setContributeAmount(event.target.value);
  };
  

  return (
    <div className=" flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-neutral text-white shadow-2xl flex justify-center group/modal-btn w-96 h-14 rounded-lg items-center">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Contribute
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            💰
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Let&apos;s Contribute
            </h4>

            <div className="py-10 flex flex-col gap-x-4 gap-y-6 items-center justify-center max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <input type="text" placeholder="Type your ETH amount here..." className="input text-black input-bordered w-full max-w-xs bg-transparent input-primary " value={contributeAmount} onChange={handleContributeAmountChange} />
              </div>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                // Handle the contribute amount here
                console.log(`Contribute amount: ${contributeAmount}`);
                // You can add more logic to handle the contribute amount as needed
              }}
            >
              Contribute
            </button>
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
