import React from 'react';
import { FaEnvelopeOpenText, FaFileArchive, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

const Perfil = () => {
  const personalInfo = {
    nombre: "Carlos García",
    edad: 28,
    sexo: "Masculino",
    telefono: "646123456",
    consulta: "Extracción de diente",
    ultimaCita: "29-08-2012"
  };

  return (
    <div className="flex flex-col items-center h-screen w-full text-base md:text-lg">
      <div className="mt-10 w-full max-w-4xl flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 p-4">
          <p className="text-lg md:text-xl font-bold text-center mb-4">Información personal</p>
          <div className="flex flex-col">
            {/* Nombre Completo */}
            <div className="mb-2">
              <b>Nombre:</b> {personalInfo.nombre}
            </div>
            {/* Edad */}
            <div className="mb-2">
              <b>Edad:</b> {personalInfo.edad}
            </div>
            {/* Sexo */}
            <div className="mb-2">
              <b>Sexo:</b> {personalInfo.sexo}
            </div>
            {/* Teléfono */}
            <div className="mb-2">
              <b>Teléfono:</b> {personalInfo.telefono}
            </div>
            {/* Consulta */}
            <div className="mb-2">
              <b>Consulta:</b> {personalInfo.consulta}
            </div>
            {/* Última cita */}
            <div className="mb-2">
              <b>Última cita:</b> {personalInfo.ultimaCita}
            </div>
          </div>
        </div>
        <div className="md:w-[40%] p-4 bg-secondary-dash2 shadow-xl rounded-xl">
          <p className="text-lg md:text-xl font-bold text-center mb-4">Menú de opciones</p>
          <div className="flex flex-col items-center">
            <button className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded">Actualizar historial</button>
            <button className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded">Agregar servicio</button>
            <button className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded">Imprimir PDF</button>
            <button className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded">Agendar</button>
            <div className="flex justify-around mt-4 w-full">
              <FaEnvelopeOpenText className=" text-4xl text-blue-500" />
              <FaFileArchive className="text-4xl text-blue-500" />
              <FaCalendarAlt className="text-4xl text-blue-500" />
              <FaClipboardList className="text-4xl text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
