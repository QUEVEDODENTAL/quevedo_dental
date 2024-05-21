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
          <Text>Domicilio: {datos.address}</Text>
          <Text>Telefono: {datos.phone}</Text>
          <Text>Ocupacion: {datos.occupationSelected}</Text>
          <Text>Fecha de Nacimiento: {datos.birthdate}</Text>
          <Text>Ciudad: {datos.city}</Text>
          <Text>Motivo de consulta: {datos.consultation}</Text>
          

          <Text>Nombre: {datos.diseasess}</Text>
          
          <Text>Coloracion encias: {datos.gumColoration}</Text>

          <Text>Coloracion de encias: {datos.colorationTongueSelected}</Text> 
          <Text>Sexo: {datos.tongueUlcerations}</Text>
          <Text>Domicilio: {datos.gumColoration}</Text>
          <Text>Ulceraciones lengua: {datos.tongueUlcerations}</Text>
          <Text>Observaciones Lengua: {datos.observationstongue}</Text>  
          <Text>Coloracion de lengua: {datos.colorationTongueSelected}</Text> 
          <Text>Coloracion Paladar: {datos.palateColoring}</Text>
          <Text>Observaciones paladar: {datos.observationsPalate}</Text>
         

        </View>
      </Page>
    </Document>
  );
}


export default HistorialClinicoPDF;
