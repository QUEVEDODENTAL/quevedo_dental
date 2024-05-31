const PDFDocument = require('pdfkit');
const fs = require('fs');

function generarPDF(datosFormulario) {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('historial_clinico.pdf'));

  // Información Personal
  doc.font('Helvetica').fontSize(12);
  doc.text('Información Personal:', { align: 'left' });
  doc.text(`Nombre: ${datosFormulario.nombre}`, { align: 'left' });
  doc.text(`Sexo: ${datosFormulario.sexo}`, { align: 'left' });
  doc.text(`Domicilio: ${datosFormulario.domicilio}`, { align: 'left' });
  doc.text(`Teléfono: ${datosFormulario.telefono}`, { align: 'left' });
  doc.text(`Ocupación: ${datosFormulario.ocupacionSeleccionada}`, { align: 'left' });
  doc.text(`Fecha de Nacimiento: ${datosFormulario.fechaNacimiento}`, { align: 'left' });
  doc.text(`Ciudad: ${datosFormulario.ciudad}`, { align: 'left' });
  
  // Padecimiento Actual
  doc.text('Padecimiento Actual:', { align: 'left' });
  doc.text(datosFormulario.padecimientoActual, { align: 'left' });

  // Enfermedades
  doc.text('Enfermedades:', { align: 'left' });
  datosFormulario.enfermedadesSeleccionadas.forEach((enfermedad, index) => {
    doc.text(`${index + 1}. ${enfermedad}`, { align: 'left' });
  });

  // Información Bucal
  doc.text('Información Bucal:', { align: 'left' });
  doc.text(`Coloración de Encías: ${datosFormulario.coloracionEncias}`, { align: 'left' });
  doc.text(`Coloración de Lengua: ${datosFormulario.coloracionLenguaSelected}`, { align: 'left' });
  doc.text(`Ulceraciones en Lengua: ${datosFormulario.ulceracionesLengua}`, { align: 'left' });
  doc.text(`Observaciones sobre Lengua: ${datosFormulario.observacionesLengua}`, { align: 'left' });
  doc.text(`Coloración de Paladar Duro: ${datosFormulario.coloracionPaladar}`, { align: 'left' });
  doc.text(`Lesiones o Anomalías en Paladar Duro: ${datosFormulario.ulceracionesPaladar}`, { align: 'left' });
  doc.text(`Observaciones sobre Paladar Duro: ${datosFormulario.observacionesPaladar}`, { align: 'left' });

  doc.end();
}

module.exports = generarPDF;
