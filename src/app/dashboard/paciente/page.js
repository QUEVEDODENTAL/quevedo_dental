import Layout from '@/components/Layout';
import Servicio from '@/components/Servicio'; // Importamos el componente Servicio
import React from 'react'; // Importamos React

const serviciosData = [
  // Datos de los servicios...
];

const Servicios = () => {
  const [carrito, setCarrito] = useState([]);

  const agregarServicio = (servicio) => {
    if (!carrito.find(item => item.id === servicio.id)) {
      setCarrito([...carrito, servicio]);
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviciosData.map(servicio => (
          <Servicio
            key={servicio.id}
            nombre={servicio.nombre}
            precio={servicio.precio}
            agregarServicio={() => agregarServicio(servicio)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Servicios;
