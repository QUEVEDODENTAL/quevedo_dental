import DashInicio from '@/components/DashInicio';
import React from 'react';

const Registrar = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%]">
      <h1 className="text-3xl font-bold mb-4 mt-4">¡Bienvenido, Doctor!</h1>
      <div>
        <DashInicio />
      </div>
    </div>
  );
}

export default Registrar;
