// 'use client'
// import React, { useState } from 'react';

// function DentistQuestions() {
//   const [respuestas, setRespuestas] = useState({
//     dolorDeMuelas: '',
//     frecuenciaCepillado: '',
//     frecuenciaHiloDental: '',
//     sensibilidad: '',
//     sangradoEncias: '',
//     hábitosMasticación: '',
//     traumatismoBucal: '',
//     problemasMandibulares: '',
//     satisfaccion: '',
//     preguntasAdicionales: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setRespuestas({
//       ...respuestas,
//       [name]: value
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
//       <h2 className="text-lg font-semibold mb-4">Preguntas típicas durante una cita con el dentista:</h2>
//       <ol className="list-decimal pl-5">
//         <li className="mb-2">
//           ¿Has experimentado algún dolor de muelas recientemente?
//           <input
//             className="block w-full border-gray-300 rounded-md shadow-sm mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             type="text"
//             name="dolorDeMuelas"
//             value={respuestas.dolorDeMuelas}
//             onChange={handleInputChange}
//           />
//         </li>
//         <li className="mb-2">
//           ¿Con qué frecuencia te cepillas los dientes al día?
//           <input
//             className="block w-full border-gray-300 rounded-md shadow-sm mt-1 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//             type="text"
//             name="frecuenciaCepillado"
//             value={respuestas.frecuenciaCepillado}
//             onChange={handleInputChange}
//           />
//         </li>
//         {/* Resto de las preguntas con campos de entrada */}
//       </ol>
//     </div>
//   );
// }

// export default DentistQuestions;



'use client';
import React, { useState } from 'react';
import Image from 'next/image';
function HistorialClinicoForm() {
  const [nombre, setNombre] = useState('');
  const [sexo, setSexo] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ocupacion, setOcupacion] = useState('');
  const [escolaridad, setEscolaridad] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [otrosEnfermedades, setOtrosEnfermedades] = useState('');
  const [motivoConsulta, setMotivoConsulta] = useState('');
  const [lastClickedButton, setLastClickedButton] = useState(null);
  const [enfermedadesSeleccionadas, setEnfermedadesSeleccionadas] = useState([]);

  const [enfermedades, setEnfermedades] = useState({
    cardiovasculares: false,
    pulmonares: false,
    renales: false,
    gastrointestinales: false,
    hematologicas: false,
    endocrinas: false,
    mentales: false,
    dermatologicas: false,
    neurologicas: false,
    metabolicas: false,
    marcapasos: false,
    cardiopatias: false,
    neuropatias: false,
    implanteDental: false,
    cancer: false,
    convulsiones: false,
    otros: false,
    otraEnfermedad: false
  });
  const opcionesColoracionEncias = [
    "Rosado", 
    "Rojo", 
    "Pálido", 
    "Anormal", 
    "Otros"];
  
  const opcionesColoracionLengua= [
    "Blanco",
    "Gris",
    "Rosa",
    "Rojo",
    "Morada"
  ];

  const [coloracionLenguaSelected, setColoracionLenguaSelected] = useState(null); 

  const opcionesColoracionPaladar= [
    "Rosado pálido",
    "Rojo intenso",
    "Blanco brillante",
    "Parduzco oscuro",
    "Morado oscuro",
    "Grisáceo o negro"
  ];

  const opcionesOcupacion = [
    "Estudiante",
    "Profesional",
    "Comerciante",
    "Empleado",
    "Desempleado",
    "Otro"
  ];
  const [ocupacionSeleccionada, setOcupacionSeleccionada] = useState('');
  
