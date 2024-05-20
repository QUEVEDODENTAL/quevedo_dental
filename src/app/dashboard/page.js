import DashInicio from '@/components/DashInicio';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4 mt-4">¡Bienvenido, Doctor!</h1>
      <div>
        <DashInicio />
      </div>
    </div>
  );
}

export default Dashboard;
