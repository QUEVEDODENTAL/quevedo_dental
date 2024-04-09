import React from 'react';
import Image from 'next/image';

const CardsPersonal = () => {
  return (
    <div className="grid grid-cols-2 gap-12">
      <div className="max-w-md shadow-lg  p-6 bg-primary-main rounded-lg">
        <div className="">
          <Image 
            src="/assets/dentista.jpg" 
            alt="Foto del personal 1" 
            width={200} 
            height={100} 
          />
        </div>
       <h3 className='font-extrabold p-2'>Dr.Andres Talamantes</h3>
       <span className='text-sm p-2'>Cirujano Dental</span>
      </div>
      <div className="max-w-md shadow-lg  p-6 bg-primary-main rounded-lg">
        <div className="">
          <Image 
            src="/assets/dentista1.jpg" 
            alt="Foto del personal 1" 
            width={200} 
            height={100} 
          />
        </div>
       <h3 className='font-extrabold p-2'>Dr.Fabian</h3>
       <span className='text-sm p-2'>Cirujano Dental</span>
      </div>    
    </div>
  );
};

export default CardsPersonal;
