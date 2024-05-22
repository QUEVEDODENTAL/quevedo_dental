
'use client'
import React, { useState } from 'react';

const Service = () => {
  const [servicios, setServicios] = useState([
    { id: 1, nombre: 'Servicio 1', precio: 10 },
    { id: 2, nombre: 'Servicio 2', precio: 20 },
    { id: 3, nombre: 'Servicio 3', precio: 30 }
  ]);

  const agregarServicio = () => {
    const nuevoServicio = {
      id: servicios.length + 1, 
      nombre: 'Nuevo Servicio',
      precio: 0
    };
    setServicios([...servicios, nuevoServicio]);
  };

  const modificarServicio = (id, nuevoNombre, nuevoPrecio) => {
    const serviciosActualizados = servicios.map(servicio => {
      if (servicio.id === id) {
        return {
          ...servicio,
          nombre: nuevoNombre,
          precio: nuevoPrecio
        };
      }
      return servicio;
    });
    setServicios(serviciosActualizados);
  };

  const eliminarServicio = (id) => {
    const serviciosFiltrados = servicios.filter(servicio => servicio.id !== id);
    setServicios(serviciosFiltrados);
  };

  return (

      <div className="flex flex-col justify-center items-center mx-4 px-4 py-8">
       <h1 className="text-3xl font-bold mb-4">Servicios</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {servicios.map(servicio => (
          <Servicio
            key={servicio.id}
            id={servicio.id}
            nombre={servicio.nombre}
            precio={servicio.precio}
            modificarServicio={modificarServicio}
            eliminarServicio={eliminarServicio}
          />
        ))}
      </div>
      <button onClick={agregarServicio} className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] mt-4 transition-colors duration-300 ease-in-out hover:bg-secondary-dash">
        Agregar Servicio
      </button>
    </div>
  );
};

const Servicio = ({ id, nombre, precio, modificarServicio, eliminarServicio }) => {
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
        value={servicio.nombre}
        onChange={handleChange}
        className="border rounded-lg px-3 py-1 mt-2 w-full"
      />
      <input
        type="number"
        name="precio"
        value={servicio.precio}
        onChange={handleChange}
        className="border rounded-lg px-3 py-1 mt-2 w-full"
      />
      <div className="flex justify-between mt-2">
        <button onClick={handleModificarServicio} className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] transition-colors duration-300 ease-in-out hover:bg-secondary-dash">
          Modificar Servicio
        </button>
        <button onClick={handleEliminarServicio} className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] transition-colors duration-300 ease-in-out hover:bg-secondary-dash">
          Eliminar Servicio
        </button>
      </div>
    </div>
  );
};

export default Service;

