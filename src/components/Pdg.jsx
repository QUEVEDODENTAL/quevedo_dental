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
});


function HistorialClinicoPDF({ datos }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Historial Clínico</Text>
          <Text>Nombre: {datos.name}</Text>
          <Text>Sexo: {datos.sex}</Text>
          <Text>Telefono: {datos.phone}</Text>
          <Text>Ocupacion: {datos.ocupation}</Text>
          <Text>Motivo de consulta: {datos.consultation}</Text>
          <Text>Fecha de Nacimiento: {datos.date}</Text>

          <Text>Nombre: {datos.diseasess}</Text>
          <Text>Sexo: {datos.city}</Text>
          <Text>Domicilio: {datos.gumColoration}</Text>
          <Text>Sexo: {datos.city}</Text>
          <Text>Domicilio: {datos.tonguecoloring}</Text> 
          <Text>Sexo: {datos.tongueUlcerations}</Text>
          <Text>Domicilio: {datos.gumColoration}</Text>
          <Text>Sexo: {datos.tongueUlcerations}</Text>
          <Text>Domicilio: {datos.observationstongue}</Text>

        </View>
      </Page>
    </Document>
  );
}

export default HistorialClinicoPDF;
