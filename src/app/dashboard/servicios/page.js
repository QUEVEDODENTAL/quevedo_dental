'use client'
import { useState } from 'react';
import Servicio from '@/components/Servicio';

const serviciosData = [
  { id: 1, nombre: 'Servicio 1', precio: 10 },
  { id: 2, nombre: 'Servicio 2', precio: 20 },
];


const Servicios = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarServicio = (servicio) => {
    if (!carrito.find(item => item.id === servicio.id)) {
      setCarrito([...carrito, servicio]);
      console.log("Servicio agregado al carrito:", servicio);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-4 px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Servicios</h1>
      <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviciosData.map(servicio => (
          <Servicio />
        ))}
      </div>
    </div>
  );
};

export default Servicios;