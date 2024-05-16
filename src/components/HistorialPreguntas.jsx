'use client'
import React, { useState } from 'react';
import Image from 'next/image';

function HistorialClinicoForm() {
  const [nombre, setNombre] = useState('');
  const [sexo, setSexo] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ocupacionSeleccionada, setOcupacionSeleccionada] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [escolaridad, setEscolaridad] = useState('');
  const [motivoConsulta, setMotivoConsulta] = useState('');
  const [enfermedadesSeleccionadas, setEnfermedadesSeleccionadas] = useState([]);
  const [enfermedadesz, setEnfermedades] = useState([]);
 
 
  const [coloracionEncias, setColoracionEncias] = useState('');
  const [coloracionLenguaSelected, setColoracionLenguaSelected] = useState(null);
  const [ulceracionesLengua, setUlceracionesLengua] = useState('sin-ulceraciones');
 
  const [observacionesLengua, setObservacionesLengua] = useState('');
 
  const [coloracionPaladar, setColoracionPaladar] = useState('');
  const [ulceracionesPaladar, setUlceracionesPaladar] = useState('sin-ulceraciones');
  const [observacionesPaladar, setObservacionesPaladar] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const opcionesColoracionLengua = 
  [
    "Blanca", "Gris", "Rosa", "Roja", 
  ];
  
  const opcionesColoracionPaladar = [
    "Rosado pálido", "Rojo intenso", "Blanco brillante", "Parduzco oscuro", "Morado oscuro", "Grisáceo o negro"
  ];
  const opcionesOcupacion = ["Estudiante", "Profesional", "Comerciante", "Empleado", "Desempleado", "Otro"];
  const [dientesSeleccionados, setDientesSeleccionados] = useState([]); 
  
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

    // Verificar si todos los campos obligatorios están llenos
    if (
      nombre.trim() !== '' &&
      domicilio.trim() !== '' &&
      telefono.trim() !== '' &&
      ocupacionSeleccionada !== '' &&
      fechaNacimiento.trim() !== '' &&
      ciudad.trim() !== '' &&
      motivoConsulta.trim() !== '' &&
      enfermedadesSeleccionadas.length > 0 &&
    
      coloracionEncias.trim() !== '' &&
      coloracionLenguaSelected !== null &&
      ulceracionesLengua.trim() !== '' &&
      
      coloracionPaladar.trim() !== '' &&
      ulceracionesPaladar.trim() !== '' 
    ) {
      console.log({
        nombre,
        sexo,
        domicilio,
        telefono,
        ocupacionSeleccionada,
        fechaNacimiento,
        ciudad,
        escolaridad,
        motivoConsulta,
        enfermedadesSeleccionadas,
        coloracionEncias,
        coloracionLenguaSelected,
        ulceracionesLengua,
        observacionesLengua,
        coloracionPaladar,
        ulceracionesPaladar,
        observacionesPaladar,
        dientesSeleccionados
      });
    } else {
      alert("Por favor complete todos los campos obligatorios.");
    }
  };

  const handleOcupacionChange = (e) => {
    setOcupacionSeleccionada(e.target.value);
  };

  

  const handleColoracionLenguaChange = (coloracion) => {
    setColoracionLenguaSelected(coloracion); 
  };
  const handleEnfermedadClick = (enfermedad) => {
    // Comprobar si la enfermedad ya está seleccionada
    const isSelected = enfermedadesSeleccionadas.includes(enfermedad);
    
    if (isSelected) {
        // Si está seleccionada, la eliminamos del estado de las enfermedades seleccionadas
        setEnfermedadesSeleccionadas(prevEnfermedades => prevEnfermedades.filter(item => item !== enfermedad));
    } else {
        // Si no está seleccionada, la añadimos al estado de las enfermedades seleccionadas
        setEnfermedadesSeleccionadas(prevEnfermedades => [...prevEnfermedades, enfermedad]);
    }
};

