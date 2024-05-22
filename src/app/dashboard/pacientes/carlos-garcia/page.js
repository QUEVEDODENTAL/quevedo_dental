'use client'
import React, { useState } from 'react';
import { FaPrint, FaPlus, FaCalendarAlt, FaSave } from 'react-icons/fa';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f5f5f5',
    padding: 30,
  },
  section: {
    marginBottom: 10,
    backgroundColor: '#E7E7E7',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,

  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textDecoration: 'underline',
  },
  label: {
    fontSize: 12,
    fontWeight: 'heavy'
  },
  value: {
    fontSize: 12,
    marginBottom: 5,
  },
  table: {
    display: "table",
    width: "auto",
    marginTop: 20,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    padding: 5,
  },
  tableCellHeader: {
    fontSize: 12,
    fontWeight: "bold",
  },
  tableCell: {
    fontSize: 12,
  },
});

const Perfil = () => {
  const [editMode, setEditMode] = useState(false); // Controlar si se está editando la información personal

  const [personalInfo, setPersonalInfo] = useState({
    name: "Carlos García",
    age: 28,
    sex: "Masculino",
    phone: "646123456",
    occupation: "Estudiante",
    birthdate: "08-05-2000",
    city: "Ensenada",
    consultation: "Extracción de diente",
    lastCita: "29-08-2012",
    diseases: "Cancer",
    odontogram: "14,molar inferior",
    gumColoration: "Rosa palido",
    tongueColoring: "Lengua Rosa",
    tongueUlcerations: "Sin ulceraciones",
    observationsTongue: "No hay nada",
    palateColoring: "Rojo intenso",
    palateInjuries: "No hay lesiones",
    observationsPalate: "Tiene una fisura en la parte de enfrente"
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

  const generatePdf = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}>Perfil del Paciente</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Información Personal</Text>
          <Text style={styles.label}>Nombre: <Text style={styles.value}>{personalInfo.name}</Text></Text>
          <Text style={styles.label}>Edad: <Text style={styles.value}>{personalInfo.age}</Text></Text>
          <Text style={styles.label}>Sexo: <Text style={styles.value}>{personalInfo.sex}</Text></Text>
          <Text style={styles.label}>Dirección: <Text style={styles.value}>{personalInfo.address}</Text></Text>
          <Text style={styles.label}>Teléfono: <Text style={styles.value}>{personalInfo.phone}</Text></Text>
          <Text style={styles.label}>Ocupación: <Text style={styles.value}>{personalInfo.ocupation}</Text></Text>
          <Text style={styles.label}>Fecha de nacimiento: <Text style={styles.value}>{personalInfo.birthdate}</Text></Text>
          <Text style={styles.label}>Ciudad: <Text style={styles.value}>{personalInfo.city}</Text></Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Consulta y Antecedentes</Text>
          <Text style={styles.label}>Consulta: <Text style={styles.value}>{personalInfo.consultation}</Text></Text>
          <Text style={styles.label}>Fecha: <Text style={styles.value}>{personalInfo.date}</Text></Text>
          <Text style={styles.label}>Enfermedades: <Text style={styles.value}>{personalInfo.diseasess}</Text></Text>
          <Text style={styles.label}>Odontograma: <Text style={styles.value}>{personalInfo.odontogram}</Text></Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Observaciones</Text>
          <Text style={styles.label}>Coloración de encías: <Text style={styles.value}>{personalInfo.gumColoration}</Text></Text>
          <Text style={styles.label}>Coloración de lengua: <Text style={styles.value}>{personalInfo.tonguecoloring}</Text></Text>
          <Text style={styles.label}>Ulceraciones en lengua: <Text style={styles.value}>{personalInfo.tongueulcerations}</Text></Text>
          <Text style={styles.label}>Observaciones de lengua: <Text style={styles.value}>{personalInfo.observationstongue}</Text></Text>
          <Text style={styles.label}>Coloración de paladar: <Text style={styles.value}>{personalInfo.palatecoloring}</Text></Text>
          <Text style={styles.label}>Lesiones en paladar: <Text style={styles.value}>{personalInfo.palateinjuries}</Text></Text>
          <Text style={styles.label}>Observaciones de paladar: <Text style={styles.value}>{personalInfo.observationspalate}</Text></Text>
        </View>
      </Page>
    </Document>
  );



  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center h-screen w-full text-base md:text-lg my-5">
      <div className="md:w-1/2 lg:p-4 pt-28">
        <p className="text-lg md:text-xl font-bold text-center mb-4">Información personal</p>
        <div className="flex flex-col">
          <div className="mb-2">
            <b>Nombre:</b> {editMode ? <input type="text" name="name" value={personalInfo.name} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.name}
          </div>
          <div className="mb-2">
            <b>Edad:</b> {editMode ? <input type="text" name="age" value={personalInfo.age} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.age}
          </div>
          <div className="mb-2">
            <b>Sexo:</b> {editMode ? <input type="text" name="sex" value={personalInfo.sex} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.sex}
          </div>
          <div className="mb-2">
            <b>Dirección:</b> {editMode ? <input type="text" name="address" value={personalInfo.address} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.address}
          </div>
          <div className="mb-2">
            <b>Teléfono:</b> {editMode ? <input type="text" name="phone" value={personalInfo.phone} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.phone}
          </div>
          <div className="mb-2">
            <b>Ocupación:</b> {editMode ? <input type="text" name="ocupation" value={personalInfo.ocupation} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.ocupation}
          </div>
          <div className="mb-2">
            <b>Fecha de nacimiento:</b> {editMode ? <input type="text" name="birthdate" value={personalInfo.birthdate} onChange={handleInputChange} className="border border-gray-300 rounded-lg px-3 py-1" /> : personalInfo.birthdate}
          </div>
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
        <div className="flex flex-col items-center justify-center">
  <button onClick={toggleEditMode} className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded hover:bg-secondary-dash hover:text-primary-white transition-colors duration-300">
    {editMode ? <><FaSave className="inline mr-2" /> Guardar cambios</> : <><FaCalendarAlt className="inline mr-2" /> Actualizar historial</>}
  </button>
  <button className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded hover:bg-secondary-dash hover:text-primary-white transition-colors duration-300">
    <FaPlus className="inline mr-2" /> Agregar servicio
  </button>
  <PDFDownloadLink document={generatePdf()} fileName="perfil.pdf">
    {({ loading }) => (
      <button disabled={loading} className="mb-2 px-4 py-2 w-[80%] bg-secondary-button text-white rounded hover:bg-secondary-dash hover:text-primary-white transition-colors duration-300"
      >
        <FaPrint className="inline mr-2" /> Generar PDF
      </button>
    )}
  </PDFDownloadLink>
</div>

      </div>
    </div>
  );
}

export default Perfil;

