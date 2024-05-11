import React from 'react';
import Image from 'next/image';

const TarjetaUsuario = ({ nombre, edad }) => {
  return (
    <div className="flex items-center mb-5 p-5 rounded-lg shadow-md bg-primary-seccion">
      <div className="rounded-full overflow-hidden flex-shrink-0">
        <Image 
          src="/assets/paciente.jpg" 
          alt="Foto del paciente" 
          width={100} 
          height={100}
          className="object-cover"
          style={{ width: 'auto', height: 'auto' }}
          priority
        />
      </div>

      <div className="flex flex-col ml-4">
        <p className="text-lg"><b>Nombre:</b> {nombre}</p>
        <p className="text-lg"><b>Edad:</b> {edad} años</p>
      </div>
    </div>
  );
};

export default TarjetaUsuario;
