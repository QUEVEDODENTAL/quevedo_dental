import React from 'react';
import Image from 'next/image';

const TarjetaUsuario = ({ nombre, edad }) => {
  return (
    <div className="flex item-center">
       <Image 
          src="/assets/paciente.jpg" 
          alt="Foto del paciente" 
          width={150} 
          height={100}
          style={{borderRadius: "100px"}}
        />
      <div className="flex flex-row text-xl  ml-4">
        <p className="mx-10">{nombre}Nombre:</p>
        <p className="mx-10">{edad} Edad:</p>
      </div>
    </div>
  );
};

export default TarjetaUsuario;
