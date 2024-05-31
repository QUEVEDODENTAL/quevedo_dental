// // PDFViewerComponent.js
// import { useEffect, useRef } from 'react';

// export default function PDFViewerComponent({ formData }) {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
    
//     if (typeof window !== 'undefined') {
//       import('pspdfkit').then((PSPDFKit) => {
//         if (PSPDFKit) {
//           PSPDFKit.unload(container);
//         }
  
//         // Utilizar los datos del formulario para generar la URL del PDF
//         const pdfUrl = `/historial_clinico.pdf?nombre=${formData.nombre}&sexo=${formData.sexo}&...`;
  
//         PSPDFKit.load({
//           container,
//           document: pdfUrl,
//           baseUrl: `${window.location.protocol}//${window.location.host}/`,
//         });
//       });
//     }
//   }, [formData]);

//   return <div ref={containerRef} style={{ height: '100vh' }} />;
// }
