import React, { useState } from 'react';

const Servicio = ({ id, nombre, precio, agregarServicio, modificarPrecio }) => {
  const [nuevoPrecio, setNuevoPrecio] = useState(precio);

  const handlePrecioChange = (e) => {
    setNuevoPrecio(e.target.value);
    modificarPrecio(id, e.target.value);
  };

  return (
    <div className="p-4 rounded-lg shadow-xl bg-primary-seccion">
      <h2 className="text-lg font-semibold mb-2">{nombre}</h2>
      <p>Precio: ${precio}</p>
      <input
        type="number"
        value={nuevoPrecio}
        onChange={handlePrecioChange}
        className="border border-gray-300 rounded-lg px-3 py-1 mt-2 w-[53%]"
      />
      <button className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] mt-2 transition-colors duration-300 ease-in-out hover:bg-secondary-dash" onClick={agregarServicio}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Servicio;