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
    <div>
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
        className="border rounded-lg px-3 py-1 mt-2 w-[53%]"
      />
      <input
        type="number"
        name="precio"
        value={servicio.precio}
        onChange={handleChange}
        className="border rounded-lg px-3 py-1 mt-2 w-[53%]"
      />
      <div style={{ display: 'inline-block', marginRight: '8px' }}>
        <button onClick={handleModificarServicio} className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] mt-2 transition-colors duration-300 ease-in-out hover:bg-secondary-dash">
          Modificar Servicio
        </button>
      </div>
      <button onClick={handleEliminarServicio} className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] mt-2 transition-colors duration-300 ease-in-out hover:bg-secondary-dash">
        Eliminar Servicio
      </button>
    </div>
  );
};

export default Service;
