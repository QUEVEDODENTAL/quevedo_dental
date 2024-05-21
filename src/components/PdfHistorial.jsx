import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Estilos para el PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    margin: 10,
    fontSize: 12,
    textAlign: 'left',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
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
        <View style={styles.section}>
          <Text>Historial Clínico</Text>
          <Text>Nombre: {datos.name}</Text>
          <Text>Sexo: {datos.sex}</Text>
          <Text>Domicilio: {datos.address}</Text>
          <Text>Telefono: {datos.phone}</Text>
          <Text>Ocupacion: {datos.occupationSelected}</Text>
          <Text>Fecha de Nacimiento: {datos.birthdate}</Text>
          <Text>Ciudad: {datos.city}</Text>
          <Text>Motivo de consulta: {datos.consultation}</Text>
          <Text>Enfermedades: {datos.diseases}</Text> {/* Corregido el nombre del prop */}
          <Text>Coloración encías: {datos.gumColoration}</Text>
          <Text>Coloración de lengua: {datos.colorationTongueSelected}</Text>
          <Text>Ulceraciones lengua: {datos.tongueUlcerations}</Text>
          <Text>Observaciones Lengua: {datos.observationsTongue}</Text>
          <Text>Coloración Paladar: {datos.palateColoring}</Text>
          <Text>Observaciones paladar: {datos.observationsPalate}</Text>
        </View>
      </Page>
    </Document>
  );
}

export default HistorialClinicoPDF;
