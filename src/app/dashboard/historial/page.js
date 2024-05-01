// pages/dashboard/pages/historial.js
import React from 'react';

const HistorialPage = () => {
  const historialData = [
    { id: 1, date: '2024-04-01', description: 'Consulta médica' },
    { id: 2, date: '2024-04-15', description: 'Análisis de sangre' },
    { id: 3, date: '2024-04-30', description: 'Seguimiento del tratamiento' },
  ];

  return (
    <div>
      <h1>Historial</h1>
      <ul>
        {historialData.map(item => (
          <li key={item.id}>
            <strong>{item.date}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistorialPage;
