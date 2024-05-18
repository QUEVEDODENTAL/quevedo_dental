import React from 'react';

const Servicio = ({ nombre, precio, agregarServicio }) => {
  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-2">{nombre}</h2>
      <p>Precio: ${precio}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
        onClick={agregarServicio}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default Servicio;
