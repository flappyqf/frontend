import React from 'react';
import CardTemplate from '../CardTemplate/page';
import { SwapModel } from '../Model/SwapModel/page';
import { ContributeModel } from '../Model/ContributeModel/page';
import { BoosterModel } from '../Model/BoosterModel/page';


const Session = () => {
  return (
<div className='grid grid-cols-1 md:grid-cols-2 gap-7 mx-16'>
  <div className='flex flex-col gap-4 justify-start items-center mt-5 md:mt-10'>
    <SwapModel />
    <ContributeModel />
    <BoosterModel />
  </div>
  <div className='bg-neutral flex flex-col gap-4 justify-start items-center mt-5 md:mt-10'>
    Flappy
  </div>
</div>
  );
}

export default Session;