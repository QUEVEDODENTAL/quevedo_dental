// Importa las dependencias necesarias
import NextAuth from "next-auth"; // Principal biblioteca de autenticación
import CredentialsProvider from "next-auth/providers/credentials"; // Proveedor de autenticación basado en credenciales
import db from '@/lib/db' // Importa la base de datos o el módulo de acceso a la base de datos
import bcrypt from 'bcrypt' // Biblioteca para la gestión de contraseñas (hashing y comparación)

// Configuración de opciones de autenticación
export const authOptions = {
    providers: [
        // Configuración del proveedor de autenticación basado en credenciales
        CredentialsProvider({
            name: "Credentials", // Nombre del proveedor
            credentials: {
                Email: { label: "Email", }, // Campo de email
                Password: { label: "Password" }, // Campo de contraseña
            },
            // Función de autorización que se ejecuta al intentar iniciar sesión
            async authorize(credentials, req) {
                console.log(credentials); // Imprime las credenciales en el servidor para depuración

                // Busca el usuario en la base de datos según el email proporcionado
                const userFound = await db.usuarios.findUnique({
                    where: {
                        Email: credentials.Email, // Campo de búsqueda por email
                    }
                });

                // Si no se encuentra el usuario, lanza un error
                if (!userFound) throw new Error('No se encontro el usuario.');

                console.log(userFound); // Imprime el usuario encontrado para depuración

                // Compara la contraseña proporcionada con la almacenada (aquí se usa una comparación simple para demo)
                // const matchPassword = await bcrypt.compare(credentials.Password, userFound.Password); // Uso recomendado con bcrypt
                const matchPassword = credentials.Password === userFound.Password; // Comparación simple

                // Si la contraseña no coincide, lanza un error
                if (!matchPassword) throw new Error('Contraseña incorrecto.');

                // Si la autenticación es exitosa, retorna un objeto con los datos del usuario
                return {
                    id: userFound.Id,
                    email: userFound.Email
                }
            },
        }),
    ],
    // Configuración de las páginas personalizadas
    pages: {
        signIn: "/auth/login", // Página personalizada para iniciar sesión
    }
};

// Inicializa NextAuth con las opciones de configuración
const handler = NextAuth(authOptions);

// Exporta el manejador para las solicitudes GET y POST
export { handler as GET, handler as POST };
