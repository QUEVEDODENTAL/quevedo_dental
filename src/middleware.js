// Exporta la configuración por defecto del middleware de NextAuth
export { default } from 'next-auth/middleware'

// Configura el middleware para que se aplique a rutas específicas
export const config = {
    // `matcher` define las rutas donde se aplicará el middleware
    matcher: [
        "/dashboard",
        "/dashboard/pacientes",
        "/dashboard/perfil",
        "/dashboard/registrar",
        "/dashboard/cuestionario",
    ]
}