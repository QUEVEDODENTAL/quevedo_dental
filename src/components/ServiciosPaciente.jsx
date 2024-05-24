'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useServicios } from '@/components/ContextoServicio';

const ServiciosPacientePage = () => {
    const { servicios } = useServicios();
    const [precioExtra, setPrecioExtra] = useState(0);
    const [serviciosEnCarrito, setServiciosEnCarrito] = useState([]);
  
    const handleAgregarAlCarrito = (servicio) => {
      setServiciosEnCarrito([...serviciosEnCarrito, servicio]);
      console.log(serviciosEnCarrito);
    };
  
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Servicios para Pacientes</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicios.map(servicio => (
            <div key={servicio.id} className="p-4 rounded-lg shadow-xl bg-primary-seccion">
              <h2 className="text-lg font-semibold mb-2">Nombre: {servicio.nombre}</h2>
              <p>Precio: ${servicio.precio}</p>
              <button onClick={() => handleAgregarAlCarrito(servicio)} className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] mt-4 transition-colors duration-300 ease-in-out hover:bg-secondary-dash">
                Añadir al carrito
              </button>
            </div>
          ))}
  
          {/* Servicio Extra */}
          <div className="p-4 rounded-lg shadow-xl bg-primary-seccion">
            <h2 className="text-lg font-semibold mb-2">Nombre: Servicio Extra</h2>
            <p>Precio: ${precioExtra}</p>
            <input
              type="number"
              value={precioExtra}
              onChange={(e) => setPrecioExtra(Number(e.target.value))}
              className="border rounded-lg px-3 py-1 mt-2 w-full"
            />
            <button onClick={() => handleAgregarAlCarrito({ id: 'extra', nombre: 'Servicio Extra', precio: precioExtra })} className="bg-secondary-card text-primary-white px-4 py-2 rounded-[10px] mt-4 transition-colors duration-300 ease-in-out hover:bg-secondary-dash">
              Añadir al carrito
            </button>
          </div>
        </div>
  
        <Link href="/dashboard/servicios/servicios_paciente/carrito">
          <button className="bg-secondary-card text-primary-white px-5 py-2 rounded-[10px] mt-4 transition-colors duration-300 ease-in-out hover:bg-secondary-dash">
            Ir al carrito
          </button>
        </Link>
      </div>
    );
  };
  
export default ServiciosPacientePage;
