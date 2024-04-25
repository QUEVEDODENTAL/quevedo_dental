import React from 'react';
import DashHeader from '@/components/DashHeader';
import Sliderbar from '@/components/Sliderbar';

export const DashBoard = () => {
  return (
    <div className='relative'>
        <DashHeader />
        <div className='absolute top-0 left-0 hidden sm:block'>
            <Sliderbar />
        </div>
    </div>
  );
}

export default DashBoard;
