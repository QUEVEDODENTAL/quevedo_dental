import React from 'react';
import Image from 'next/image';

const PerfilMariaLopez = () => {
  const usuario = {
    nombre: "María López",
    edad: 42,
    ocupacion: "Médico",
    direccion: "Avenida Principal 456",
    ciudad: "Ciudad de Ejemplo",
    pais: "País de Ejemplo",
    imagen: "/assets/paciente.jpg",
    carrito: "/ruta/del/carrito_carlos"
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 space-y-4 md:space-y-0 md:space-x-4">
      {/* Sección de la imagen */}
      <div className="w-full md:w-1/3 flex items-center justify-center overflow-hidden">
        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
          <Image 
            src={usuario.imagen} 
            alt="Foto del paciente" 
            layout="responsive"
            width={400} 
            height={500}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
      
      {/* Sección de los datos del perfil */}
      <div className="w-full md:w-1/3 flex flex-col bg-primary-seccion rounded-lg p-4 md:h-96 overflow-hidden">
        <h1 className="text-center text-xl mb-4">Perfil de {usuario.nombre}</h1>
        <p className="mb-4"><strong>Nombre:</strong> {usuario.nombre}</p>
        <p className="mb-4"><strong>Edad:</strong> {usuario.edad}</p>
        <p className="mb-4"><strong>Ocupación:</strong> {usuario.ocupacion}</p>
        <p className="mb-4"><strong>Dirección:</strong> {usuario.direccion}</p>
        <p className="mb-4"><strong>Ciudad:</strong> {usuario.ciudad}</p>
        <p className="mb-4"><strong>País:</strong> {usuario.pais}</p>
      </div>

      {/* Sección del carrito */}
      <div className="w-full md:w-1/3 flex flex-col bg-primary-seccion rounded-lg p-4 md:h-96 overflow-hidden">
        <h2 className="text-center text-xl mb-4">Carrito</h2>
        <div className="flex-grow"></div>
        <p className="self-start rounded-md overflow-hidden transition-colors duration-300 ease-in-out bg-secondary-button hover:bg-secondary-dash">
          <a href={usuario.carrito} className="text-primary-white block px-4 py-2">PDF del carrito</a>
        </p>
      </div>
    </div>
  );
}

export default PerfilMariaLopez;
