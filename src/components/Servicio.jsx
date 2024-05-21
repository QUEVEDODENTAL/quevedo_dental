import React, { useState } from 'react';

const Service = () => {
  const [servicios, setServicios] = useState([
    { id: 1, nombre: 'Servicio 1', precio: 10 }
  ]);

  const agregarServicio = () => {
    if (servicios.length === 0) {
      const nuevoServicio = {
        id: 1,
        nombre: 'Nuevo Servicio',
        precio: 0
      };
      setServicios([nuevoServicio]);
    }
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
    if (servicios.length === 1) {
      setServicios([]);
    } else {
      const serviciosFiltrados = servicios.filter(servicio => servicio.id !== id);
      setServicios(serviciosFiltrados);
      
    }
  };

  return (
    <div>
      {servicios.map(servicio => (
        <Servicio
          key={servicio.id}
          servicio={servicio}
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

const Servicio = ({ servicio, modificarServicio, eliminarServicio }) => {
  const { id, nombre, precio } = servicio;

  const handleChange = (e) => {
    const { name, value } = e.target;
    modificarServicio(id, name === 'nombre' ? value : nombre, name === 'precio' ? parseFloat(value) : precio);
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
        value={nombre}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-3 py-1 mt-2 w-[53%]"
      />
      <input
        type="number"
        name="precio"
        value={precio}
        onChange={handleChange}
        className="border border-gray-300 rounded-lg px-3 py-1 mt-2 w-[53%]"
      />
      <button onClick={handleEliminarServicio} className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] mt-2 transition-colors duration-300 ease-in-out hover:bg-secondary-dash">
        Eliminar Servicio
      </button>
    </div>
  );
};

export default Service;