const [coloracionEncias, setColoracionEncias] = useState('');


  const ColorOption = ({ color, selected }) => (
    <div
      className={`color-option ${selected ? 'selected' : ''}`}
      style={{ backgroundColor: color }}
      onClick={() => handleColoracionEnciasChange(color)}
    />
  );
  const handleColoracionEnciasChange = (color) => {
    setColoracionEncias(color);
  };


  const [ulceracionesLengua, setUlceracionesLengua] = useState('sin-ulceraciones');
  const [observacionesLengua, setObservacionesLengua] = useState('');

  const [coloracionPaladar, setColoracionPaladar] = useState('');
  const [ulceracionesPaladar, setUlceracionesPaladar] = useState('sin-ulceraciones');
  const [observacionesPaladar, setObservacionesPaladar] = useState('');

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
    console.log({
      nombre,
      sexo,
      domicilio,
      telefono,
      ocupacion,
      fechaNacimiento,
      ciudad,
      escolaridad,
      enfermedades
    });
  };
  const handleOcupacionChange = (e) => {
    setOcupacionSeleccionada(e.target.value);
  };
  


  const handleButtonHover = (name) => {
    setEnfermedades(prevState => ({
      ...prevState,
      [name]: true
    }));
  };
    const handleEnfermedadClick = (enfermedad) => {
      // Comprobar si la enfermedad ya está seleccionada
      const index = enfermedadesSeleccionadas.indexOf(enfermedad);
      if (index !== -1) {
          // Si está seleccionada, la eliminamos del estado de las enfermedades seleccionadas
          setEnfermedadesSeleccionadas(prevEnfermedades => prevEnfermedades.filter(item => item !== enfermedad));
      } else {
          // Si no está seleccionada, la añadimos al estado de las enfermedades seleccionadas
          setEnfermedadesSeleccionadas(prevEnfermedades => [...prevEnfermedades, enfermedad]);
      }
  
      // Actualiza el estado de enfermedades
      setEnfermedades(prevState => {
          const newState = {...prevState};
          newState[enfermedad] = !newState[enfermedad];
          console.log(newState); // Agrega esto para verificar si el estado se actualiza correctamente
          return newState;
      });
  };
  const isEnfermedadSeleccionada = (enfermedad) => {
    return enfermedadesSeleccionadas.includes(enfermedad);
};


  const handleButtonLeave = (name) => {
    setEnfermedades(prevState => ({
      ...prevState,
      [name]: false
    }));
  };

   // Función para renderizar los botones de enfermedades
   const renderEnfermedadesButtons = () => {
    return enfermedadesList.map(enfermedad => (
      <button
        key={enfermedad.name}
        className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold mb-2 mr-2 hover:bg-blue-700"
        
        onClick={() => handleEnfermedadClick(enfermedad.name)}
      >
        {enfermedad.label}
      </button>
    ));
  
  };

  const [dientesSeleccionados, setDientesSeleccionados] = useState([]);

  const toggleDienteSeleccionado = (numeroDiente) => {
    setDientesSeleccionados((prevState) => {
      if (prevState.includes(numeroDiente)) {
        return prevState.filter((diente) => diente !== numeroDiente);
      } else {
        return [...prevState, numeroDiente];
      }
    });
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
        <div key={numero} className="diente-wrapper">
          {imagenExiste ? (
            <>
              <Image
                src={rutaImagen}
                alt={`Diente ${numeroDiente}`}
                className={`diente ${dientesSeleccionados.includes(numeroDiente) ? 'seleccionado' : ''}`}
                onClick={() => toggleDienteSeleccionado(numeroDiente)}
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
        <div key={numero} className="diente-wrapper">
          {imagenExiste ? (
            <>
              <Image 
                src={rutaImagen}
                alt={`Diente ${numeroDiente}`}
                className={`diente ${dientesSeleccionados.includes(numeroDiente) ? 'seleccionado' : ''}`}
                onClick={() => toggleDienteSeleccionado(numeroDiente)}
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

  const handleColoracionLenguaChange = (coloracion) => {
    setColoracionLenguaSelected(coloracion); 
  };

  const renderColoracionLenguaOptions = () => {
    return opcionesColoracionLengua.map((coloracion, index) => (
      <div key={index} className="coloracion-lengua-option flex flex-col items-center">
        <input
          type="checkbox"
          id={`coloracionLengua-${index}`}
          checked={coloracion === coloracionLenguaSelected}
          onChange={() => handleColoracionLenguaChange(coloracion)}
          style={{ width: '1.5em', height: '1.5em' }}
          className="hidden"
        />
        <label htmlFor={`coloracionLengua-${index}`} className="flex flex-col items-center cursor-pointer">
          <Image
            src={`/assets/lengua/lengua-${coloracion.toLowerCase().replace(/\s/g, "_")}.png`}
            alt={coloracion}
            className="w-24 mb-2 cursor-pointer"
            width="80" height="70"
          />
          <span className="text-xs">{coloracion}</span>
        </label>
      </div>
    ));
  };
  const handleImageClick = (e) => {
    if (coloracionEncias) {
      e.target.style.backgroundColor = coloracionEncias;
    }
  };
  
  
  return (
    <div className="max-w-md">
    <div className="flex items-center justify-center mb-4">
      <h2 className="ml-2 text-lg font-semibold">Historial Clínico/Preguntas</h2>
    </div>
  
      <form onSubmit={handleSubmit}  className="max-w-md">
        <fieldset>
          <legend className="text-lg font-semibold text-gray-700">Información Personal</legend>
          <div className="form-control">
            
            <label htmlFor="nombre" className="text-gray-700 ">Nombre:</label><br />
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} 
          className="w-full h-12 text-lg border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
          style={{ maxWidth: '400px' }} // Ajusta el ancho máximo del campo de entrada
        />
          </div>
          <div className="form-control">
            <legend className="text-gray-700">Sexo:</legend>
            <div><input type="radio" id="hombre" name="sexo" value="hombre" checked={sexo === 'hombre'} onChange={(e) => setSexo(e.target.value)}/> <label htmlFor="hombre">Hombre</label>
            </div> <div> <input type="radio" id="mujer" name="sexo" value="mujer" checked={sexo === 'mujer'} onChange={(e) => setSexo(e.target.value)} /> <label htmlFor="mujer">Mujer</label> </div> </div>


          <div className="form-control text-center mt-8">
            <label htmlFor="domicilio" className="text-gray-700">Domicilio:</label><br />
            <input type="text" id="domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)}
            className="w-full h-12 text-lg border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            style={{ maxWidth: '400px' }} // Ajusta el ancho máximo del campo de entrada
           /><br /><br />
            
          </div>
  
          <div className="form-control">
            <label htmlFor="telefono" className="text-gray-700">Teléfono:</label><br />
            <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} /><br /><br />
          </div>
          <div className="form-control">
          <label htmlFor="ocupacion" className="text-gray-700">Ocupación:</label><br />
          <select id="ocupacion" value={ocupacionSeleccionada} onChange={handleOcupacionChange} className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
          <option value="">Seleccionar ocupación</option>
          {opcionesOcupacion.map((opcion, index) => (
          <option key={index} value={opcion}>{opcion}</option>
          ))}
          </select>
          </div>
          <div className="form-control">
            <label htmlFor="fecha_nacimiento" className="text-gray-700">Fecha de Nacimiento:</label><br />
            <input type="date" id="fecha_nacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)}  /><br /><br />
          </div>
          <div className="form-control">
            <label htmlFor="escolaridad" className="text-gray-700">Escolaridad:</label><br />
            <input type="text"id="escolaridad"value={escolaridad} onChange={(e) => setEscolaridad(e.target.value)}/><br /><br />
            </div>  
          <div className="form-control">
            <label htmlFor="ciudad" className="text-gray-700">Ciudad:</label><br />
            <input type="text" id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)}  /><br /><br />
          </div>
        </fieldset>
  
        <fieldset>
          <legend className="text-lg font-semibold text-gray-700">Padecimiento Actual</legend>
          <div className="form-control">
            <label htmlFor="motivoConsulta" className="text-gray-700">Motivo de consulta:</label><br />
            <textarea
              id="motivoConsulta"
              value={motivoConsulta}
              onChange={(e) => setMotivoConsulta(e.target.value)}
              rows={8}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              style={{ maxWidth: '700px', maxHeight: '250px', resize: 'none' }} 
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
  
        <fieldset>
          <legend className="text-lg font-semibold text-gray-700">Odontograma</legend>

       
  
          <legend className="text-lg font-semibold text-gray-700">Dientes Superiores</legend>
          <div className="odontograma-container">
            {[...Array(105).keys()].map(numero => (
              <div key={`sup-${numero}`} className="diente-wrapper">
                {renderizarImagenSup(numero)}
              </div>
            ))}
          </div>
          <legend className="text-lg font-semibold text-gray-700">Dientes Inferiores</legend>
          <div className="odontograma-container">
            {[...Array(105).keys()].map(numero => (
              <div key={`inf-${numero}`} className="diente-wrapper">
                {renderizarImagen(numero)}
              </div>
            ))}
          </div>
        </fieldset>
        <fieldset>
  <legend className="text-lg font-semibold text-gray-700">Información Bucal</legend>
  <div className="form-control">

  <legend  className="text-gray-700">Coloración de Encías:</legend>

    <div className="color-options">
      <div className="color-option" onClick={() => handleColoracionEnciasChange('#FFCCCC')} style={{ backgroundColor: '#FFCCCC' }}>
        <div className="color-box"></div>
        <div className="color-name">Rosa pálido</div>
      </div>
     <div className="color-option" onClick={() => handleColoracionEnciasChange('#8B0000')} style={{ backgroundColor: '#8B0000' }}>
        <div className="color-box"></div>
        <div className="color-name">Rojo oscuro</div>
      </div> 
      <div className="color-option" onClick={() => handleColoracionEnciasChange('#FFFFFF')} style={{ backgroundColor: '#FFFFFF' }}>
        <div className="color-box"></div>
        <div className="color-name">Blanco palido</div>
      </div>
      <div className="color-option" onClick={() => handleColoracionEnciasChange('#4B0082')} style={{ backgroundColor: '#4B0082' }}>
        <div className="color-box"></div>
        <div className="color-name">Azulada o púrpura</div>
      </div>
      <div className="color-option" onClick={() => handleColoracionEnciasChange('#FF0000')} style={{ backgroundColor: '#FF0000' }}>
        <div className="color-box"></div>
        <div className="color-name">Rojo brillante</div>
      </div> 
    <div className="form-control" style={{ position: 'relative', width: '100px' }}>
        <Image src="/assets/enciaas.jpg" alt="Encías" width={200} 
          height={100} style={{ width: '100%', height: '50' }} />
        {coloracionEncias && (
          <div className="color-overlay" style={{position: 'absolute',top: 0,left: 0,width: '100%',height: '100%',backgroundColor: coloracionEncias,opacity: 0.5,}}
            />
            )}
            </div>
            </div>
            </div>

        <div className="form-control">
          <legend> Coloración de lengua</legend>
          <div className="flex flex-wrap  flex-row">
            {renderColoracionLenguaOptions()}
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="ulceracionesLengua" className="text-gray-700">Ulceraciones en Lengua:</label><br />
          <select id="ulceracionesLengua" value={ulceracionesLengua} onChange={(e) => setUlceracionesLengua(e.target.value)}>
            <option value="sin-ulceraciones">Sin Ulceraciones</option>
            <option value="con-ulceraciones">Con Ulceraciones</option>
          </select><br /><br />

          <label htmlFor="observacionesLengua" className="text-gray-700">Observaciones sobre Lengua:</label><br />
          <textarea
            id="observacionesLengua"
            value={observacionesLengua}
            onChange={(e) => setObservacionesLengua(e.target.value)}
            rows={4}
            style={{ maxWidth: '650px', maxHeight: '200px' }}
            placeholder="Ingrese observaciones adicionales sobre la lengua aquí..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="coloracionPaladar" className="text-gray-700">Coloración de Paladar Duro:</label><br />
          <select id="coloracionPaladar" value={coloracionPaladar} onChange={(e) => setColoracionPaladar(e.target.value)}>
            <option value="">Seleccionar coloración de Paladar</option>
            {opcionesColoracionPaladar.map((coloracion, index) => (
              <option key={index} value={coloracion}>{coloracion}</option>
            ))}
          </select><br /><br />

          <label htmlFor="ulceracionesPaladar" className="text-gray-700">Lesiones o Anomalías en Paladar Duro:</label><br />
          <select id="ulceracionesPaladar" value={ulceracionesPaladar} onChange={(e) => setUlceracionesPaladar(e.target.value)}>
            <option value="sin-ulceraciones">Sin lesiones</option>
            <option value="con-ulceraciones">Con lesiones</option>
          </select><br /><br />

          <label htmlFor="observacionesPaladar" className="text-gray-700">Observaciones sobre Paladar Duro:</label><br />
          <textarea
            id="observacionesPaladar"
            value={observacionesPaladar}
            onChange={(e) => setObservacionesPaladar(e.target.value)}
            rows={4}
            style={{ maxWidth: '650px', maxHeight: '200px' }}
            placeholder="Ingrese observaciones adicionales sobre el paladar aquí..."
          />
        </div>
      </fieldset>

      <input type="submit" value="Enviar" />
    </form>
  </div>
);
}
export default HistorialClinicoForm;