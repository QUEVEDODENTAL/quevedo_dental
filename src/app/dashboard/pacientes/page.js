import TarjetaUsuario from '@/components/TarjetaUsuario';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-4 px-4 py-8">
      <h1 className="text-3xl font-bold mb-10">¡Pacientes!</h1>
      <div className="p-5 w-[200%] min-w-screen bg-primary-info rounded-lg">
        <TarjetaUsuario/>
        </div>
      
    </div>
  );
}

export default Dashboard;
