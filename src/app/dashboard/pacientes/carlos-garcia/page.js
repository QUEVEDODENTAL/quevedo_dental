import React from 'react';

const Perfil = () => {
  return (
    <div className="flex flex-col items-center h-screen w-full text-base md:text-lg">
      <div className='mt-10 w-full max-w-md'>
        <p className='text-lg md:text-xl font-bold text-center mb-4'>Información personal</p>
        <div className='flex flex-col'>
          {/* Nombre Completo */}
          <div className='mb-2'>
            <b>Nombre:</b> Nombre Nombre Apellido Apellido
          </div>
          {/* Fecha de nacimiento */}
          <div className='mb-2'>
            <b>Fecha de nacimiento:</b> 09/12/2001
          </div>
          {/* CURP */}
          <div className='mb-2'>
            <b>CURP:</b> CURPCURPCURPCURP
          </div>
          {/* Género */}
          <div className='mb-2'>
            <b>Género:</b> Hombre
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
