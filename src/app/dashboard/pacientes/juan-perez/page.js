'use client'
import React, { useState } from 'react';
import { FaPrint, FaPlus, FaCalendarAlt, FaSave } from 'react-icons/fa';

const Perfil = () => {
  const [editMode, setEditMode] = useState(false); // Estado para controlar si se está editando la información personal

  const [personalInfo, setPersonalInfo] = useState({
    name: "Juan Pérez",
    age: 35,
    sex: "Masculino",
    address: "Lomas bonita",
    phone: "646123456",
    ocupation: "Estudiante",
    birthdate: "08-05-2000",
    city: "ensenada",
    consultation: "Extracción de diente",
    date: "29-08-2012",
    diseasess: "Cancer",
    odontogram: "14,molar inferior",
    gumColoration: "Rosa palido",
    tonguecoloring: "Lengua Rosa",
    tongueulcerations: "Sin ulceraciones",
    observationstongue: "No hay nada",
    palatecoloring: "Rojo intenso",
    palateinjuries: "No hay lesiones",
    observationspalate: "Tiene una fisura en la parte de enfrente"
  });

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const saveChanges = () => {
    
    toggleEditMode();
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center h-screen w-full text-base md:text-lg my-5">
      <div className="md:w-1/2 lg:p-4 pt-28">
        <p className="text-lg md:text-xl font-bold text-center mb-4">Información personal</p>
        <div className="flex flex-col">
          {/* Nombre Completo */}
          <div className="mb-2">
            <b>Nombre:</b> {editMode ? <input type="text" name="name" value={personalInfo.name} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.name}
          </div>
          {/* Edad */}
          <div className="mb-2">
            <b>Edad:</b> {editMode ? <input type="text" name="age" value={personalInfo.age} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.age}
          </div>
          {/* Sexo */}
          <div className="mb-2">
            <b>Sexo:</b> {editMode ? <input type="text" name="sex" value={personalInfo.sex} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.sex}
          </div>
          {/* Dirección */}
          <div className="mb-2">
            <b>Dirección:</b> {editMode ? <input type="text" name="address" value={personalInfo.address} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.address}
          </div>
          {/* Teléfono */}
          <div className="mb-2">
            <b>Teléfono:</b> {editMode ? <input type="text" name="phone" value={personalInfo.phone} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.phone}
          </div>
          {/* Ocupación */}
          <div className="mb-2">
            <b>Ocupación:</b> {editMode ? <input type="text" name="ocupation" value={personalInfo.ocupation} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.ocupation}
          </div>
          {/* Fecha de nacimiento */}
          <div className="mb-2">
            <b>Fecha de nacimiento:</b> {editMode ? <input type="text" name="birthdate" value={personalInfo.birthdate} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.birthdate}
          </div>
          {/* Ciudad */}
          <div className="mb-2">
            <b>Ciudad:</b> {editMode ? <input type="text" name="city" value={personalInfo.city} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.city}
          </div>
          <div className="mb-2">
            <b>Consulta:</b> {editMode ? <input type="text" name="consultation" value={personalInfo.consultation} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.consultation}
          </div>
          <div className="mb-2">
            <b>Enfermedades:</b> {editMode ? <input type="text" name="diseasess" value={personalInfo.diseasess} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.diseasess}
          </div>
          <div className="mb-2">
            <b>Odontograma:</b> {editMode ? <input type="text" name="odontogram" value={personalInfo.odontogram} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.odontogram}
          </div>
          <div className="mb-2">
            <b>Coloración encías:</b> {editMode ? <input type="text" name="gumColoration" value={personalInfo.gumColoration} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.gumColoration}
          </div>
          <div className="mb-2">
            <b>Coloración lengua:</b> {editMode ? <input type="text" name="tonguecoloring" value={personalInfo.tonguecoloring} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.tonguecoloring}
          </div>
          <div className="mb-2">
            <b>Ulceraciones lengua:</b> {editMode ? <input type="text" name="tongueulcerations" value={personalInfo.tongueulcerations} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.tongueulcerations}
          </div>
          <div className="mb-2">
            <b>Observaciones lengua:</b> {editMode ? <input type="text" name="observationstongue" value={personalInfo.observationstongue} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.observationstongue}
          </div>
          <div className="mb-2">
            <b>Coloración paladar:</b> {editMode ? <input type="text" name="palatecoloring" value={personalInfo.palatecoloring} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.palatecoloring}
          </div>
          <div className="mb-2">
            <b>Lesiones paladar:</b> {editMode ? <input type="text" name="palateinjuries" value={personalInfo.palateinjuries} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.palateinjuries}
          </div>
          <div className="mb-2">
            <b>Observaciones paladar:</b> {editMode ? <input type="text" name="observationspalate" value={personalInfo.observationspalate} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.observationspalate}
          </div>
          <div className="mb-2">
            <b>Última cita:</b> {editMode ? <input type="text" name="date" value={personalInfo.date} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.date}
          </div>

          
        </div>
      </div>
      <div className="md:w-[40%] p-4 bg-secondary-dash2 shadow-xl rounded-xl mt-5">
        <p className="text-lg md:text-xl font-bold text-center mb-4">Menú de opciones</p>
        <div className="flex flex-col items-center">
          <button onClick={toggleEditMode} className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded hover:bg-secondary-dash hover:text-primary-white transition-colors duration-300">
            {editMode ? <><FaSave className="inline mr-2" /> Guardar cambios</> : <><FaCalendarAlt className="inline mr-2" /> Actualizar historial</>}
          </button>
          <button className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded hover:bg-secondary-dash hover:text-primary-white transition-colors duration-300">
            <FaPlus className="inline mr-2" /> Agregar servicio
          </button>
          <button className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded hover:bg-secondary-dash hover:text-primary-white transition-colors duration-300">
            <FaPrint className="inline mr-2" /> Imprimir PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;

