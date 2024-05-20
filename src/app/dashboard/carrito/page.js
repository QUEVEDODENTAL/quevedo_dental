'use client'
import React, { useState } from 'react';
import TarjetaUsuario from '@/components/TarjetaUsuario';
import Servicios from '@/app/dashboard/servicios/page';

const Carrito = () => {
  const [carritoSeleccionado, setCarritoSeleccionado] = useState(null);

  // Función para manejar la selección de carrito
  const handleSeleccionCarrito = (nombreCarrito) => {
    setCarritoSeleccionado(nombreCarrito);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-4 px-4 py-8">
      <h1 className="text-3xl font-bold mb-10">¡Selecciona el carrito del paciente!</h1>
      <div className="w-full md:w-[70%]">
        <TarjetaUsuario nombre="Juan Pérez" edad={35} onClick={() => handleSeleccionCarrito("juan-perez")} />
        <TarjetaUsuario nombre="María López" edad={42} onClick={() => handleSeleccionCarrito("maria-lopez")} />
        <TarjetaUsuario nombre="Carlos García" edad={28} onClick={() => handleSeleccionCarrito("carlos-garcia")} />
      </div>
      <Servicios carritoSeleccionado={carritoSeleccionado} />
    </div>
  );
}

export default Carrito;
