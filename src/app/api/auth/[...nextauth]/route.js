import NextAuth from "next-auth"; // Importa NextAuth para la autenticación
import CredentialsProvider from "next-auth/providers/credentials"; // Importa el proveedor de credenciales para la autenticación basada en credenciales
import db from '@/lib/db'; // Importa el cliente de base de datos
import bcrypt from 'bcrypt'; // Importa bcrypt para el hashing y comparación de contraseñas


export const authOptions = {
    providers: [
        // Configuración del proveedor de credenciales para autenticación basada en credenciales
        CredentialsProvider({
            name: "Credentials", // Nombre del proveedor de credenciales

            // Función de autorización que se ejecuta al intentar iniciar sesión
            async authorize(credentials) {
                // Busca al usuario en la base de datos utilizando su correo electrónico
                const user = await db.usuarios.findUnique({
                    where: { Email: credentials.email },
                });

                // Si el usuario no se encuentra en la base de datos, lanza un error
                if (!user) throw new Error('Usuario no encontrado.');

                // Compara la contraseña proporcionada con la contraseña almacenada en la base de datos
                const isValidPassword = await bcrypt.compare(credentials.password, user.Password);
                // Si la contraseña no es válida, lanza un error
                if (!isValidPassword) throw new Error('Contraseña incorrecta.');

                let userInfo = null; // Inicializa la información del usuario como nulo

                // Verifica si el usuario es un doctor
                if (user.IsDoctor) {
                    // Busca al doctor en la base de datos utilizando su correo electrónico
                    const doctor = await db.doctor.findUnique({
                        where: { Email: user.Email }, // Busca al doctor por su correo electrónico
                    });
                    // Si se encuentra al doctor, asigna la información del usuario
                    if (doctor) {
                        userInfo = {
                            id: user.Id,
                            email: user.Email,
                            name: `${doctor.Name} ${doctor.LastName}`,
                            role: 'doctor',
                        };
                    }
                }
                // Verifica si el usuario es un empleado
                else if (user.IsEmployee) {
                    // Busca al empleado en la base de datos utilizando su correo electrónico
                    const empleado = await db.empleado.findUnique({
                        where: { Email: user.Email },
                    });
                    // Si se encuentra al empleado, asigna la información del usuario
                    if (empleado) {
                        userInfo = {
                            id: user.Id,
                            email: user.Email,
                            name: `${empleado.Name} ${empleado.LastName}`,
                            role: 'empleado',
                        };
                    }
                }

                // Si no se encuentra la información del usuario, lanza un error
                if (!userInfo) throw new Error('Información de usuario no encontrada.');

                // Retorna la información del usuario
                return userInfo;
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
    },
    session: {
        strategy: "jwt", // Estrategia de sesión (JWT)
    },
    callbacks: {
        // Callback para manipular la sesión del usuario
        //  session: Este callback se ejecuta cada vez que se inicia 
        // una nueva sesión de usuario. Recibe dos parámetros: session y token. 
        // La función asigna el ID y el rol del usuario al objeto session.user,
        //  que representa la sesión actual del usuario. Luego, devuelve la sesión actualizada.
        async session({ session, token }) {
            session.user.id = token.id; // Asigna el ID del usuario a la sesión
            session.user.role = token.role; // Asigna el rol del usuario a la sesión
            return session; // Retorna la sesión actualizada
        },

        // Callback para manipular el token JWT
        // jwt: Este callback se ejecuta cada vez que se genera un nuevo token JWT.
        //  Recibe dos parámetros: token y user. Si hay un usuario autenticado, 
        //  la función asigna el ID y el rol del usuario al token JWT. Luego,
        //  devuelve el token JWT actualizado.
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id; // Asigna el ID del usuario al token JWT
                token.role = user.role; // Asigna el rol del usuario al token JWT
            }
            return token; // Retorna el token JWT actualizado
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
