// Importar la fuente Manrope de Google Fonts
import { Manrope } from "next/font/google";

// Configuración de la fuente
const manrope = Manrope({ subsets: ["latin"] });

// Metadata de la página
export const metadata = {
  title: "Bienvenido",
  description: "Bienvenida al dashboard del doctor/empleado",
};

// Componente de layout principal
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Puedes agregar más metadatos aquí */}
      </head>
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}
