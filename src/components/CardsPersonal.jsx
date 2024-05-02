import React from 'react';
import Image from 'next/image';

const CardsPersonal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:flex-col">
      <div className="max-w-md shadow-lg p-6 bg-primary-main rounded-lg md:w-full mb-4">
        <div className="rounded-lg overflow-hidden w-auto h-auto">
          <Image 
            src="/assets/dentista1.jpg" 
            alt="Foto del personal 1" 
            width={200} 
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
       <h3 className='font-extrabold p-2'>Dr. Andres Talamantes</h3>
       <span className='text-sm p-2'>Cirujano Dental</span>
      </div>
      <div className="max-w-md shadow-lg p-6 bg-primary-main rounded-lg md:w-full mb-6">
      <div className="rounded-lg overflow-hidden w-auto h-auto">
        <Image 
          src="/assets/dentista.jpg" 
          alt="Foto del personal 1" 
          width={200} 
          height={100}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
       <h3 className='font-extrabold p-2'>Dr. Fabian</h3>
       <span className='text-sm p-2'>Cirujano Dental</span>
      </div>    
    </div>
  );
};

export default CardsPersonal;
