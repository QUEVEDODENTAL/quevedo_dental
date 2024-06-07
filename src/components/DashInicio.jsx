import React from 'react';
import Link from 'next/link';
import { FaAddressCard, FaAddressBook, FaIdCardAlt, FaHospitalUser } from 'react-icons/fa';

const DashInicio = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-12'>
      <div className="bg-secondary-icon p-4 text-center rounded-lg transition-transform duration-300 hover:scale-105 relative h-48 flex flex-col justify-center items-center">
        <Link href="/dashboard/pacientes">
          <div>
            <FaAddressCard className="mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold mb-2">Pacientes</h2>
            <p>Ver datos de los</p>
            <p>pacientes</p>
          </div>
        </Link>
      </div>
      <div className="bg-secondary-icon p-4 text-center rounded-lg transition-transform duration-300 hover:scale-105 relative h-48 flex flex-col justify-center items-center">
        <Link href="/dashboard/servicios">
          <div>
            <FaAddressBook className="mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold mb-2">Servicios</h2>
            <p>Ver servicios disponibles</p>
            <p>realizadas</p>
          </div>
        </Link>
      </div>
      <div className="bg-secondary-icon p-4 text-center rounded-lg transition-transform duration-300 hover:scale-105 relative h-48 flex flex-col justify-center items-center">
        <Link href="/dashboard/mi_perfil">
          <div>
            <FaAddressCard className="mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold mb-2"> Perfil</h2>
            <p>Ver información de</p>
            <p>perfil de usuario</p>
          </div>
        </Link>
      </div>
      <div className="bg-secondary-icon p-4 text-center rounded-lg transition-transform duration-300 hover:scale-105 relative h-48 flex flex-col justify-center items-center">
        <Link href="/dashboard/pacientes/juan-perez">
          <div>
            <FaAddressCard className="mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold">Último</h2>
            <h2 className="text-xl font-bold mb-2">paciente</h2>
            <p>Ver datos del</p>
            <p>último paciente</p>
          </div>
        </Link>
      </div>
      <div className="bg-secondary-icon p-4 text-center rounded-lg hidden md:block transition-transform duration-300 hover:scale-105 col-span-2 relative h-48 flex flex-col justify-center items-center">
        <Link href="/dashboard/historial">
          <div>
            <FaIdCardAlt className="mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold mb-2">Historial</h2>
            <p>Realizar cuestionario</p>
            <p>Para el paciente</p>
          </div>
        </Link>
      </div>
      <div className="bg-secondary-icon p-4 text-center rounded-lg hidden md:block transition-transform duration-300 hover:scale-105 col-span-3 relative h-48 flex flex-col justify-center items-center">
        <Link href="/dashboard/registrar">
          <div>
            <FaHospitalUser className="mt-2 ml-2" size={30} />
            <h2 className="text-xl font-bold mb-2">Nuevo doctor o empleado</h2>
            <p>Presiona para registrar a nuevo doctor o empleado</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DashInicio;