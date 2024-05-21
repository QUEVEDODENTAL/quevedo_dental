'use client'
import { useState } from 'react';
import Servicio from '@/components/Servicio';

const serviciosData = [
  { id: 1, nombre: "Examen Bucodental Inicial", precio: 50 },
  { id: 2, nombre: "Procedimientos de obturación", precio: 100 },
  { id: 3, nombre: "Extracciones dentales", precio: 150 },
  { id: 4, nombre: "Servicios de limpieza dental", precio: 75 },
  { id: 5, nombre: "Ortodoncia", precio: 200 },
  { id: 6, nombre: "Tratamientos de blanqueamiento", precio: 120 },
  { id: 7, nombre: "Puentes dentales", precio: 250 },
  { id: 8, nombre: "Tratamientos de nervio", precio: 180 },
  { id: 9, nombre: "Carillas dentales", precio: 300 },
  { id: 10, nombre: "Exámenes de rutina", precio: 70 },
];

const Servicios = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarServicio = (servicio) => {
    if (!carrito.find(item => item.id === servicio.id)) {
      setCarrito([...carrito, servicio]);
      console.log("Servicio agregado al carrito:", servicio);
    }
  };

  const modificarPrecio = (id, nuevoPrecio) => {
    const nuevosServicios = serviciosData.map(servicio => {
      if (servicio.id === id) {
        return { ...servicio, precio: nuevoPrecio };
      }
      return servicio;
    });
    // Aquí podrías actualizar el estado local o el almacenamiento persistente con los nuevos datos.
  };

  return (
    <div className="flex flex-col justify-center items-center mx-4 px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviciosData.map(servicio => (
          <Servicio
            key={servicio.id}
            id={servicio.id}
            nombre={servicio.nombre}
            precio={servicio.precio}
            agregarServicio={() => agregarServicio(servicio)}
            modificarPrecio={modificarPrecio}
          />
        ))}
      </div>
    </div>
  );
};

export default Servicios;