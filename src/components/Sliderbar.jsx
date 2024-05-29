'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaUserAlt, FaLock, FaBars, FaIdCardAlt } from "react-icons/fa";
import { FaHouse, FaAddressCard, FaHospitalUser, FaBookMedical } from "react-icons/fa6";
import { signOut } from 'next-auth/react';

const SliderBar = ({ isSliderVisible, toggleSliderVisibility }) => {

  const handleSignOut = async () => {
    try {
      const data = await signOut({ redirect: false, callbackUrl: '/auth/login' });
      window.location.href = data.url;
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  return (
    <div className="fixed top-0 left-0 bottom-0 z-10">
      <div className="fixed top-4 left-4 cursor-pointer bg-secondary-dash p-2 rounded-lg text-secondary-icon">
        <FaBars className="text-xl" onClick={toggleSliderVisibility} />
      </div>
      <div className={`fixed text-white h-[100%] w-full sm:w-64 flex flex-col bg-secondary-dash text-secondary-icon transition-transform duration-500 ${isSliderVisible ? 'translate-x-0' : '-translate-x-full'}`}>

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
            <Link href="/dashboard/mi_perfil" className="block ml-2 transition-all hover:text-yellow-500">Perfil</Link>
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
          <li className="bottom-0 mt-[20%] p-4 flex items-center pl-10 transition-transform duration-300 ease-in-out hover:scale-110">
            <FaLock className="mr-2" />
            <span onClick={handleSignOut} className="block transition-all cursor-pointer">Salir</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SliderBar;
