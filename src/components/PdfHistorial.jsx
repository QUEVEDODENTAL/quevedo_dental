import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

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
    fontWeight: 'heavy',
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

function HistorialClinicoPDF({ datos }) {
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
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.header}>Historial Clinico</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Información Personal</Text>
          <Text style={styles.label}>Nombre:<Text style={styles.value}> {datos.name}</Text></Text>
          <Text style={styles.label}>Sexo:<Text style={styles.value}> {datos.sex}</Text></Text>
          <Text style={styles.label}>Domicilio:<Text style={styles.value}> {datos.address}</Text></Text>
          <Text style={styles.label}>Telefono: <Text style={styles.value}>{datos.phone}</Text></Text>
          <Text style={styles.label}>Ocupacion:<Text style={styles.value}>{datos.ocupationSelected}</Text></Text>
          <Text style={styles.label}>Fecha de Nacimiento:<Text style={styles.value}>{datos.birthdate}</Text></Text>
          <Text style={styles.label}>Ciudad:<Text style={styles.value}>{datos.city}</Text></Text>
          <Text style={styles.label}>Diente:<Text style={styles.value}>{datos.toothSelected}</Text></Text>
        </View>
        <View style={styles.section}>
  <Text style={styles.title}>Consulta y Antecedentes</Text>
  <Text style={styles.label}>Fecha: <Text style={styles.value}>{datos.currentDate.toLocaleDateString()}</Text></Text>

  <Text style={styles.label}>Enfermedades:</Text>
  {datos.diseases.map((enfermedad, index) => (
    <Text key={index} style={styles.value}>{enfermedad}</Text>
  ))}
</View><View style={styles.section}>
          <Text style={styles.title}>Observaciones</Text>
          <Text style={styles.label}>Coloración encías: <Text style={styles.value}>{datos.nameColorationGum}</Text></Text>
          <Text style={styles.label}>Motivo de consulta:<Text style={styles.value}> {datos.consultation}</Text></Text>
          <Text style={styles.label}>Coloración de lengua: <Text style={styles.value}> {datos.colorationTongueSelected}</Text></Text>
          <Text style={styles.label}>Ulceraciones lengua: <Text style={styles.value}> {datos.tongueUlcerations}</Text></Text>
          <Text style={styles.label}>Observaciones Lengua: <Text style={styles.value}> {datos.observationsTongue}</Text></Text>
          <Text style={styles.label}>Coloración Paladar: <Text style={styles.value}>{datos.palateColoring}</Text></Text>
          <Text style={styles.label}>Observaciones paladar: <Text style={styles.value}>{datos.observationsPalate}</Text></Text>
        </View>
      </Page>
    </Document>
  );
}

export default HistorialClinicoPDF;