import { Manrope } from "next/font/google";

const Inter = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Bienvenido",
  description: "Bienvenida al dashboard del doctor/empleado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={Inter.className}>
        {children}
      </body>
    </html>
  );
}
