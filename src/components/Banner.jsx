import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="bg-primary-card mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2 md:pr-8">
              <h1 className="md:text-6xl font-semibold text-secondary-font mb-5 text-6xl">
                Tu sonrisa,<br />
                es la luz de<br />
                nuestro<br />
                consultorio
              </h1>
              <p className="text-sm md:text-base">
                Lorem Ipsum es simplemente el texto de relleno de las imprentas y
                archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
                de las industrias desde el año 1500
              </p>
              <button className="bg-secondary-button text-primary-seccion font-bold py-2 px-4 mt-5 rounded hover:text-primary-white">
                Conócenos
              </button>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <Image
                src="/assets/dentista.jpg"
                alt="Dentista"
                width={300}
                height={200}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
