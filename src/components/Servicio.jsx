import React from 'react';

const Servicio = ({ nombre, precio, agregarServicio }) => {
  return (
    <div className="p-4 rounded-lg shadow-xl bg-primary-seccion">
      <h2 className="text-lg font-semibold mb-2">{nombre}</h2>
      <p>Precio: ${precio}</p>
      <button className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] mt-2 transition-colors duration-300 ease-in-out hover:bg-secondary-dash" onClick={agregarServicio}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Servicio;
