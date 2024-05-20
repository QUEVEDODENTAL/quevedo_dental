'use client'
import React, { useState } from 'react';
import TarjetaUsuario from '@/components/TarjetaUsuario';
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Pacientes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const pacientes = [
    { name: 'Juan Pérez', age: 35, sex:'Masculino', phone: '646123456',consultation:'Extraccion de diente',lastappointmenth:'29-08-2012',href: '/dashboard/pacientes/juan-perez' },
    { name: 'María López', age: 42, sex:'Masculino', phone: '646123456',consultation:'Extraccion de diente',lastappointmenth:'29-08-2012', href: '/dashboard/pacientes/maria-lopez' },
    { name: 'Carlos García', age: 28, sex:'Masculino',phone: '646123456',consultation:'Extraccion de diente',lastappointmenth:'29-08-2012', href: '/dashboard/pacientes/carlos-garcia' },
    { name: 'Juan Pérez',age: 35,  sex:'Masculino', phone: '646123456',consultation:'Extraccion de diente',lastappointmenth:'29-08-2012', href: '/dashboard/pacientes/juan-perez'},
    { name: 'María López', age: 42, sex:'Masculino', phone: '646123456',consultation:'Extraccion de diente',lastappointmenth:'29-08-2012', href: '/dashboard/pacientes/maria-lopez' },
    { name: 'Carlos García', age: 28, sex:'Masculino', phone: '646123456',consultation:'Extraccion de diente',lastappointmenth:'29-08-2012', href: '/dashboard/pacientes/carlos-garcia'}, 
    { name: 'Juan Pérez', age: 35, sex:'Masculino', phone: '646123456',consultation:'Extraccion de diente',lastappointmenth:'29-08-2012', href: '/dashboard/pacientes/juan-perez' },
    { name: 'María López', age: 42, sex:'Masculino', phone: '646123456',consultation:'Extraccion de diente',lastappointmenth:'29-08-2012', href: '/dashboard/pacientes/maria-lopez' },
    { name: 'Carlos García', age: 28, sex:'Masculino', phone: '646123456',consultation:'Extraccion de diente',lastappointmenth:'29-08-2012', href: '/dashboard/pacientes/carlos-garcia' },
  ];

  const filteredPacientes = pacientes.filter(paciente =>
    paciente.name.toLowerCase().includes(searchTerm.toLowerCase())
    
  );

  return (
    <div className="flex flex-col justify-center items-center mx-4 px-4 py-8">
      <h1 className="text-3xl font-bold mb-10">¡Pacientes!</h1>
      <div className='relative mb-4 w-full md:w-[70%]'>
      <input
        type="text"
        placeholder="Buscar paciente..."
        className="w-full p-2 border border-gray-300 rounded pr-10"

        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <FontAwesomeIcon
      icon={faSearch}
      className='absolute right-3 top-3'
      /> 
      </div>
      <div className="w-full md:w-[70%]">
        {filteredPacientes.map((paciente, index) => (
          <TarjetaUsuario
            key={index}
            name={paciente.name}
            age={paciente.age}
            sex={paciente.sex}
            phone={paciente.phone}
            consultation={paciente.consultation}
            lastappointment={paciente.lastappointment}
            href={paciente.href}
          />
        ))}
      </div>
    </div>
  );
}

export default Pacientes;
