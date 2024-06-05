
'use client'
import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import { PDFDownloadLink, PDFViewer,} from '@react-pdf/renderer';
import HistorialClinicoPDF from './PdfHistorial';
import { FaPrint } from 'react-icons/fa';

function HistorialClinicoForm() {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [ocupationSelected, setocupationSelected] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [city, setCity] = useState('');
  const [consultation, setConsultation] = useState('');
  const [toothImage, setToothImage] = useState(null);

  const [selectedDiseases, setSelectedDiseases] = useState([]);
  const [showForm, setShowForm] = useState(true); // Agregamos el estado para controlar si se muestra el formulario o la vista previa
  const [gumColoration, setGumColoration] = useState('');
  const [colorationTongueSelected,setColorationTongueSelected] = useState(null);
  const [tongueUlcerations, setTongueUlcerationsss] = useState('sin-ulceraciones');
  const [observationsTongue, setObservationsTongue] = useState('');
  const [palateColoring, setPalateColoring] = useState('');
  const [palateInjuries, setPalateInjuries] = useState('sin-ulceraciones');
  const [observationsPalate, setObservationsPalate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    sex: '',
    address: '',
    phone: '',
    occupation: '',
    birthdate: '',
    city: '',
    consultation: '',
    diseases: [],
    gumColoration: '',
    tongueColoration: '',
    tongueUlcerations: 'sin-ulceraciones',
    observationsTongue: '',
    palateColoring: '',
    palateInjuries: 'sin-ulceraciones',
    observationsPalate: '',
  });

  const handleFormDataChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  
    const nameestooth = () => {
    return {
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
  };

    const nameesTooth = nameestooth();

  const traducirColorEncias = (colorEncias) => {
    // Mapea los valores de color a sus nombres correspondientes
    const colores = {
      '#FFCCCC': 'Rosa pálido',
      '#FF0000': 'Rojo brillante',
      '#8B0000': 'Rojo oscuro',
      '#FFFFFF': 'Blanco pálido',
      '#4B0082': 'Azulada o púrpura'
      // Añade más colores según sea necesario
    };

    // Retorna el nombre del color correspondiente
    return colores[colorEncias] || 'Color no definido'; // Si el color no está definido, retorna un mensaje predeterminado
  };
  const nameColorationGum = traducirColorEncias(gumColoration);

  const 
optionsColorationTongue = 
  [
    "Blanca", "Gris", "Rosa", "Roja", 
  ];
  const opcionesColoracionLengua = 
  [
    "Blanca", "Gris", "Rosa", "Roja", 
  ];
  const optionsPalateColoring = [
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
 
 
    
// Asumiendo que tienes una variable state llamada 'toothImage' que almacena la imagen de los dientes
// Asegúrate de actualizar 'toothImage' cuando el usuario seleccione o cargue una imagen

const handleSubmit = (event) => {
  event.preventDefault();
  
  // Verificar si todos los campos obligatorios están llenos
  const requiredFields = [name, address, phone, ocupationSelected, birthdate, city, consultation,gumColoration, colorationTongueSelected, tongueUlcerations, palateColoring, palateInjuries];
  const hasEmptyFields = requiredFields.some(field => field && field.trim() === '');

  if (!hasEmptyFields) {
    const toothSelectedUpdated = (toothSelected, namesTooth) => {
      return toothSelected.map(numero => ({
        numero: numero,
        nombre: namesTooth[numero]
      }));
    };
  
    const newData = {
      name,
      sex,
      address,
      phone,
      ocupationSelected,
      birthdate,
      city,
      consultation,
      diseases: selectedDiseases,
      nameColorationGum,
      colorationTongueSelected,
      tongueUlcerations,
      observationsTongue,
      palateColoring,
      observationsPalate,
      currentDate,
      toothSelected: toothSelectedUpdated(toothSelected, nameesTooth),
      toothImage: toothImage
    };

    // Generar el PDF
    setShowForm(false);
    setFormData(newData);
   // generateAndDownloadPDF(newData); 
  } else {
    alert("Por favor complete todos los campos obligatorios.");
  }
};

  
  
  const handleSexChange = (e) => {
    setSex(e.target.value);
  };

  const handleColorationTongueChange = (coloracion) => {
  setColorationTongueSelected(coloracion); 
 
  }
  const handleEnfermedadClick = (enfermedad) => {
    // Verificar si la enfermedad ya está seleccionada
    const isSelected = selectedDiseases.includes(enfermedad);
    let updatedDiseases = [];
  
    if (isSelected) {
      // Si la enfermedad ya está seleccionada, la eliminamos de la lista
      updatedDiseases = selectedDiseases.filter((e) => e !== enfermedad);
    } else {
      // Si la enfermedad no está seleccionada, la agregamos a la lista
      updatedDiseases = [...selectedDiseases, enfermedad];
    }
  
    // Actualizamos el estado con la lista de enfermedades seleccionadas
    setSelectedDiseases(updatedDiseases);
    // Actualizamos el estado formData con las enfermedades seleccionadas
    handleFormDataChange('diseases', updatedDiseases);
  };
  
  
  const renderEnfermedadesButtons = () => {
    return (
      <div className="flex flex-wrap">
        {enfermedadesList.map((enfermedad) => (
          <div key={enfermedad.name} className="mr-4 mb-4">
            <button
              className={`rounded-md p-2 w-48 text-center cursor-pointer ${
                selectedDiseases.includes(enfermedad.name)
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-gray-200 text-gray-700 border-gray-300'
              } focus:outline-none`}
              onClick={() => handleEnfermedadClick(enfermedad.name)}
            >
              {enfermedad.label}
              <input
                type="checkbox"
                style={{ display: 'none' }}
                checked={selectedDiseases.includes(enfermedad.name)}
                onChange={() => handleEnfermedadClick(enfermedad.name)}
              />
            </button>
          </div>
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
      const updatedToothSelected = [...toothSelected, numeroDiente];
      const updatedToothData = updatedToothSelected.map(numero => ({
        numero: numero,
        nombre: nameesTooth[numero],
        imagen: teeth.find(tooth => tooth.number === numero).src// Busca la ruta de la imagen en el array teeth
      }));
      setToothSelected(updatedToothSelected);
      setToothImage(updatedToothData);
    } else {
      // Si ya está seleccionado, elimínalo del array
      const newToothSelected = [...toothSelected];
      newToothSelected.splice(index, 1);
      const updatedToothData = newToothSelected.map(numero => ({
        numero: numero,
        nombre: nameesTooth[numero],
        imagen: teeth.find(tooth => tooth.number === numero).src // Busca la ruta de la imagen en el array teeth
      }));
      setToothSelected(newToothSelected);
      setToothImage(updatedToothData);
    }
  };
  


  const handleGumColorationChange = (color) => {
    setGumColoration(color);
  };
  const handleOcupationChange = (event) => {
    setocupationSelected(event.target.value);
  };
  

  // const generateAndDownloadPDF = (data) => {
  //   // Renderiza el PDF con los datos proporcionados
  //   const pdfDoc = <HistorialClinicoPDF datos={data} currentDate={currentDate} toothSelectedUpdated={{ toothSelected }} />;
  
  //   // Convierte el PDF a un Blob
  //   pdfDoc.toBlob().then(blob => {
  //     // Descarga automáticamente el Blob como un archivo PDF
  //     saveAs(blob, 'historial_clinico.pdf');
  //   });
  // };

  // // Función para guardar el PDF
  // const handleSavePDF = () => {
  //   // Renderizar el PDF
  //   const pdfBlob = HistorialClinicoPDF.renderAsBlob({ datos: formData, currentDate, toothSelected });

  //   // Guardar el Blob como archivo PDF
  //   saveAs(pdfBlob, 'historial_clinico.pdf');
  // };
  
// Dentro de la función renderColoracionLenguaOptions()
const renderColorationTongueOptions = () => {
  return optionsColorationTongue.map((coloracion, index) => (
    <div key={index} className="coloracion-lengua-option flex flex-col items-center">
      <input
        type="checkbox"
        id={`coloracionLengua-${index}`}
        checked={coloracion === colorationTongueSelected}
        onChange={() => handleColorationTongueChange(coloracion)}
        
        style={{ width: '1.5em', height: '1.5em', marginBottom: '10px', marginTop: '10px',  display: 'none' }} 
     
      />
      <label htmlFor={`coloracionLengua-${index}`} className={`flex flex-col items-center cursor-pointer ${coloracion === colorationTongueSelected ? 'border-2 border-blue-500' : 'border'}`}>
        <Image
          src={`/assets/lengua/lengua-${coloracion}.png`}
          alt={coloracion}
          className="w-24 mb-2 cursor-pointer"
          width="200" height="70"
          
        />
     
      </label>
    </div>
  ));
};




const teeth = [
  { number: 18, src: "/assets/dientes/dentadura-sup-18.svg" },
  { number: 17, src: "/assets/dientes/dentadura-sup-17.svg" },
  { number: 16, src: "/assets/dientes/dentadura-sup-16.svg" },
  { number: 15, src: "/assets/dientes/dentadura-sup-15.svg" },
  { number: 14, src: "/assets/dientes/dentadura-sup-14.svg" },
  { number: 13, src: "/assets/dientes/dentadura-sup-13.svg" },
  { number: 12, src: "/assets/dientes/dentadura-sup-12.svg" },
  { number: 11, src: "/assets/dientes/dentadura-sup-11.svg" },
  { number: 21, src: "/assets/dientes/dentadura-sup-21.svg" },
  { number: 22, src: "/assets/dientes/dentadura-sup-22.svg" },
  { number: 23, src: "/assets/dientes/dentadura-sup-23.svg" },
  { number: 24, src: "/assets/dientes/dentadura-sup-24.svg" },
  { number: 25, src: "/assets/dientes/dentadura-sup-25.svg" },
  { number: 26, src: "/assets/dientes/dentadura-sup-26.svg" },
  { number: 27, src: "/assets/dientes/dentadura-sup-27.svg" },
  { number: 28, src: "/assets/dientes/dentadura-sup-28.svg" },
  // DIENTES SUPERIORES

  { number: 48, src: "/assets/dientes/dentadura-inf-48.svg" },
  { number: 47, src: "/assets/dientes/dentadura-inf-47.svg" },
  { number: 46, src: "/assets/dientes/dentadura-inf-46.svg" },
  { number: 45, src: "/assets/dientes/dentadura-inf-45.svg" },
  { number: 44, src: "/assets/dientes/dentadura-inf-44.svg" },
  { number: 43, src: "/assets/dientes/dentadura-inf-43.svg" },
  { number: 42, src: "/assets/dientes/dentadura-inf-42.svg" },
  { number: 41, src: "/assets/dientes/dentadura-inf-41.svg" },
  { number: 31, src: "/assets/dientes/dentadura-inf-31.svg" },
  { number: 32, src: "/assets/dientes/dentadura-inf-32.svg" },
  { number: 33, src: "/assets/dientes/dentadura-inf-33.svg" },
  { number: 34, src: "/assets/dientes/dentadura-inf-34.svg" },
  { number: 35, src: "/assets/dientes/dentadura-inf-35.svg" },
  { number: 36, src: "/assets/dientes/dentadura-inf-36.svg" },
  { number: 37, src: "/assets/dientes/dentadura-inf-37.svg" },
  { number: 38, src: "/assets/dientes/dentadura-inf-38.svg" },
  // DIENTES INFERIORES
];

// Dentro del componente Tooth

const Tooth = ({ number, src, isSelected, onClick }) => (
  <div 
    className={`flex flex-col items-center shadow-md cursor-pointer hover:bg-secondary-font p-2 rounded transition-colors duration-300 ${isSelected ? 'bg-blue-200' : ''}`}
    onClick={onClick}
  >
    <div className="text-m">{number}</div>
    <Image width={30} height={90} src={src} alt={`Diente ${number}`} />
    {isSelected && <Image width={30} height={90} src={src} alt={`Diente ${number} seleccionado`} />}
  </div>
);

// Dentro del componente principal donde renderizas los dientes

<div className="flex justify-center space-x-2">
  {teeth.map((tooth, index) => (
    <Tooth 
      key={index} 
      number={tooth.number} 
      src={tooth.src} 
      isSelected={toothSelected.includes(tooth.number)} 
      onClick={() => toggleToothSelected(tooth.number)} 
    />
  ))}
</div>


  
    return (
      <div className="mb-4">

        <div className='py-4'>
        <h2 className="text-3xl font-semibold text-center">Historial Clínico/Preguntas</h2>
        </div>
  
        <div className="current-date font-semibold">
          <p>Fecha actual: {currentDate.toLocaleDateString('es-MX')}</p>
        </div>
  
        {currentPage === 1 && (
          <form onSubmit={handleSubmit} className="max-w-md">
         
              <legend className="text-lg font-semibold">Información Personal</legend>
               <label htmlFor="name" className="border-black">Nombre:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border rounded-md p-2 w-full mb-4" placeholder="Ingrese el nombre completo" />
        
          <div className="mb-4">
            <label className="">Sexo:</label>
            <label className="inline-flex items-center">
              <input type="checkbox" value="masculino" checked={sex === 'masculino'} onChange={handleSexChange} className="form-checkbox h-5 w-5 text-red-600 rounded-full" />
              <span className="ml-2">Masculino</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input type="checkbox" value="femenino" checked={sex === 'femenino'} onChange={handleSexChange} className="form-checkbox h-5 w-5 text-red-600 rounded-full" />
              <span className="ml-2">Femenino</span>
            </label>
            <label className="inline-flex items-center ml-4">
              <input type="checkbox" value="otro" checked={sex === 'otro'} onChange={handleSexChange} className="form-checkbox h-5 w-5 text-red-600 rounded-full" />
              <span className="ml-2">Otro</span>
            </label>
          </div>
          <div className="form-control mb-3">
            <label htmlFor="address" className="border-black">Domicilio:</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="border rounded-md p-2 w-full" placeholder="Ingrese su Domicilio" />
          </div>
          <div className="form-control mb-3">
            <label htmlFor="phone" className="border-black">Teléfono:</label>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="border rounded-md p-2 w-full" placeholder="Ingrese su número de Teléfono" />
          </div>
          <div className="form-control mb-3">
            <label htmlFor="ocupation" className="">Ocupación:</label>
            <select id="ocupation" value={ocupationSelected} onChange={handleOcupationChange} className="border rounded-md p-2 w-full">
              <option value="">Seleccionar ocupación</option>
              {optionOcupation.map((opcion, index) => (
                <option key={index} value={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
          <div className="form-control mb-3">
            <label htmlFor="fecha_nacimiento" className="border-black">Fecha de Nacimiento:</label>
            <input type="date" id="fecha_nacimiento" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} className="border rounded-md p-2 w-full" />
          </div>
          <div className="form-control mb-3">
            <label htmlFor="city" className="border-black">Ciudad:</label>
            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="border rounded-md p-2 w-full" />
          </div>
         
            <fieldset>
              <legend className="text-lg font-semibold border-black mb-3">Padecimiento Actual</legend>
            <div className="form-control">
              <label htmlFor="reasonConsultation" className="border-black">Motivo de consulta:</label>
              <textarea id="Consultation" value={consultation} onChange={(e) => setConsultation(e.target.value)} rows={2} className="border rounded-md p-2 w-full" style={{ maxWidth: '650px', maxHeight: '200px', resize: 'none' }} placeholder="Describe el motivo de consulta aquí..." />
            </div>
          </fieldset>
  
            <fieldset>
          <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">Enfermedades:</label>
                {enfermedadesList.map((enfermedad) => (
                  <label key={enfermedad.name} className="inline-flex items-center mr-4">
                    <input type="checkbox" className="form-checkbox" value={enfermedad.name} checked={selectedDiseases.includes(enfermedad.name)} onChange={() => handleEnfermedadClick(enfermedad.name)} />
                    <span className="ml-2">{enfermedad.label}</span>
                  </label>
                ))}
              </div>
          <button type="button" onClick={nextPage} className=' p-2 bg-secondary-card rounded-lg text-primary-white hover:bg-secondary-dash transition-colors duration-300 w-full'>Siguiente</button>
        </fieldset>
      </form>
        )}
        {currentPage === 2 && (
        <div className="flex flex-col items-center p-4">
          <div className="px-4 py-2 rounded mb-4">
      Odontograma
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex justify-center space-x-2">
          {teeth.slice(0, 16).map((tooth, index) => (
          <Tooth key={index} number={tooth.number} src={tooth.src} onClick={() => toggleToothSelected(tooth.number)} />
          ))}
          </div>
          <div className="flex justify-center space-x-2">
            {teeth.slice(16).map((tooth, index) => (
            <Tooth  key={index} number={tooth.number} src={tooth.src} onClick={() => toggleToothSelected(tooth.number)} />))}
            </div>
            </div>
    <div className="flex justify-between w-full mt-4">
      <button type="button" onClick={prevPage} className="w-1/2 p-2 bg-secondary-card rounded-lg text-primary-white hover:bg-secondary-dash transition-colors duration-300 mr-2">
        Anterior
      </button>
      <button type="button" onClick={nextPage} className="w-1/2 p-2 bg-secondary-card rounded-lg text-primary-white hover:bg-secondary-dash transition-colors duration-300 ml-2">
        Siguiente
      </button>
    </div>
  </div>
  )}

{currentPage === 3 && (
      <form onSubmit={handleSubmit} className="max-w-md">
        <fieldset>
          <legend className="text-lg font-semibold">Información Bucal</legend>
          <div className="form-control">
            <label htmlFor="gumColoration">Coloración de Encías:</label>
            <input type="color" id="gumColoration" onChange={(e) => setGumColoration(e.target.value)} className="form-control" style={{ width: '190px', height: '5px' }} />
            <div className="color-options">
              {['#FFCCCC', '#FF0000', '#8B0000', '#FFFFFF', '#4B0082'].map((color, index) => (
                <div key={index} className="color-option" onClick={() => handleGumColorationChange(color)} style={{ backgroundColor: color }}>
                  <div className="color-box"></div>
                  <div className="color-name">{traducirColorEncias(color)}</div> {/* Muestra el nombre del color en lugar del código hexadecimal */}
                </div>
              ))}
            </div>
            <div className="form-control" style={{ position: 'relative', width: '100px' }}>
              <Image src="/assets/enciaas.jpg" alt="Dentista 2" width={200} height={200} className="rounded-full" />
              {gumColoration && (
                <div className="color-overlay rounded-3xl" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: gumColoration, opacity: 0.5 }} />
              )}
            </div>
          </div>
          

          <div className="form-control">
            <legend>Coloración de lengua</legend>
            <div className="flex flex-wrap lengua-image flex-row">
              {renderColorationTongueOptions()}
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="observationsTongue" className="">Observaciones en Lengua:</label>
            <textarea id="observationsTongue" value={observationsTongue} onChange={(e) => setObservationsTongue(e.target.value)} rows={2} className="border rounded-md p-2 w-full" style={{ maxWidth: '650px', maxHeight: '200px', resize: 'none' }} placeholder="Escriba aquí cualquier observación sobre la lengua..." />
          </div>
          <div className="form-control font-bold text-lg">
            <legend>Coloración del paladar</legend>
            </div>
        <div className="form-control">
          <label htmlFor="palateColoring" className="">Coloración de Paladar Duro:</label><br />
          <select id="palateColoring" value={palateColoring} onChange={(e) => setPalateColoring(e.target.value)}className="border rounded-md p-2 w-full">
            <option value="">Seleccionar coloración de Paladar</option>
            {optionsPalateColoring.map((coloracion, index) => (
              <option key={index} value={coloracion}>{coloracion}</option>
            ))}
          </select>
          </div>
          <div className="form-control">
            <label htmlFor="palateInjuries" className="">Lesiones en el paladar:</label>
            <select id="palateInjuries" value={palateInjuries} onChange={(e) => setPalateInjuries(e.target.value)} className="border rounded-md p-2 w-full">
              <option value="sin-ulceraciones">Sin ulceraciones</option>
              <option value="con-ulceraciones">Con ulceraciones</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="observationsPalate" className="">Observaciones en el paladar:</label>
            <textarea id="observationsPalate" value={observationsPalate} onChange={(e) => setObservationsPalate(e.target.value)} rows={2} className="border rounded-md p-2 w-full" style={{ maxWidth: '650px', maxHeight: '200px', resize: 'none' }} placeholder="Escriba aquí cualquier observación sobre el paladar..." />
          </div>
          <div className="flex justify-between mt-4">
            <button type="button" onClick={prevPage} className=' p-2 bg-secondary-card rounded-lg text-primary-white hover:bg-secondary-dash transition-colors duration-300'>Anterior</button>
            <div className="mx-2"></div>
            <button type="submit" onClick={handleSubmit} className=' p-2 bg-secondary-card rounded-lg text-primary-white hover:bg-secondary-dash transition-colors duration-300'>Generar PDF
           </button>
           </div>
        
        </fieldset>
      </form>
    )}
    
    {!showForm && (
      <div>
        <h2>Vista Previa del Historial Clínico</h2>
        <PDFViewer style={{ width: '100%', height: '600px' }}>
        <HistorialClinicoPDF datos={formData} currentDate={currentDate} toothSelectedUpdated= {{toothSelected}} toothImage={toothImage} />
        </PDFViewer>

        <div className="items-center justify-center text-base py-3">
        <PDFDownloadLink document={<HistorialClinicoPDF datos={formData} currentDate={currentDate} toothSelectedUpdated= {{toothSelected}} toothImage={toothImage} />} fileName="historial_clinico.pdf">
      {({ loading }) => (
        <button disabled={loading} className=" w-full px-24 py-2 min-w-[50%] md:min-w-[200px] bg-secondary-button text-white rounded hover:bg-secondary-dash hover:text-primary-white transition-colors duration-300">
          <FaPrint className="inline mr-2" /> Descargar PDF
        </button>
      )}
    </PDFDownloadLink>
  </div>
        <button onClick={() => setShowForm(true)}className='p-2 bg-secondary-card rounded-lg text-primary-white hover:bg-secondary-dash transition-colors duration-300 w-full'>Regresar</button> 
      </div>
    )}
  </div>
  
);
};

  export default HistorialClinicoForm;

