import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-row flex-1">
        <div className="flex-1">
          <h1 className="text-6xl font-semibold text-secondary-font mb-5">
            Tu sonrisa, es<br />
            es la luz de<br />
            nuestro<br />
            consultorio
          </h1>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500
          </p>
          <button className="bg-secondary-button  text-primary-seccion font-bold py-2 px-4  hover:text-primary-white rounded mt-5">
            Conocenos
          </button>
        </div>
        <div className="flex-grow justify-center flex-1">
          <Image
            src="/assets/dentista.jpg"
            alt="Dentista"
            width={300}
            height={200}
            className="mt-4 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
