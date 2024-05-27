import React, { createContext, useContext, useState, useEffect } from 'react';

// Creamos el contexto
const CarritoContext = createContext();

// Hook personalizado para acceder al contexto
export const useCarrito = () => useContext(CarritoContext);

// Proveedor del contexto
export const CarritoProvider = ({ children }) => {
  // Estado para los servicios en el carrito
  const [serviciosEnCarrito, setServiciosEnCarrito] = useState([]);

  // Función para agregar un servicio al carrito
  const agregarAlCarrito = (servicio) => {
    setServiciosEnCarrito([...serviciosEnCarrito, servicio]);
  };

  // Función para eliminar un servicio del carrito
  const eliminarDelCarrito = (id) => {
    setServiciosEnCarrito(serviciosEnCarrito.filter(servicio => servicio.id !== id));
  };

  // Almacenar servicios en el localStorage para persistencia
  useEffect(() => {
    localStorage.setItem('serviciosEnCarrito', JSON.stringify(serviciosEnCarrito));
  }, [serviciosEnCarrito]);

  // Cargar servicios del localStorage al montar el componente
  useEffect(() => {
    const serviciosGuardados = JSON.parse(localStorage.getItem('serviciosEnCarrito'));
    if (serviciosGuardados) {
      setServiciosEnCarrito(serviciosGuardados);
    }
  }, []);

  // Pasamos el estado y las funciones al proveedor del contexto
  return (
    <CarritoContext.Provider value={{ serviciosEnCarrito, agregarAlCarrito, eliminarDelCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
