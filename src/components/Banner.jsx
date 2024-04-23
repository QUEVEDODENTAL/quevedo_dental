import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="bg-primary-card mt-20">
      <div className="container mx-auto py-8 flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2 md:pr-8">
            <h1 className="md:text-6xl font-semibold text-secondary-font mb-5 text-6xl">
              Tu sonrisa,<br />
              es la luz de<br />
              nuestro<br />
              consultorio
            </h1>
            <p className="md:text-base lg:text-lg font-light">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
              de las industrias desde el año 1500
            </p>
          </div>
          <div className="w-64 md:w-auto mt-4 md:mt-0 md:ml-12 md:pl-10 flex justify-center">
            <div className="rounded-lg overflow-hidden ml-4 hidden md:block">
              <Image
                src="/assets/dentista.jpg"
                alt="Dentista"
                width={300}
                height={200}
                className="w-full h-auto md:w-96 md:h-auto"
                priority 
              />
            </div>
            <div className="rounded-lg overflow-hidden md:hidden">
              <Image
                src="/assets/dentista.jpg"
                alt="Dentista"
                width={200}
                height={150}
                className="w-full h-auto"
                priority 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
