import React from 'react';
import CardTemplate from '../CardTemplate/page';
import { ButtonTemplate } from '../ButtonTemplate/page';

const Session = () => {
  return (
<div className='grid grid-cols-1 md:grid-cols-2 gap-7 mx-16'>
  <div className='flex flex-col gap-4 justify-start items-center mt-5 md:mt-10'>
    <ButtonTemplate title='Swap' href='#'/>
    <ButtonTemplate title='Contribute' href='#'/>
    <ButtonTemplate title='Speed Booster' href='#'/>
  </div>
  <div className='bg-neutral flex flex-col gap-4 justify-start items-center mt-5 md:mt-10'>
    Flappy
  </div>
</div>
  );
}

export default Session;