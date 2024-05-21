import React, { useState } from 'react';

const Servicio = ({ id, nombre, precio, agregarServicio, modificarServicio, eliminarServicio }) => {
  const [servicio, setServicio] = useState({ nombre, precio });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServicio(prevServicio => ({
      ...prevServicio,
      [name]: value,
    }));
  };

  const handleModificarServicio = () => {
    modificarServicio(id, servicio.nombre, servicio.precio);
  };

  const handleEliminarServicio = () => {
    eliminarServicio(id);
  };

  return (
    <div className="p-4 rounded-lg shadow-xl bg-primary-seccion">
      <h2 className="text-lg font-semibold mb-2">Nombre: {nombre}</h2>
      <p>Precio: ${precio}</p>
      <input
        type="text"
        name="nombre"
        value={servicios.nombre}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-3 py-1 mt-2 w-[53%]"
      />
      <input
        type="number"
        name="precio"
        value={servicio.precio}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-3 py-1 mt-2 w-[53%]"
      />
      <button onClick={handleModificarServicio} className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] mt-2 mr-2 transition-colors duration-300 ease-in-out hover:bg-secondary-dash">
        Modificar Servicio
      </button>
      <button onClick={handleEliminarServicio} className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] mt-2 transition-colors duration-300 ease-in-out hover:bg-secondary-dash">
        Eliminar Servicio
      </button>
    </div>
  );
};

export default Servicio;
