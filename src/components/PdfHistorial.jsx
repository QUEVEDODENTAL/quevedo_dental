import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

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
    fontWeight: 'bold', // Corregir 'heavy' a 'bold'
  },
  value: {
    fontSize: 12,
    marginBottom: 5,
  },
  toothImage: {
    width: 50, // Ajusta el ancho de la imagen según sea necesario
    height: 50, // Ajusta la altura de la imagen según sea necesario
    marginRight: 5, // Agrega margen derecho entre la imagen y el texto
  },
});

function HistorialClinicoPDF({ datos, toothImages }) {
  if (!datos) {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.error}>Error: No se han proporcionado datos para generar el PDF.</Text>
          </View>
        </Page>
      </Document>
    );
  }

  return (
    <Document download="historial_clinico.pdf">
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}>Historial Clínico</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Información Personal</Text>
          <Text style={styles.label}>Nombre:<Text style={styles.value}> {datos.name}</Text></Text>
          <Text style={styles.label}>Sexo:<Text style={styles.value}> {datos.sex}</Text></Text>
          <Text style={styles.label}>Domicilio:<Text style={styles.value}> {datos.address}</Text></Text>
          <Text style={styles.label}>Teléfono: <Text style={styles.value}>{datos.phone}</Text></Text>
          <Text style={styles.label}>Ocupación:<Text style={styles.value}>{datos.ocupationSelected}</Text></Text>
          <Text style={styles.label}>Fecha de Nacimiento:<Text style={styles.value}>{datos.birthdate}</Text></Text>
          <Text style={styles.label}>Ciudad:<Text style={styles.value}>{datos.city}</Text></Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.title}>Consulta y Antecedentes</Text>
          <Text style={styles.label}>Fecha: <Text style={styles.value}>{datos.currentDate ? new Date(datos.currentDate).toLocaleDateString() : 'Fecha no disponible'}</Text></Text>
          <Text style={styles.label}>Enfermedades: {datos.diseases.length > 0 ? datos.diseases.join(', ') : 'No hay enfermedades registradas'}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.title}>Observaciones</Text>
          <Text style={styles.label}>Coloración encías: <Text style={styles.value}>{datos.nameColorationGum}</Text></Text>
          <Text style={styles.label}>Motivo de consulta:<Text style={styles.value}> {datos.consultation}</Text></Text>
          <Text style={styles.label}>Coloración de lengua: <Text style={styles.value}> {datos.colorationTongueSelected}</Text></Text>
          <Text style={styles.label}>Ulceraciones lengua: <Text style={styles.value}> {datos.tongueUlcerations}</Text></Text>
          <Text style={styles.label}>Observaciones Lengua: <Text style={styles.value}> {datos.observationsTongue}</Text></Text>
          <Text style={styles.label}>Coloración Paladar: <Text style={styles.value}>{datos.palateColoring}</Text></Text>
          <Text style={styles.label}>Observaciones paladar: <Text style={styles.value}>{datos.observationsPalate}</Text></Text>
          <Text style={styles.title}>Dientes seleccionados</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {/* Renderiza las imágenes de los dientes seleccionados */}
            {datos.toothSelected.map((tooth) => (
              <View key={tooth.numero} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              {/* Muestra la imagen del diente si toothImages y tooth.numero están definidos */}
              {toothImages && tooth.numero && (
                <Image style={styles.toothImage} src={toothImages[tooth.numero]} />
              )}
              {/* Muestra el número o nombre del diente */}
              <Text style={styles.label}>Numero de diente: <Text style={styles.value}>{tooth.numero}</Text></Text>
              <Text style={styles.label}>  Nombre de diente: <Text style={styles.value}>{tooth.nombre}</Text></Text>
            </View>
            
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default HistorialClinicoPDF;
