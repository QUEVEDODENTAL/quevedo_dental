
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PDFDocument, PDFViewer,} from '@react-pdf/renderer';
import HistorialClinicoPDF from './PdfHistorial';

function HistorialClinicoForm() {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [occupationSelected, setoccupationSelected] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [city, setCity] = useState('');
  const [consultation, setConsultation] = useState('');
  const [diseasess, setDiseasess] = useState('');
  const [showForm, setShowForm] = useState(true); // Agregamos el estado para controlar si se muestra el formulario o la vista previa

 
  const [gumColoration, setGumColoration] = useState('');
  const [colorationTongueSelected,setColorationTongueSelected] = useState(null);
  const [tongueUlcerations, setTongueUlcerationsss] = useState('sin-ulceraciones');
 
  const [observationsTongue, setObservationsTongue] = useState('');
 
  const [palateColoring, setPalateColoring] = useState('');
  const [palateInjuries, setPalateInjuries] = useState('sin-ulceraciones');
  const [observationsPalate, setObservationsPalate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [nombreDienteSeleccionado, setNameToothSelected] = useState([]);

 
  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    address: '',
    phone: '',
    occupationSelected: '',
    birthdate: '',
    city: '',
    consultation: '',
    diseases: '',
    gumColoration: '',
    colorationTongueSelected: '',
    tongueUlcerations: '',
    observationsTongue: '',
    palateColoring: '',
    observationsPalate: '',
  });
  const handleFormDataChange = (newFormData) => {
    setFormData(newFormData);
  };

  const getNamesTeeth = () => {
    const namesTeeth = {
      11: 'Incisivo Central Superior Izquierdo',
      12: 'Incisivo Lateral Superior Izquierdo',
      13: 'Canino Superior Izquierdo',
      14: 'Primer Premolar Superior Izquierdo',
      15: 'Segundo Premolar Superior Izquierdo',
      16: 'Primer Molar Superior Izquierdo',
      17: 'Segundo Molar Superior Izquierdo',
      18: 'Tercer Molar Superior Izquierdo',
      21: 'Incisivo Central Superior Derecho',
      22: 'Incisivo Lateral Superior Derecho',
      23: 'Canino Superior Derecho',
      24: 'Primer Premolar Superior Derecho',
      25: 'Segundo Premolar Superior Derecho',
      26: 'Primer Molar Superior Derecho',
      27: 'Segundo Molar Superior Derecho',
      28: 'Tercer Molar Superior Derecho',
      31: 'Incisivo Central Inferior Izquierdo',
      32: 'Incisivo Lateral Inferior Izquierdo',
      33: 'Canino Inferior Izquierdo',
      34: 'Primer Premolar Inferior Izquierdo',
      35: 'Segundo Premolar Inferior Izquierdo',
      36: 'Primer Molar Inferior Izquierdo',
      37: 'Segundo Molar Inferior Izquierdo',
      38: 'Tercer Molar Inferior Izquierdo',
      41: 'Incisivo Central Inferior Derecho',
      42: 'Incisivo Lateral Inferior Derecho',
      43: 'Canino Inferior Derecho',
      44: 'Primer Premolar Inferior Derecho',
      45: 'Segundo Premolar Inferior Derecho',
      46: 'Primer Molar Inferior Derecho',
      47: 'Segundo Molar Inferior Derecho',
      48: 'Tercer Molar Inferior Derecho',
    };
  
    return namesTeeth;
  };
  
  const namesTeeth = getNamesTeeth();
  console.log(namesTeeth);

  // Define la función para traducir el color de las encías
