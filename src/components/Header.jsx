'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes, FaRegUserCircle, FaTooth } from 'react-icons/fa';
import { FaHouse, FaAddressCard } from "react-icons/fa6";
import Link from 'next/link';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpenHeight, setMenuOpenHeight] = useState('h-20');
  const offsetValue = -1000; // desplazar no funciona

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setTimeout(() => {
      setMenuOpenHeight(menuOpen ? 'h-20' : 'h-auto');
    }, 0);
  };

  return (
<<<<<<< HEAD
    <header className="flex flex-col sticky items-center min-w-full justify-end min-h-1">
      <div className="flex items-center min-w-full justify-between p-2 bg-primary-info ">
        <div className="p-3"><p className="text-sm flex text-text-blackText"><MapPin size={16} className='mx-2' /> Valle dorado, valle de los sirios, Ensenada, Baja California</p></div>
        <div className="flex">
          <div className="p-3"><p className="text-sm flex"><Phone size={16} className='mx-2' /> +52 646 256 3625</p></div>
          <div className="p-3">|</div>
          <div className="p-3"><p className="text-sm flex"><Mail size={16} className='mx-2' /> doctor@consultoriomx.com</p></div>
=======
    <header className={`fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between items-center min-w-full bg-secondary-card text-primary-seccion p-4 transition-height duration-200 ease-in-out ${menuOpenHeight}`}>
      <div className={`flex items-center transition-all w-full ${menuOpen ? 'pb-4 md:pb-0' : ''}`}>
        <Link href="/">
          <h1 className="text-3xl text-gray-800 whitespace-nowrap">QUEVEDO<b>DENTAL</b></h1>
        </Link>
        <div className="flex-grow" />
        <div className={`md:hidden ${menuOpen ? 'hidden' : ''}`}>
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <FaBars size={30} />
          </button>
>>>>>>> QA
        </div>
      </div>
      <div className={`md:flex md:items-center ${menuOpen ? 'flex flex-col' : 'hidden'}`}>
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-4 p-4 justify-start">
            <li className="text-left hover:scale-125 transition-transform flex items-center justify-start">
              <FaHouse className="mr-1" />
              <Link href="/" scroll={true} offset={offsetValue}>Inicio</Link>
            </li>
            <li className="text-left hover:scale-125 transition-transform flex items-center justify-start">
              <FaTooth className="mr-1" />
              <Link href="/#servicios" scroll={true} offset={offsetValue}>Servicios</Link>
            </li>
            <li className="text-left hover:scale-125 transition-transform flex items-center justify-start">
              <FaRegUserCircle className="mr-1" />
              <Link href="/#sobre-nosotros" scroll={true} offset={offsetValue}>Sobre Nosotros</Link>
            </li>
            <li className="text-left hover:scale-125 transition-transform flex items-center justify-start">
              <FaAddressCard className="mr-1" />
              <Link href="/#nuestro-equipo" scroll={true} offset={offsetValue}>Nuestro Equipo</Link>
            </li>
            <li className="text-left hover:scale-125 transition-transform flex items-center justify-start">
              <FaAddressCard className="mr-1" />
              <Link href="/#nuestro-equipo" scroll={true} offset={offsetValue}>Nuestro Equipo</Link>
            </li>
            <li className="text-left hover:scale-125 transition-transform flex items-center justify-start">
              <FaAddressCard className="mr-1" />
              <Link href="/admin" scroll={true} offset={offsetValue}>Consulta</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex md:items-center justify-start font-sans p-2">
          <ul className="md:flex md:space-x-4 whitespace-nowrap">
            <li className="transition-transform transform hover:scale-105 flex items-center justify-start">
              <Link href="/" scroll={true} offset={offsetValue}>Inicio</Link>
            </li>
            <li className="transition-transform transform hover:scale-105 flex items-center justify-start">
              <Link href="/#servicios" scroll={true} offset={offsetValue}>Servicios</Link>
            </li>
            <li className="transition-transform transform hover:scale-105 flex items-center justify-start">
              <Link href="/#sobre-nosotros" scroll={true} offset={offsetValue}>Sobre Nosotros</Link>
            </li>
            <li className="transition-transform transform hover:scale-105 flex items-center justify-start">
              <Link href="/#nuestro-equipo" scroll={true} offset={offsetValue}>Nuestro Equipo</Link>
            </li>
            <li className="transition-transform transform hover:scale-105 flex items-center justify-start">
              <Link href="/admin" scroll={true} offset={offsetValue}>Consulta</Link>
            </li>
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-0 right-0 m-4 md:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
          >
            <FaTimes size={30} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
