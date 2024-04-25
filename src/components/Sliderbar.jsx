import React from 'react';
import { FaUserAlt, FaBookMedical, FaLock } from "react-icons/fa";
import { FaHouse, FaAddressBook, FaAddressCard } from "react-icons/fa6";

const SliderBar = () => {
  return (
    <div className="relative bg-gray-800 text-white h-screen w-64 flex flex-col bg-secondary-dash text-secondary-icon">
      <div className="p-4 text-center">
        LOGO
      </div>
      <ul className="flex-grow">
        <li className="p-4 pl-10 flex items-center"><FaHouse/><a href="#" className="block ml-2">Inicio</a></li>
        <li className="p-4 pl-10 flex items-center"><FaAddressBook/><a href="#" className="block ml-2">Historial</a></li>
        <li className="p-4 pl-10 flex items-center"><FaAddressCard/><a href="#" className="block ml-2">Pacientes</a></li>
        <li className="p-4 pl-10 flex items-center"><FaBookMedical/><a href="#" className="block ml-2">Consultas</a></li>
        <li className="p-4 pl-10 flex items-center"><FaUserAlt/><a href="#" className="block ml-2">Perfil</a></li>
      </ul>
      <div className="absolute bottom-0 w-full p-4 flex items-center pl-10">
        <FaLock className="mr-2"/>
        <a href="#" className="block">Salir</a>
      </div>
    </div>
  );
};

export default SliderBar;
