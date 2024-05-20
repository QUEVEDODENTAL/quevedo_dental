'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUserAlt, FaLock, FaBars, FaIdCardAlt, FaShoppingCart } from "react-icons/fa";
import { FaHouse, FaAddressCard, FaHospitalUser, FaBookMedical } from "react-icons/fa6";
import { signOut } from 'next-auth/react'; // Importa la función de cierre de sesión

const SliderBar = () => {
  const [isSliderVisible, setIsSliderVisible] = useState(true);

  const toggleSliderVisibility = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/auth/login' });
    window.location.href = data.url;
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 z-10">
      <div className="fixed top-4 left-4 cursor-pointer bg-secondary-dash p-2 rounded-lg text-secondary-icon">
        <FaBars className="text-xl" onClick={toggleSliderVisibility} />
      </div>
      <div className={`fixed text-white h-[100%] w-64 flex flex-col bg-secondary-dash text-secondary-icon transition-transform duration-500 ${isSliderVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleSliderVisibility}>
          <FaBars className="text-xl" />
        </div>
        <div className="p-4 text-center">
          LOGO
        </div>
        <ul className="flex-grow">
          <li className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <FaHouse />
            <Link href="/dashboard" className="block ml-2 transition-all hover:text-yellow-500">Inicio</Link>
          </li>
          <li className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <FaAddressCard />
            <Link href="/dashboard/pacientes" className="block ml-2 transition-all hover:text-yellow-500">Pacientes</Link>
          </li>
          <li className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <FaUserAlt />
            <Link href="/dashboard/perfil" className="block ml-2 transition-all hover:text-yellow-500">Perfil</Link>
          </li>
          <li className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <FaHospitalUser />
            <Link href="/dashboard/registrar" className="block ml-2 transition-all hover:text-yellow-500">Registrar</Link>
          </li>
          <li className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
            <FaIdCardAlt />
            <Link href="/dashboard/cuestionario" className="block ml-2 transition-all hover:text-yellow-500">Cuestionario</Link>
          </li>
          <li className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
          <FaBookMedical />
            <Link href="/dashboard/servicios" className="block ml-2 transition-all hover:text-yellow-500">Servicios</Link>
          </li>
          <li className="p-4 pl-10 flex items-center transition-transform duration-300 ease-in-out hover:scale-110">
          <FaShoppingCart />
            <Link href="/dashboard/carrito" className="block ml-2 transition-all hover:text-yellow-500">Carrito</Link>
          </li>
          <li className="bottom-0 mt-[50%] p-4 flex items-center pl-10 transition-transform duration-300 ease-in-out hover:scale-110">
            <FaLock className="mr-2" />
            <a onClick={handleSignOut} className="block transition-all hover:text-yellow-500 cursor-pointer">Salir</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SliderBar;
