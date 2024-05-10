import Image from 'next/image';
import React from 'react';

const Perfil = () => {
  return (
    <div className="flex flex-col items-center h-screen w-screen text-lg md:text-2xl">
      {/* Imagen */}
      <div
        style={{ borderRadius: '50%', overflow: 'hidden', width: '50%', maxWidth: '200px', height: 'auto', border: '4px solid black', marginTop: '20px' }}
      >
        <Image
          src="/assets/dentista2.jpg"
          alt="Dentista 2"
          width={200}
          height={200}
          priority
        />
      </div>

      <div className='mt-10'>
        <p className='text-2xl md:text-3xl font-bold'>Información personal</p>
        <div className='mt-2 text-center'>
          {/* Nombre Completo */}
          <b>Nombre:</b> Nombre Nombre Apellido Apellido
        </div>
        <div className='flex flex-col md:flex-row mt-3'>
          {/* Fecha de nacimiento */}
          <div className='mb-3 md:mb-0 md:mr-10'>
            <b>Fecha de nacimiento:</b> 09/12/2001
          </div>
          {/* CURP */}
          <div className='mb-3 md:mb-0 md:mr-10'>
            <b>CURP:</b> CURPCURPCURPCURP
          </div>
          {/* Género */}
          <div>
            <b>Género:</b> Hombre
          </div>
        </div>
      </div>

      <div className='mt-5'>
        {/* Informacion de contacto */}
        <p className='text-2xl md:text-3xl font-bold'>Información de contacto</p>
        <div className='mt-3'>
          {/* Numero de telefono */}
          <b>Número de teléfono:</b> 646-123-4567
        </div>
        <div className='mt-3'>
          {/* Correo */}
          <b>Correo:</b> contactame@ite.edu.mx
        </div>
        {/* Direccion */}
        <div className='mt-3'>
          <b>Dirección:</b> Calle A, Numero 10, Chapultepec
        </div>
      </div>

      <div className='mt-5'>
        {/* Informacion de estudios */}
        <p className='text-2xl md:text-3xl font-bold'>Información de estudios</p>
        <div className='mt-3'>
          {/* Especialidad */}
          <b>Especialidad:</b> Odontólogo
        </div>
        <div className='mt-3'>
          {/* Licencia medica */}
          <b>Licencia Médica:</b> Sí
        </div>
        {/* Numero de licencia */}
        <div className='mt-3'>
          <b>Número de licencia:</b> 1233141824899123
        </div>
      </div>

      <div className='mt-5'>
        {/* Informacion de trabajo */}
        <p className='text-2xl md:text-3xl font-bold'>Información de trabajo</p>
        <div className='mt-3'>
          {/* Salario */}
          <b>Salario:</b> $10,000
        </div>
        {/* Fecha de contratacion*/}
        <div className='mt-3'>
          <b>Fecha de contratación:</b> 08/02/2024
        </div>
      </div>
    </div>
  );
}

export default Perfil;
