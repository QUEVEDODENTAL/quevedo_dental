import React from 'react';
import { Phone } from 'react-feather';
import { FaEnvelopeOpenText, FaFileArchive, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

const Perfil = () => {
  const personalInfo = {
    name: "Juan Pérez",
    age: 35,
    sex: "Masculino",
    address:"Lomas bonita",
    phone: "646123456",
    ocupation:"Estudiante",
    birthdate:"08-05-2000",
    city:"ensenada",


    consultation: "Extracción de diente",
    date: "29-08-2012",
    diseasess:"Cancer",
    odontogram:"14,molar inferior",
    
    gumColoration:"Rosa palido",
    
    tonguecoloring:"Lengua Rosa",
    tongueUlcerations:"Sin ulceraciones",
    observationsTongue:"No hay nada",
    palateColoring:"Rojo intenso",
    palateinjuries:"No hay lesiones",
    observationsPalate:"Tiene una fisura en la parte de enfrente"


  };
  
      

  return (
    <div className="flex flex-col items-center h-screen w-full text-base md:text-lg">
      <div className="mt-10 w-full max-w-4xl flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 p-4">
          <p className="text-lg md:text-xl font-bold text-center mb-4">Información personal</p>
          <div className="flex flex-col">
            {/* Nombre Completo */}
            <div className="mb-2">
              <b>Nombre:</b> {personalInfo.name}
            </div>
            {/* Edad */}
            <div className="mb-2">
              <b>Edad:</b> {personalInfo.age}
            </div>
            {/* Sexo */}
            <div className="mb-2">
              <b>Sexo:</b> {personalInfo.sex}
            </div>
            {/* Teléfono */}
            <div className="mb-2">
              <b>Teléfono:</b> {personalInfo.phone}
            </div>
            <div className="mb-2">
              <b>Ocupacion:</b> {personalInfo.ocupation}
            </div>
            <div className="mb-2">
              <b>Fecha de nacimiento:</b> {personalInfo.birthdate}
            </div>
            <div className="mb-2">
              <b>Ciudad:</b> {personalInfo.city}
            </div>
            {/* Consulta */}
            <div className="mb-2">
              <b>Consulta:</b> {personalInfo.consultation}
            </div>
            <div className="mb-2">
              <b>Enfermedades:</b> {personalInfo.diseasess}
            </div>
            <div className="mb-2">
              
            
              <b>Odontograma:</b> {personalInfo.odontogram}
            </div>
            <div className="mb-2">
            <b>Coloracion encias:</b> {personalInfo.gumColoration}
            </div>
            <div className="mb-2">
            <b>Coloracion lengua:</b> {personalInfo.tonguecoloring}
            </div>
            <div className="mb-2">
            <b>Ulceraciones lengua:</b> {personalInfo.tongueUlcerations}
            </div>
            <div className="mb-2">
            <b>Observaciones lengua:</b> {personalInfo.observationstongue}
            </div>
            <div className="mb-2">
            <b>Coloracion paladar:</b> {personalInfo.palatecoloring}
            </div>
            <div className="mb-2">
            <b>Lesiones paladar:</b> {personalInfo.palateinjuries}
            </div>
            <div className="mb-2">
            <b>Observaciones paladar:</b> {personalInfo.observationspalate}
            </div>
            <div className="mb-2">
              <b>Última cita:</b> {personalInfo.date}
            </div>

            
          </div>
        </div>
        <div className="md:w-[40%] p-4 bg-secondary-dash2 shadow-xl rounded-xl">
          <p className="text-lg md:text-xl font-bold text-center mb-4">Menú de opciones</p>
          <div className="flex flex-col items-center">
            <button className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded">Actualizar historial</button>
            <button className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded">Agregar servicio</button>
            <button className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded">Imprimir PDF</button>
            <button className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded">Agendar</button>
            <div className="flex justify-around mt-4 w-full">
              <FaEnvelopeOpenText className=" text-4xl text-blue-500" />
              <FaFileArchive className="text-4xl text-blue-500" />
              <FaCalendarAlt className="text-4xl text-blue-500" />
              <FaClipboardList className="text-4xl text-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
