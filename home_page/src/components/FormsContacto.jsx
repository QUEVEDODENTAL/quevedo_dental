import Image from 'next/image';
import React from 'react';

const FormsContacto = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-primary-white rounded-2xl mt-10 max-w-md shadow-lg  p-6'>
      {/* Logo */}
      <div className=''>
        <Image src='/logo.png' alt='Logo' width={100} height={100} />
      </div>
      {/* Encabezado */}
      <h3 className='text-2xl font-semibold mb-4'>Comparte tu experiencia</h3>
      {/* Formulario */}
      <form className='flex flex-col items-center justify-center space-y-4'>
        {/* Campo de Nombre */}
        <input
          type='text'
          placeholder='Nombre'
          className='border rounded-md p-2 w-72'
        />
        {/* Campo de Correo Electrónico */}
        <input
          type='email'
          placeholder='Correo electrónico'
          className='border rounded-md p-2 w-72'
        />
        {/* Campo de Mensaje */}
        <textarea
          placeholder='Mensaje'
          rows={4}
          className='border rounded-md p-2 w-72'
        ></textarea>
        {/* Botón de Envío */}
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormsContacto;
