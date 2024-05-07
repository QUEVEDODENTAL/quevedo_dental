'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUserAlt, FaBookMedical, FaLock, FaBars, FaIdCardAlt } from "react-icons/fa";
import { FaHouse, FaAddressBook, FaAddressCard, FaHospitalUser } from "react-icons/fa6";

const SliderBar = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(true);

  const toggleSliderVisibility = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  return (
    <div>
      <div className="md:hidden fixed top-4 left-4 cursor-pointer">
        <FaBars className="text-white text-xl" onClick={toggleSliderVisibility} />
      </div>

      <div className={`relative bg-gray-800 text-white h-screen w-64 flex flex-col bg-secondary-dash text-secondary-icon transition-transform duration-500 ${isSliderVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 text-center">
          LOGO
        </div>
        <ul className="flex-grow">
          <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <li><FaHouse /></li>
            <li><Link href="/dashboard" className="block ml-2 transition-all hover:text-yellow-500">Inicio</Link></li>
          </div>
          <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <li><FaAddressBook /></li>
            <li><Link href="/dashboard/historial" className="block ml-2 transition-all hover:text-yellow-500">Historial</Link></li>
          </div>
          <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <li><FaAddressCard /></li>
            <li><Link href="/dashboard/pacientes" className="block ml-2 transition-all hover:text-yellow-500">Pacientes</Link></li>
          </div>
          <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <li><FaBookMedical /></li>
            <li><Link href="/dashboard/consultas" className="block ml-2 transition-all hover:text-yellow-500">Consultas</Link></li>
          </div>
          <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <li><FaUserAlt /></li>
            <li><Link href="/dashboard/perfil" className="block ml-2 transition-all hover:text-yellow-500">Perfil</Link></li>
          </div>
          <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <li><FaHospitalUser /></li>
            <li><Link href="/admin/registrar" className="block ml-2 transition-all hover:text-yellow-500">Registrar</Link></li>
          </div>
          <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <li><FaIdCardAlt /></li>
            <li><Link href="/dashboard/cuestionario" className="block ml-2 transition-all hover:text-yellow-500">Cuestionario</Link></li>
          </div>
        </ul>
        <div className="absolute bottom-0 w-full p-4 flex items-center pl-10 transition-transform duration-300 ease-in-out hover:scale-110">
          <FaLock className="mr-2" />
          <Link href="/admin" className="block transition-all hover:text-yellow-500">Salir</Link>
        </div>

        <div className="md:hidden absolute top-4 right-4 cursor-pointer" onClick={toggleSliderVisibility}>
          <FaBars className="text-white text-xl" />
        </div>
      </div>
    </div>
  );
};

export default SliderBar;