const renderEnfermedadesButtons = () => {
    return enfermedadesList.map(enfermedad => (
        <button
            key={enfermedad.name}
            className={`px-4 py-2 rounded-md mb-2 mr-2 hover:bg-blue-700 ${enfermedadesSeleccionadas.includes(enfermedad.name) ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
            {enfermedad.label}
        </button>
    ));
};

  
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const toggleDienteSeleccionado = (numeroDiente) => {
    // Verifica si el número de diente está en el array de dientes seleccionados
    const index = dientesSeleccionados.indexOf(numeroDiente);
    if (index === -1) {
      // Si no está seleccionado, agrégalo al array
      setDientesSeleccionados([...dientesSeleccionados, numeroDiente]);
    } else {
      // Si ya está seleccionado, elimínalo del array
      const newDientesSeleccionados = [...dientesSeleccionados];
      newDientesSeleccionados.splice(index, 1);
      setDientesSeleccionados(newDientesSeleccionados);
    }
  };
  

  const handleColoracionEnciasChange = (color) => {
    setColoracionEncias(color);
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
        <div key={numero} className="mx-1 shadow-md custom-pointer  cursor-pointer hover:text-purple-600">
          
          {imagenExiste ? (
            <>
              <Image 
                src={rutaImagen}
                alt={`Diente ${numeroDiente}`}
                className={`diente ${dientesSeleccionados.includes(numeroDiente) ? 'seleccionado' : ''}`}
                onClick={() => toggleDienteSeleccionado(numeroDiente)}
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
const renderColoracionLenguaOptions = () => {
  return opcionesColoracionLengua.map((coloracion, index) => (
    <div key={index} className="coloracion-lengua-option flex flex-col items-center">
      <input
        type="checkbox"
        id={`coloracionLengua-${index}`}
        checked={coloracion === coloracionLenguaSelected}
        onChange={() => handleColoracionLenguaChange(coloracion)}
        style={{ width: '1.5em', height: '1.5em' }}
     
      />
      <label htmlFor={`coloracionLengua-${index}`} className={`flex flex-col items-center cursor-pointer ${coloracion === coloracionLenguaSelected ? 'border-2 border-blue-500' : 'border border-gray-300'}`}>
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
const toggleUlceraciones = () => {
  setUlceraciones(!ulceraciones); // Cambia el estado de ulceraciones al valor opuesto
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
               
            <label htmlFor="nombre" className="text-gray-700 border-black">Nombre:</label><br />
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full" 
            placeholder="Ingrese el Nombre completo"/>
            
          </div>
  
          <div className="form-control ">
            <label htmlFor="domicilio" className="text-gray-700 border-black">Domicilio:</label><br />
            <input type="text" id="domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full" 
            placeholder="Ingrese su domicilio" /><br /><br />
          </div>
  

          <div className="form-control">
            <label htmlFor="telefono" className="text-gray-700 border-black ">Teléfono:</label><br />
            <input type="text" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full" 
            placeholder="Ingrese su numero de telefono"/><br /><br />
           
          
          </div>
          <div className="form-control">
          <label htmlFor="ocupacion" className="text-gray-700 ">Ocupación:</label><br />
          <select id="ocupacion" value={ocupacionSeleccionada} onChange={handleOcupacionChange}className="border border-gray-300 rounded-md p-2 w-full">
          <option value="">Seleccionar ocupación</option>
          {opcionesOcupacion.map((opcion, index) => (
          <option key={index} value={opcion}>{opcion}</option>
          ))}
          </select>
          </div>
          <div className="form-control">
            <label htmlFor="fecha_nacimiento" className="text-gray-700 border-black">Fecha de Nacimiento:</label><br />
            <input type="date" id="fecha_nacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full"  /><br /><br />
          </div>
  
          <div className="form-control">
            <label htmlFor="ciudad" className="text-gray-700 border-black">Ciudad:</label><br />
            <input type="text" id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full"  /><br /><br />
    
              </div>
        <fieldset>
          <legend className="text-lg font-semibold text-gray-700 border-black">Padecimiento Actual</legend>
          <div className="form-control">
            <label htmlFor="motivoConsulta" className="text-gray-700 border-black">Motivo de consulta:</label><br />
            <textarea
              id="motivoConsulta"
              value={motivoConsulta}
              onChange={(e) => setMotivoConsulta(e.target.value)}
              rows={2}
            className="border border-gray-300 rounded-md p-2 w-full "
              style={{ maxWidth: '650px', maxHeight: '200px', resize: 'none'}} // Impide el redimensionamiento
              placeholder="Describe el motivo de consulta aquí..."
            />
          </div>
        
        </fieldset>
  
        <fieldset>
          <legend className="text-lg text-gray-700 bg-transparent text-gray-700  border border-gray-700 hover:bg-gray-100 hover:text-gray-900 font-semibold py-2 px-4 rounded inline-flex items-center">Enfermedades</legend>
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
                <div key={`sup-${numero}`} className="m-2 ">
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
                <label htmlFor="coloracionEncias" className="text-gray-700">Coloración de Encías:</label><br />
                <input
                  type="color"
                  id="coloracionEncias"
                  onChange={(e) => setColoracionEncias(e.target.value)}
                  className="form-control"
                  style={{ width: '190px', height: '5px' }}
                />

                <div className="color-options">
                  <div className="color-option" onClick={() => handleColoracionEnciasChange("#FFCCCC")} style={{ backgroundColor: '#FFCCCC' }}>
                    <div className="color-box"></div>
                    <div className="color-name">Rosa pálido</div></div>
                    <div className="color-option" onClick={() => handleColoracionEnciasChange('#FF0000')} style={{ backgroundColor: '#FF0000' }}>
                    <div className="color-box"></div>
                    <div className="color-name">Rojo brillante</div>
                    </div>
                    <div className="color-option" onClick={() => handleColoracionEnciasChange('#8B0000')} style={{ backgroundColor: '#8B0000' }}>
                    <div className="color-box"></div>
                    <div className="color-name">Rojo oscuro</div> 
                    </div> 
                    <div className="color-option" onClick={() => handleColoracionEnciasChange('#FFFFFF')} style={{ backgroundColor:'#FFFFFF'   }}>
                    <div className="color-box"></div>
                    <div className="color-name">Blanco pálido</div></div>
                    <div className="color-option" onClick={() => handleColoracionEnciasChange('#4B0082')} style={{ backgroundColor:'#4B0082 '}}>
                    <div className="color-box"></div>
                    <div className="color-name">Azulada o púrpura</div>
                    </div> 
                    <div className="form-control" style={{ position: 'relative', width: '100px' }}>
                      <Image
                      src="/assets/enciaas.jpg" alt="Dentista 2" width={200} height={200}className="rounded-full"/>
                      
                      {coloracionEncias && (
                      <div
                      className="color-overlay"
            style={{position: 'absolute',top: 0,left: 0,width: '100%',height: '80%',backgroundColor: coloracionEncias,opacity: 0.5, }}/>)}
            </div>
            </div>
            </div>
            </fieldset>
        <div className="form-control">
          <legend> Coloración de lengua</legend>
          <div className="flex flex-wrap lengua-image flex-row ">
            {renderColoracionLenguaOptions()}
          </div>
        </div>

        <div className="form-control">
          <label htmlFor="ulceracionesLengua" className="text-gray-700">Ulceraciones en Lengua:</label><br />
          <select id="ulceracionesLengua" value={ulceracionesLengua} onChange={(e) => setUlceracionesLengua(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full">
            <option value="sin-ulceraciones">Sin Ulceraciones</option>
            <option value="con-ulceraciones">Con Ulceraciones</option>
          </select><br /><br />

          <label htmlFor="observacionesLengua" className="text-gray-700">Observaciones sobre Lengua:</label><br />
          <textarea
            id="observacionesLengua"
            value={observacionesLengua}
            onChange={(e) => setObservacionesLengua(e.target.value)}
            rows={4}
            className="border border-gray-300 rounded-md p-2 w-full"
            style={{ maxWidth: '650px', maxHeight: '200px', resize: 'none'}}
            placeholder="Ingrese observaciones adicionales sobre la lengua aquí..."
            
          />
        </div>
        <div className="form-control">
          <label htmlFor="coloracionPaladar" className="text-gray-700">Coloración de Paladar Duro:</label><br />
          <select id="coloracionPaladar" value={coloracionPaladar} onChange={(e) => setColoracionPaladar(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full">
            <option value="">Seleccionar coloración de Paladar</option>
            {opcionesColoracionPaladar.map((coloracion, index) => (
              <option key={index} value={coloracion}>{coloracion}</option>
            ))}
          </select><br /><br />

          <label htmlFor="ulceracionesPaladar" className="text-gray-700">Lesiones o Anomalías en Paladar Duro:</label><br />
          <select id="ulceracionesPaladar" value={ulceracionesPaladar} onChange={(e) => setUlceracionesPaladar(e.target.value)}className="border border-gray-300 rounded-md p-2 w-full">
            <option value="sin-ulceraciones">Sin lesiones</option>
            <option value="con-ulceraciones">Con lesiones</option>
          </select><br /><br />
          <label htmlFor="observacionesPaladar" className="text-gray-700">Observaciones sobre Paladar Duro:</label><br />
           <textarea
           id="observacionesPaladar"
           value={observacionesPaladar}
           onChange={(e) => setObservacionesPaladar(e.target.value)}
           rows={4}
           className="border border-gray-300 rounded-md p-2 w-full"
           style={{ maxWidth: '650px', maxHeight: '200px', resize: 'none'}}
           placeholder="Ingrese observaciones adicionales sobre el paladar aquí..."
          />  
          <button type="button" onClick={prevPage}>Anterior</button>
          <div style={{ margin: '8px' }}></div>
          <input type="submit" value="Enviar" />
          </div>
          </form>
          )}
        </div>
      );
    
    }  
  export default HistorialClinicoForm;