import React from 'react';
import { ServiciosProvider } from '@/components/ContextoServicio';
import ServiciosPacientePage from '@/components/ServiciosPaciente';

const DashboardServiciosPaciente = () => {
  return (
    <ServiciosProvider>
      <ServiciosPacientePage/>
    </ServiciosProvider>
  );
};

export default DashboardServiciosPaciente;
