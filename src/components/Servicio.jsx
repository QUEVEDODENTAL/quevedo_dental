import React, { useState } from 'react';

const Service = () => {
  const [servicios, setServicios] = useState([
    { id: 1, nombre: 'Servicio 1', precio: 10 },
    { id: 2, nombre: 'Servicio 2', precio: 20 },
    { id: 3, nombre: 'Servicio 3', precio: 30 }
  ]);
  const [carrito, setCarrito] = useState([]);

  const agregarServicio = (id) => {
    const servicioSeleccionado = servicios.find(servicio => servicio.id === id);
    setCarrito([...carrito, servicioSeleccionado]);
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
        <div key={servicio.id}>
          <Servicio
            id={servicio.id}
            nombre={servicio.nombre}
            precio={servicio.precio}
            modificarServicio={modificarServicio}
            eliminarServicio={eliminarServicio}
          />
          <button onClick={() => agregarServicio(servicio.id)} className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] mt-2 transition-colors duration-300 ease-in-out hover:bg-secondary-dash">
            Agregar al Carrito
          </button>
        </div>
      ))}
      <Carrito carrito={carrito} />
    </div>
  );
};

const Servicio = ({ id, nombre, precio, modificarServicio, eliminarServicio }) => {

};

const Carrito = ({ carrito }) => {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.map(servicio => (
        <div key={servicio.id}>
          <p>{servicio.nombre} - ${servicio.precio}</p>
        
        </div>
      ))}
    </div>
  );
};

export default Service;
