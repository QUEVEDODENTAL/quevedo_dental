import React from 'react';

export const DashBoard = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center'>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-primary-red text-white p-4 text-center rounded-lg w-24 h-24">Historial</div>
        <div className="bg-primary-red text-white p-4 text-center rounded-lg w-24 h-24">Pacientes</div>
        <div className="bg-primary-red text-white p-4 text-center rounded-lg w-24 h-24">Calendario</div>
      </div>
    </div>
  );
}

export default DashBoard;