const traducirColorEncias = (colorEncias) => {
  // Mapea los valores de color a sus names correspondientes
  const colores = {
    '#FFCCCC': 'Rosa pálido',
    '#FF0000': 'Rojo brillante',
    '#8B0000': 'Rojo oscuro',
    '#FFFFFF': 'Blanco pálido',
    '#4B0082': 'Azulada o púrpura'
    // Añade más colores según sea necesario
  };

  // Retorna el name del color correspondiente
  return colores[colorEncias] || 'Color no definido'; // Si el color no está definido, retorna un mensaje predeterminado
};
 const nameColorEncias = traducirColorEncias(gumColoration);  
// Luego puedes usar esta función en tu código para obtener el name del color de las encías
  const 
optionsColorationTongue = 
  [
    "Blanca", "Gris", "Rosa", "Roja", 
  ];
  
  const optionspalateColoring = [
    "Rosado pálido", "Rojo intenso", "Blanco brillante", "Parduzco oscuro", "Morado oscuro", "Grisáceo o negro"
  ];
  const optionOcupation = ["Estudiante", "Profesional", "Comerciante", "Empleado", "Desempleado", "Otro"];
  const [toothSelected, setToothSelected] = useState([]); 
  
  const enfermedadesList = [
    { name: 'cardiovasculares', label: 'Cardiovasculares' },
    { name: 'pulmonares', label: 'Pulmonares' },
    { name: 'renales', label: 'Renales' },
    { name: 'gastrointestinales', label: 'Gastrointestinales' },
    { name: 'hematologicas', label: 'Hematológicas' },
    { name: 'endocrinas', label: 'Endocrinas' },
    { name: 'mentales', label: 'Mentales' },
    { name: 'dermatologicas', label: 'Dermatológicas' },
    { name: 'neurologicas', label: 'Neurológicas' },
    { name: 'metabolicas', label: 'Metabólicas' },
    { name: 'marcapasos', label: 'Marcapasos' },
    { name: 'cardiopatias', label: 'Cardiopatías' },
    { name: 'neuropatias', label: 'Neuropatías' },
    { name: 'implanteDental', label: 'Implante Dental' },
    { name: 'cancer', label: 'Cáncer' },
    { name: 'convulsiones', label: 'Convulsiones' }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    
    // Verificar si todos los campos obligatorios están llenos
    if (
      name.trim() !== '' &&
      address.trim() !== '' &&
      phone.trim() !== '' &&
      occupationSelected !== '' &&
      birthdate.trim() !== '' &&
      city.trim() !== '' &&
      consultation.trim() !== '' &&
      gumColoration.trim() !== '' &&
      colorationTongueSelected !== null &&
      tongueUlcerations.trim() !== '' &&
      palateColoring.trim() !== '' &&
      palateInjuries.trim() !== ''&&
      toothSelected.trim() !== ''
    ) {
      // Agregar la información de los dientes al objeto formData
      const dientesSeleccionados = toothSelected.map(numero => ({
        numero: numero,
        nombre: namesTeeth[numero]
      }));
      const newData = {
        ...formData,
        dientes: dientesSeleccionados
      };
      setFormData(newData);
      
      // Generar el PDF
      setShowForm(false); // Cambia showForm a false para mostrar la vista previa del PDF
    } else {
      alert("Por favor complete todos los campos obligatorios.");
    }
  };
  

  
  const generarTextoHistorial = () => {
    const texto = toothSelected.map(numero => {
      const name = namesTeeth[numero];
      return `Número: ${numero}, name: ${name}`;
    }).join('\n');
    return texto;
  };
  
  
  const handlesexChange = (e) => {
    setSex(e.target.value);
  };

  const handleColorationTongueChange = (coloracion) => {
  setColorationTongueSelected(coloracion); 
 
  }
  const handleEnfermedadClick = (enfermedad) => {
    const isSelected = diseasess.includes(enfermedad);
    if (isSelected) {
      setDiseasess(diseasess.filter((e) => e !== enfermedad));
    } else {
      setDiseasess([...diseasess, enfermedad]);
    }
  };
  const renderEnfermedadesButtons = () => {
    return (
      <div className="flex flex-wrap  justify-start">
        {enfermedadesList.map(enfermedad => (
          <label
            key={enfermedad.name}
            className={`rounded-md p-2 cursor-pointer mr-4 mb-4 border border-gray-300 ${diseasess.includes(enfermedad.name) ? 'border-blue-500' : ''}`}
            onClick={() => handleEnfermedadClick(enfermedad.name)}
            style={{ textDecoration: 'none', background: 'none' }}
          >
            {enfermedad.label}
            <input
              type="checkbox"
              style={{ display: 'none' }}
              checked={diseasess.includes(enfermedad.name)}
              onChange={() => handleEnfermedadClick(enfermedad)}
            />
          </label>
        ))}
      </div>
    );
  };
  
  
  

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const toggleToothSelected = (numeroDiente) => {
    // Verifica si el número de diente está en el array de dientes seleccionados
    const index = toothSelected.indexOf(numeroDiente);
    if (index === -1) {
      // Si no está seleccionado, agrégalo al array
      setToothSelected([...toothSelected, numeroDiente]);
    } else {
      // Si ya está seleccionado, elimínalo del array
      const newToothSelected = [...toothSelected];
      newToothSelected.splice(index, 1);
      setToothSelected(newToothSelected);
    }
  };



  const handlegumColorationChange = (color) => {
    setGumColoration(color);
  };
  const handleOcupationChange = (event) => {
    setoccupationSelected(event.target.value);
  };
  

  const renderizarImagen = (numero) => {
    const numeroDiente = numero + 31;

    if (
      (numeroDiente >= 31 && numeroDiente <= 38) ||
      (numeroDiente >= 41 && numeroDiente <= 48) ||
      (numeroDiente >= 71 && numeroDiente <= 75) ||
      (numeroDiente >= 81 && numeroDiente <= 85)
    ) {
      const rutaImagen = `/assets/dientes/dentadura-inf-${numeroDiente}.svg`;
      const imagenExiste = true; // Aquí debes ajustar la lógica para verificar si la imagen existe realmente

      return (
        <div key={numero} className="mx-1 shadow-md   cursor-pointer hover:text-purple-600">
          {imagenExiste ? (
            <>
              <Image
                src={rutaImagen}
                alt={`Diente ${numeroDiente}`}
                className={`diente ${toothSelected.includes(numeroDiente) ? 'seleccionado' : ''}`}
                onClick={() => toggleToothSelected(numeroDiente)}
                width="30" height="90"
              />
              <div className="numero-diente">{numeroDiente}</div>
            </>
          ) : null}
        </div>
      );
    }
    return null; // Retorna null si no se cumple ninguna condición
};

