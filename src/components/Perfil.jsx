import Image from 'next/image';
import React from 'react';

const Perfil = () => {
  return (
    <div className="flex flex-col items-center h-screen w-full text-base md:text-lg">
      {/* Imagen */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-1 border-black flex items-center justify-center">
        <Image
          src="/assets/dentista2.jpg"
          alt="Dentista 2"
          width={200}
          height={200}
          priority
          className="rounded-full"
          layout="responsive"
          objectFit="cover"
        />
      </div>

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

      {/* Informacion de contacto */}
      <div className='mt-5 w-full max-w-md'>
        <p className='text-lg md:text-xl font-bold text-center mb-4'>Información de contacto</p>
        <div className='flex flex-col'>
          {/* Numero de telefono */}
          <div className='mb-2'>
            <b>Número de teléfono:</b> 646-123-4567
          </div>
          {/* Correo */}
          <div className='mb-2'>
            <b>Correo:</b> contactame@ite.edu.mx
          </div>
          {/* Direccion */}
          <div className='mb-2'>
            <b>Dirección:</b> Calle A, Numero 10, Chapultepec
          </div>
        </div>
      </div>

      {/* Informacion de estudios */}
      <div className='mt-5 w-full max-w-md'>
        <p className='text-lg md:text-xl font-bold text-center mb-4'>Información de estudios</p>
        <div className='flex flex-col'>
          {/* Especialidad */}
          <div className='mb-2'>
            <b>Especialidad:</b> Odontólogo
          </div>
          {/* Licencia medica */}
          <div className='mb-2'>
            <b>Licencia Médica:</b> Sí
          </div>
          {/* Numero de licencia */}
          <div className='mb-2'>
            <b>Número de licencia:</b> 1233141824899123
          </div>
        </div>
      </div>

      {/* Informacion de trabajo */}
      <div className='mt-5 w-full max-w-md'>
        <p className='text-lg md:text-xl font-bold text-center mb-4'>Información de trabajo</p>
        <div className='flex flex-col'>
          {/* Salario */}
          <div className='mb-2'>
            <b>Salario:</b> $10,000
          </div>
          {/* Fecha de contratacion*/}
          <div className='mb-2'>
            <b>Fecha de contratación:</b> 08/02/2024
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
