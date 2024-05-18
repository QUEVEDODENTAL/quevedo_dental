import React from 'react';
import TarjetaUsuario from '@/components/TarjetaUsuario';

const Pacientes = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-4 px-4 py-8">
      <h1 className="text-3xl font-bold mb-10">¡Pacientes!</h1>
      <div className="w-full md:w-[70%]">
        <TarjetaUsuario nombre="Juan Pérez" edad={35} href="/paciente/juan-perez" />
        <TarjetaUsuario nombre="María López" edad={42} href="/paciente/maria-lopez" />
        <TarjetaUsuario nombre="Carlos García" edad={28} href="/paciente/carlos-garcia" />
        <TarjetaUsuario nombre="Juan Pérez" edad={35} href="/paciente/juan-perez" />
        <TarjetaUsuario nombre="María López" edad={42} href="/paciente/maria-lopez" />
        <TarjetaUsuario nombre="Carlos García" edad={28} href="/paciente/carlos-garcia" />
        <TarjetaUsuario nombre="Juan Pérez" edad={35} href="/paciente/juan-perez" />
        <TarjetaUsuario nombre="María López" edad={42} href="/paciente/maria-lopez" />
        <TarjetaUsuario nombre="Carlos García" edad={28} href="/paciente/carlos-garcia" />
      </div>
    </div>
  );
}

export default Pacientes;
