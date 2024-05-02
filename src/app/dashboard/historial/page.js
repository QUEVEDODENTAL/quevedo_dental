import React from 'react';
import { FaUserAlt, FaBookMedical, FaLock, FaBars, FaIdCardAlt, FaCalendarAlt } from "react-icons/fa";
import { FaHouse, FaAddressBook, FaAddressCard, FaHospitalUser } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col justify-start items-center md:pl-8">
      <h1 className="text-3xl font-bold mb-4 mt-4">¡Historial!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative bg-primary-info p-4 text-center rounded-lg">
        <FaAddressCard className="absolute top-0 left-0 mt-2 ml-2" size={30} />
          <h2 className="text-xl font-bold mb-2">Pacientes</h2>
          <p>Ver datos de los</p>
          <p>pacientes</p>
        </div>
        <div className="relative bg-secondary-font p-4 text-center rounded-lg">
        <FaAddressBook className="absolute top-0 left-0 mt-2 ml-2" size={30} />
          <h2 className="text-xl font-bold mb-2">Historial</h2>
          <p>Ver historial de las citas</p>
          <p>realizadas</p>
        </div>
        <div className="relative bg-primary-red p-4 text-center rounded-lg">
        <FaCalendarAlt className="absolute top-0 left-0 mt-2 ml-2" size={30} />
          <h2 className="text-xl font-bold mb-2">Agenda</h2>
          <p>Presiona para agendar</p>
          <p>o modificar alguna cita</p>
        </div>
        <div className="relative bg-secondary-icon p-4 text-center rounded-lg hidden md:block">
        <FaAddressCard className="absolute top-0 left-0 mt-2 ml-2" size={30} />
          <h2 className="text-xl font-bold">Ultimo</h2>
          <h2 className="text-xl font-bold mb-2">paciente</h2>
          <p>Ver datos del</p>
          <p>ultimo paciente</p>
        </div>
        <div className="relative bg-secondary-button p-4 text-center rounded-lg hidden md:block">
        <FaBookMedical className="absolute top-0 left-0 mt-2 ml-2" size={30} />
          <h2 className="text-xl font-bold">Consulta</h2>
          <h2 className="text-xl font-bold mb-2">siguiente</h2>
          <p>Contenido de la siguiente</p>
          <p>consulta</p>
        </div>
        <div className="relative bg-secondary-icon p-4 text-center rounded-lg hidden md:block">
        <FaIdCardAlt className="absolute top-0 left-0 mt-2 ml-2" size={30} />
          <h2 className="text-xl font-bold mb-2">Cuestionario</h2>
          <p>Realizar cuestionario</p>
          <p>Para el paciente</p>
        </div>
        <div className="relative col-span-3 bg-primary-info p-4 text-center rounded-lg hidden md:block">
        <FaHospitalUser className="absolute top-0 left-0 mt-2 ml-2" size={30} />
          <h2 className="text-xl font-bold mb-2">Registrar a nuevo doctor o empleado</h2>
          <p>Presiona para registrar a nuevo doctor o empleado</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
