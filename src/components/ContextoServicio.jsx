'use client'
import React, { createContext, useContext, useState } from 'react';

const ServiciosContext = createContext();

export const ServiciosProvider = ({ children }) => {
  const [servicios, setServicios] = useState([
    { id: 1, nombre: 'Servicio 1', precio: 10 },
    { id: 2, nombre: 'Servicio 2', precio: 20 },
    { id: 3, nombre: 'Servicio 3', precio: 30 },
  ]);

  const agregarServicio = () => {
    const nuevoServicio = {
      id: servicios.length + 1,
      nombre: 'Nuevo Servicio',
      precio: 0,
    };
    setServicios([...servicios, nuevoServicio]);
  };

  const modificarServicio = (id, nuevoNombre, nuevoPrecio) => {
    const serviciosActualizados = servicios.map(servicio =>
      servicio.id === id ? { ...servicio, nombre: nuevoNombre, precio: nuevoPrecio } : servicio
    );
    setServicios(serviciosActualizados);
  };

  const eliminarServicio = (id) => {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este servicio?");
    if (confirmacion) {
      const serviciosFiltrados = servicios.filter(servicio => servicio.id !== id);
      setServicios(serviciosFiltrados);
    }
  };

  return (
    <ServiciosContext.Provider value={{ servicios, agregarServicio, modificarServicio, eliminarServicio }}>
      {children}
    </ServiciosContext.Provider>
  );
};

export const useServicios = () => {
  return useContext(ServiciosContext);
};
