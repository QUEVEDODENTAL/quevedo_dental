import React from 'react';

function Menu() {
  return (
    <div className="flex items-center bg-primary-seccion p-4">
      <div className="flex-grow"></div>
      <input type="text" placeholder="Buscar..." className="px-4 py-2 rounded-lg border border-secondary-icon focus:outline-none focus:border-blue-500"
      />
      <div className="flex-grow"></div>
      <span className="text-secondary-icon">Foto</span>
    </div>
  );
}

export default Menu;