const renderizarImagenSup = (numero) => {
    const numeroDiente = numero + 11;

    if (
      (numeroDiente >= 11 && numeroDiente <= 18) ||
      (numeroDiente >= 21 && numeroDiente <= 28) ||
      (numeroDiente >= 51 && numeroDiente <= 55) ||
      (numeroDiente >= 61 && numeroDiente <= 65)
    ) {
      const rutaImagen =`/assets/dientes/dentadura-sup-${numeroDiente}.svg`;
      const imagenExiste = true; // Aquí debes ajustar la lógica para verificar si la imagen existe realmente

      return (
        <div key={numero} className="mx-1 shadow-md custom-pointer  cursor-pointer hover:text-purple-600">
          
          {imagenExiste ? (
            <>
              <Image 
                src={rutaImagen}
                alt={`Diente ${numeroDiente}`}
                className={`diente ${toothSelected.includes(numeroDiente) ? 'seleccionado' : ''}`}
                onClick={() => toggleToothSelected(numeroDiente)}
                width="80" height="90"
              />
              <div className="numero-diente">{numeroDiente}</div>
            </>
          ) : null}
        </div>
      );
    }
    return null; // Retorna null si no se cumple ninguna condición
};
// Dentro de la función renderColoracionLenguaOptions()
const renderColorationTongueOptions = () => {
  return optionsColorationTongue.map((coloracion, index) => (
    <div key={index} className="coloracion-lengua-option flex flex-col items-center">
      <input
        type="checkbox"
        id={`coloracionLengua-${index}`}
        checked={coloracion === colorationTongueSelected}
        onChange={() => handleColorationTongueChange(coloracion)}
        style={{ width: '1.5em', height: '1.5em' }}
     
      />
      <label htmlFor={`coloracionLengua-${index}`} className={`flex flex-col items-center cursor-pointer ${coloracion === colorationTongueSelected ? 'border-2 border-blue-500' : 'border border-gray-300'}`}>
        <Image
          src={`/assets/lengua/lengua-${coloracion}.png`}
          alt={coloracion}
          className="w-24 mb-2 cursor-pointer"
          width="80" height="70"
          
        />
     
      </label>
    </div>
  ));
};



  return (
      <div className="max-w-md">
        <div className="flex items-center justify-center mb-4 border-black">
     
          <h2 className="ml-2 text-lg font-semibold ">Historial Clínico/Preguntas</h2>
        </div>
        {currentPage === 1 && (
          <form onSubmit={handleSubmit} className="max-w-md">
            <fieldset>
              <legend className="text-lg font-semibold text-gray-700">Información Personal</legend>
              <div className="form-control">
               
            <label htmlFor="name" className="text-gray-700 border-black">Nombre:</label><br />
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full" 
            placeholder="Ingrese el name completo"/>
            
          </div>
          <div className="form-control">
            <label className="text-gray-700">Sexo:</label><br />
            <label className="inline-flex items-center">
              <input
              type="checkbox"
              value="masculino"
              checked={sex === "masculino"}
              onChange={handlesexChange}
              className="form-checkbox h-5 w-5 text-red-600 rounded-full"
              />
              <span className="ml-2">Masculino</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                type="checkbox"
                value="femenino"
                checked={sex === "femenino"}
                onChange={handlesexChange}
                className="form-checkbox h-5 w-5 text-red-600 rounded-full"
                />
                <span className="ml-2">Femenino</span>
                </label>
                <label className="inline-flex items-center ml-4">
                  <input
                  type="checkbox"
                  value="otro"
                  checked={sex === "otro"}
                  onChange={handlesexChange}
                  className="form-checkbox h-5 w-5 text-red-600 rounded-full"
                   />
                   <span className="ml-2">Otro</span>
                   </label>
                   </div>

          <div className="form-control ">
            <label htmlFor="address" className="text-gray-700 border-black">Domicilio:</label><br />
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full" 
            placeholder="Ingrese su Domicilio" /><br /><br />
          </div>
  

          <div className="form-control">
            <label htmlFor="phone" className="text-gray-700 border-black ">Teléfono:</label><br />
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full" 
            placeholder="Ingrese su numero de Telefono"/><br /><br />
           
          
          </div>
          <div className="form-control">
          <label htmlFor="ocupation" className="text-gray-700 ">Ocupación:</label><br />
          <select id="ocupation" value={occupationSelected} onChange={handleOcupationChange}className="border border-gray-300 rounded-md p-2 w-full">
          <option value="">Seleccionar ocupación</option>
          {optionOcupation.map((opcion, index) => (
          <option key={index} value={opcion}>{opcion}</option>
          ))}
          </select>
          </div>
          <div className="form-control">
            <label htmlFor="fecha_nacimiento" className="text-gray-700 border-black">Fecha de Nacimiento:</label><br />
            <input type="date" id="fecha_nacimiento" value={birthdate} onChange={(e) => setBirthdate(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full"  /><br /><br />
          </div>
  
          <div className="form-control">
            <label htmlFor="city" className="text-gray-700 border-black">Ciudad:</label><br />
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full"  /><br /><br />
    
              </div>
        <fieldset>
          <legend className="text-lg font-semibold text-gray-700 border-black">Padecimiento Actual</legend>
          <div className="form-control">
            <label htmlFor="reasonConsultation" className="text-gray-700 border-black">Motivo de consulta:</label><br />
            <textarea
              id="Consultation"
              value={consultation}
              onChange={(e) => setConsultation(e.target.value)}
              rows={2}
            className="border border-gray-300 rounded-md p-2 w-full "
              style={{ maxWidth: '650px', maxHeight: '200px', resize: 'none'}} // Impide el redimensionamiento
              placeholder="Describe el motivo de consulta aquí..."
            />
          </div>
        
        </fieldset>
  
        <fieldset>
          <legend className="text-lg font-semibold text-gray-700 bg-transparent text-gray-700 border border-gray-700 hover:bg-gray-100 hover:text-gray-900 py-2 px-4 rounded inline-flex items-center">Enfermedades</legend>
          <div className="enfermedades-container">
            {renderEnfermedadesButtons()}
          </div>
        </fieldset>
              
              <button type="button" onClick={nextPage}>Siguiente</button>
            </fieldset>
          </form>
        )}
        {currentPage === 2 && (
        <form onSubmit={handleSubmit} className="max-w-md">
          <fieldset>
            <legend className="text-lg font-semibold text-gray-700">Odontograma</legend>
            <legend className="text-lg font-semibold text-gray-700">Dientes Superiores</legend>
            <div className="grid grid-cols-8 gap-10 justify-center">
               <div className="dientes-grid "> 
                {[...Array(105).keys()].map(numero => (
                <div key={`sup-${numero}`} className="m-2 px-1">
                  {renderizarImagenSup(numero)}
                  </div>
                ))}</div></div>
                <legend className="text-lg font-semibold text-gray-700">Dientes Inferiores</legend>
                <div className="grid grid-cols-8 gap-10 justify-center">
                  <div className="dientes-grid">
                    {[...Array(105).keys()].map(numero => (
                    <div key={`inf-${numero}`} className="m-2 px-1">{renderizarImagen(numero)}
                    </div>
                  ))}</div></div>
                  </fieldset>
                      <button type="button" onClick={prevPage}>Anterior</button>
                      <div style={{ margin: '8px' }}></div>
                
                  <button type="button" onClick={nextPage}>Siguiente</button>
                  </form>)}
        {currentPage === 3 && (
          <form onSubmit={handleSubmit} className="max-w-md">
            <fieldset>
              <legend className="text-lg font-semibold text-gray-700">Información Bucal</legend>
              <div className="form-control">
                <label htmlFor="gumColoration" className="text-gray-700">Coloración de Encías:</label><br />
                <input
                  type="color"
                  id="gumColoration"
                  onChange={(e) => setGumColoration(e.target.value)}
                  className="form-control"
                  style={{ width: '190px', height: '5px' }}
                />

                <div className="color-options">
                  <div className="color-option" onClick={() => handlegumColorationChange("#FFCCCC")} style={{ backgroundColor: '#FFCCCC' }}>
                    <div className="color-box"></div>
                    <div className="color-name">Rosa pálido</div></div>
                    <div className="color-option" onClick={() => handlegumColorationChange('#FF0000')} style={{ backgroundColor: '#FF0000' }}>
                    <div className="color-box"></div>
                    <div className="color-name">Rojo brillante</div>
                    </div>
                    <div className="color-option" onClick={() => handlegumColorationChange('#8B0000')} style={{ backgroundColor: '#8B0000' }}>
                    <div className="color-box"></div>
                    <div className="color-name">Rojo oscuro</div> 
                    </div> 
                    <div className="color-option" onClick={() => handlegumColorationChange('#FFFFFF')} style={{ backgroundColor:'#FFFFFF'   }}>
                    <div className="color-box"></div>
                    <div className="color-name">Blanco pálido</div></div>
                    <div className="color-option" onClick={() => handlegumColorationChange('#4B0082')} style={{ backgroundColor:'#4B0082 '}}>
                    <div className="color-box"></div>
                    <div className="color-name">Azulada o púrpura</div>
                    </div> 
                    <div className="form-control" style={{ position: 'relative', width: '100px' }}>
                      <Image
                      src="/assets/enciaas.jpg" alt="Dentista 2" width={200} height={200}className="rounded-full"/>
                      
                      {gumColoration && (
                      <div
                      className="color-overlay"
            style={{position: 'absolute',top: 0,left: 0,width: '100%',height: '80%',backgroundColor: gumColoration,opacity: 0.5, }}/>)}
            </div>
            </div>
            </div>
            </fieldset>
        <div className="form-control">
          <legend> Coloración de lengua</legend>
          <div className="flex flex-wrap lengua-image flex-row ">
            {renderColorationTongueOptions()}
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="tongueUlcerations" className="text-gray-700">Ulceraciones en Lengua:</label><br />
          <select id="tongueUlcerations" value={tongueUlcerations} onChange={(e) => setTongueUlcerationsss(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full">
            <option value="sin-ulceraciones">Sin Ulceraciones</option>
            <option value="con-ulceraciones">Con Ulceraciones</option>
          </select><br /><br />

          <label htmlFor="observationsTongue" className="text-gray-700">Observaciones sobre Lengua:</label><br />
          <textarea
            id="observationsTongue"
            value={observationsTongue}
            onChange={(e) => setObservationsTongue(e.target.value)}
            rows={4}
            className="border border-gray-300 rounded-md p-2 w-full"
            style={{ maxWidth: '650px', maxHeight: '200px', resize: 'none'}}
            placeholder="Ingrese observaciones adicionales sobre la lengua aquí..."
            
          />
        </div>
        <div className="form-control">
          <label htmlFor="palateColoring" className="text-gray-700">Coloración de Paladar Duro:</label><br />
          <select id="palateColoring" value={palateColoring} onChange={(e) => setPalateColoring(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full">
            <option value="">Seleccionar coloración de Paladar</option>
            {optionspalateColoring.map((coloracion, index) => (
              <option key={index} value={coloracion}>{coloracion}</option>
            ))}
          </select><br /><br />

          <label htmlFor="palateInjuries" className="text-gray-700">Lesiones o Anomalías en Paladar Duro:</label><br />
          <select id="palateInjuries" value={palateInjuries} onChange={(e) => setPalateInjuries(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full">
            <option value="sin-ulceraciones">Sin lesiones</option>
            <option value="con-ulceraciones">Con lesiones</option>
          </select><br /><br />
          <label htmlFor="observationsPalate" className="text-gray-700">Observaciones sobre Paladar Duro:</label><br />
           <textarea
           id="observationsPalate"
           value={observationsPalate}
           onChange={(e) => setObservationsPalate(e.target.value)}
           rows={4}
           className="border border-gray-300 rounded-md p-2 w-full"
           style={{ maxWidth: '650px', maxHeight: '200px', resize: 'none'}}
           placeholder="Ingrese observaciones adicionales sobre el paladar aquí..."
          />  
          </div>
        
            {showForm ? (
              <form onSubmit={handleSubmit}>
                {/* Contenido del formulario */}
                <button type="button" onClick={prevPage}>Anterior</button>
                <div style={{ margin: '8px' }}></div>
                <input type="submit" value="Enviar" />
              </form>
            ) : (
              <div className='mt-8'>
                <h2 className="text-lg font-semibold mb-2">Vista previa del Historial Clínico</h2>
                <PDFViewer width="100%" height={500}>
                  <HistorialClinicoPDF datos={formData} />
                </PDFViewer>
              </div>
            )}
        </form>
      )}
    </div>
  );
}

export default HistorialClinicoForm;