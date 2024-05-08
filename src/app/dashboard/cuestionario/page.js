'use client'
import React, { useState } from 'react';

function DentistQuestions() {
  const [respuestas, setRespuestas] = useState({
    dolorDeMuelas: '',
    frecuenciaCepillado: '',
    frecuenciaHiloDental: '',
    sensibilidad: '',
    sangradoEncias: '',
    hábitosMasticación: '',
    traumatismoBucal: '',
    problemasMandibulares: '',
    satisfaccion: '',
    preguntasAdicionales: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRespuestas({
      ...respuestas,
      [name]: value
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Preguntas típicas durante una cita con el dentista:</h2>
      <ol className="list-decimal pl-5">
        <li className="mb-2">
          ¿Has experimentado algún dolor de muelas recientemente?
          <input
            className="block w-full border-gray-300 rounded-md shadow-sm mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="text"
            name="dolorDeMuelas"
            value={respuestas.dolorDeMuelas}
            onChange={handleInputChange}
          />
        </li>
        <li className="mb-2">
          ¿Con qué frecuencia te cepillas los dientes al día?
          <input
            className="block w-full border-gray-300 rounded-md shadow-sm mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            type="text"
            name="frecuenciaCepillado"
            value={respuestas.frecuenciaCepillado}
            onChange={handleInputChange}
          />
        </li>
        {/* Resto de las preguntas con campos de entrada */}
      </ol>
    </div>
  );
}

export default DentistQuestions;