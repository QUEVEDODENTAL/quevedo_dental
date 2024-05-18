import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TarjetaUsuario = ({ nombre, edad, href }) => {
  return (
    <Link href={href} passHref>
      <div className="group flex items-center mb-5 p-5 rounded-lg shadow-md bg-primary-seccion transition-transform transform hover:scale-105 cursor-pointer">
        <div className="rounded-full overflow-hidden flex-shrink-0 w-24 h-24">
          <Image 
            src="/assets/paciente.jpg" 
            alt="Foto del paciente" 
            width={100} 
            height={100}
            className="object-cover w-full h-full transition-transform transform group-hover:scale-110"
            priority
          />
        </div>

        <div className="flex flex-col ml-4">
          <p className="text-lg"><b>Nombre:</b> {nombre}</p>
          <p className="text-lg"><b>Edad:</b> {edad} años</p>
        </div>
      </div>
    </Link>
  );
};

export default TarjetaUsuario;
