import React from 'react';
import Link from 'next/link';
import { FaBookMedical, FaIdCardAlt, FaCalendarAlt } from "react-icons/fa";
import { FaAddressBook, FaAddressCard, FaHospitalUser } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4 mt-4">¡Bienvenido, Doctor!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative bg-primary-info p-4 text-center rounded-lg transition-transform duration-300 hover:scale-105">
          <Link href="/dashboard/pacientes">
            <FaAddressCard className="absolute top-0 left-0 mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold mb-2">Pacientes</h2>
            <p>Ver datos de los</p>
            <p>pacientes</p>
          </Link>
        </div>
        <div className="relative bg-secondary-font p-4 text-center rounded-lg transition-transform duration-300 hover:scale-105">
          <Link href="/dashboard/historial">
            <FaAddressBook className="absolute top-0 left-0 mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold mb-2">Historial</h2>
            <p>Ver historial de las citas</p>
            <p>realizadas</p>
          </Link>
        </div>
        <div className="relative bg-primary-red p-4 text-center rounded-lg transition-transform duration-300 hover:scale-105">
          <Link href="/dashboard/agenda">
            <FaCalendarAlt className="absolute top-0 left-0 mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold mb-2">Agenda</h2>
            <p>Presiona para agendar</p>
            <p>o modificar alguna cita</p>
          </Link>
        </div>
        <div className="relative bg-secondary-icon p-4 text-center rounded-lg transition-transform duration-300 hover:scale-105">
          <Link href="/dashboard/pacientes">
            <FaAddressCard className="absolute top-0 left-0 mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold">Ultimo</h2>
            <h2 className="text-xl font-bold mb-2">paciente</h2>
            <p>Ver datos del</p>
            <p>ultimo paciente</p>
          </Link>
        </div>
        <div className="relative bg-secondary-button p-4 text-center rounded-lg transition-transform duration-300 hover:scale-105">
          <Link href="/dashboard/consultas">
            <FaBookMedical className="absolute top-0 left-0 mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold">Consulta</h2>
            <h2 className="text-xl font-bold mb-2">siguiente</h2>
            <p>Contenido de la siguiente</p>
            <p>consulta</p>
          </Link>
        </div>
        <div className="relative bg-secondary-icon p-4 text-center rounded-lg hidden md:block transition-transform duration-300 hover:scale-105">
          <Link href="/dashboard/cuestionario">
            <FaIdCardAlt className="absolute top-0 left-0 mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold mb-2">Cuestionario</h2>
            <p>Realizar cuestionario</p>
            <p>Para el paciente</p>
          </Link>
        </div>
        <div className="relative col-span-3 bg-primary-info p-4 text-center rounded-lg hidden md:block transition-transform duration-300 hover:scale-105">
          <Link href="/admin/registrar">
            <FaHospitalUser className="absolute top-0 left-0 mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold mb-2">Registrar a nuevo doctor o empleado</h2>
            <p>Presiona para registrar a nuevo doctor o empleado</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
