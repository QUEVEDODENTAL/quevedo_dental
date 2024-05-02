'use client'
import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleClickPrev = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleClickNext = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="flex justify-center">
      <div className="container mx-auto px-4 py-8">
        {/* Encabezado del calendario */}
        <div className="flex justify-between items-center mb-4">
          <button onClick={handleClickPrev} className="text-gray-600 hover:text-gray-900">&lt;</button>
          <h2 className="text-lg font-semibold text-gray-900">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
          <button onClick={handleClickNext} className="text-gray-600 hover:text-gray-900">&gt;</button>
        </div>

        {/* Días de la semana */}
        <div className="flex justify-between mb-2">
          <div className="text-gray-500 text-sm">Lunes</div>
          <div className="text-gray-500 text-sm">Martes</div>
          <div className="text-gray-500 text-sm">Miércoles</div>
          <div className="text-gray-500 text-sm">Jueves</div>
          <div className="text-gray-500 text-sm">Viernes</div>
          <div className="text-gray-500 text-sm">Sábado</div>
          <div className="text-gray-500 text-sm">Domingo</div>
        </div>

        {/* Celdas de los días */}
        <div className="grid grid-cols-7 gap-4">
          {[...Array(firstDayOfMonth(currentDate)).fill(null), ...Array(daysInMonth(currentDate)).fill(null).map((_, index) => (
            <div key={index} className="text-center text-gray-900 bg-gray-100 p-2 rounded">{index + 1}</div>
          ))]}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
