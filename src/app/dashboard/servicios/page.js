import React from 'react';
import { ServiciosProvider } from '@/components/ContextoServicio';
import ServicePage from '@/components/Servicio';
const DashboardServicios = () => {
  return (
    <ServiciosProvider>
      <ServicePage/>
    </ServiciosProvider>
  );
};

export default DashboardServicios;
