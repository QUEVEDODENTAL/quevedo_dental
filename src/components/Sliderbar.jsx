'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUserAlt, FaLock, FaBars, FaIdCardAlt } from "react-icons/fa";
import { FaHouse, FaAddressCard, FaHospitalUser } from "react-icons/fa6";

const SliderBar = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(true);

  const toggleSliderVisibility = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  return (
    <div className="fixed top-0 left-0 bottom-0">
      <div className="fixed top-4 left-4 cursor-pointer">
        <FaBars className="text-white text-xl" onClick={toggleSliderVisibility} />
      </div>
      <div className={`fixed text-white h-screen w-64 flex flex-col bg-secondary-dash text-secondary-icon transition-transform duration-500 ${isSliderVisible ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className=" absolute top-4 right-4 cursor-pointer" onClick={toggleSliderVisibility}>
          <FaBars className="text-white text-xl" />
        </div>
        <div className="p-4 text-center">
          LOGO
        </div>
        <ul className="flex-grow">
          <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <li><FaHouse /></li>
            <li><Link href="/dashboard" className="block ml-2 transition-all hover:text-yellow-500">Inicio</Link></li>
          </div>
          <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <li><FaAddressCard /></li>
            <li><Link href="/dashboard/pacientes" className="block ml-2 transition-all hover:text-yellow-500">Pacientes</Link></li>
          </div>
          <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <li><FaUserAlt /></li>
            <li><Link href="/dashboard/perfil" className="block ml-2 transition-all hover:text-yellow-500">Perfil</Link></li>
          </div>
          <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <li><FaHospitalUser /></li>
            <li><Link href="/dashboard/registrar" className="block ml-2 transition-all hover:text-yellow-500">Registrar</Link></li>
          </div>
          <div className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <li><FaIdCardAlt /></li>
            <li><Link href="/dashboard/cuestionario" className="block ml-2 transition-all hover:text-yellow-500">Cuestionario</Link></li>
          </div>
          <div className="bottom-0 mt-[80%] p-4 flex items-center pl-10 transition-transform duration-300 ease-in-out hover:scale-110">
          <FaLock className="mr-2" />
          <Link href="/admin" className="block transition-all hover:text-yellow-500">Salir</Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SliderBar;
