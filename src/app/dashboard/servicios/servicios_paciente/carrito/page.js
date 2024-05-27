'use client';
import React, { useState } from 'react';

const CarritoPage = () => {
  const [serviciosEnCarrito, setServiciosEnCarrito] = useState([]);

  // const handleAgregarAlCarrito = (servicio) => {
  //   setServiciosEnCarrito([...serviciosEnCarrito, servicio]);
  // };

  const handleEliminarDelCarrito = (id) => {
    setServiciosEnCarrito(serviciosEnCarrito.filter(servicio => servicio.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Carrito de Servicios</h1>

      {serviciosEnCarrito.length === 0 ? (
        <p className="text-center">No hay servicios en el carrito.</p>
      ) : (
        <ul>
          {serviciosEnCarrito.map(servicio => (
            <li key={servicio.id}>
              <p>Nombre: {servicio.nombre}</p>
              <p>Precio: ${servicio.precio}</p>
              <button onClick={() => handleEliminarDelCarrito(servicio.id)}>Eliminar del carrito</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CarritoPage;
