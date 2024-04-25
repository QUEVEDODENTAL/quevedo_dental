'use client'
import React, { useState } from 'react';
import { FaUserAlt, FaBookMedical, FaLock, FaBars } from "react-icons/fa";
import { FaHouse, FaAddressBook, FaAddressCard, FaHospitalUser } from "react-icons/fa6";

const SliderBar = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(true);

  const toggleSliderVisibility = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  return (
    <div className={`relative bg-gray-800 text-white h-screen w-64 flex flex-col bg-secondary-dash text-secondary-icon ${isSliderVisible ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="p-4 text-center">
        LOGO
      </div>
      <ul className="flex-grow">
        <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
          <li><FaHouse/></li>
          <li><a href="#" className="block ml-2 transition-all hover:text-yellow-500">Inicio</a></li>
        </div>
        <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
          <li><FaAddressBook/></li>
          <li><a href="#" className="block ml-2 transition-all hover:text-yellow-500">Historial</a></li>
        </div>
        <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
          <li><FaAddressCard/></li>
          <li><a href="#" className="block ml-2 transition-all hover:text-yellow-500">Pacientes</a></li>
        </div>
        <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
          <li><FaBookMedical/></li>
          <li><a href="#" className="block ml-2 transition-all hover:text-yellow-500">Consultas</a></li>
        </div>
        <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
          <li><FaUserAlt/></li>
          <li><a href="#" className="block ml-2 transition-all hover:text-yellow-500">Perfil</a></li>
        </div>
        <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
          <li><FaHospitalUser/></li>
          <li><a href="/admin/registrar" className="block ml-2 transition-all hover:text-yellow-500">Registrar</a></li>
        </div>
      </ul>
      <div className="absolute bottom-0 w-full p-4 flex items-center pl-10 transition-transform duration-300 ease-in-out hover:scale-110">
        <FaLock className="mr-2"/>
        <a href="/admin" className="block transition-all hover:text-yellow-500">Salir</a>
      </div>
      <div className="absolute top-4 right-4 cursor-pointer md:hidden" onClick={toggleSliderVisibility}>
        <FaBars className="text-white text-xl" />
      </div>
    </div>
  );
};

export default SliderBar;
