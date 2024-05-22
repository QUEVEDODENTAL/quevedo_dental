// Exporta la configuración por defecto del middleware de NextAuth
export { default } from 'next-auth/middleware'

// Configura el middleware para que se aplique a rutas específicas
export const config = {
    // `matcher` define las rutas donde se aplicará el middleware
    matcher: ["/dashboard", "/dashboard/pacientes","/dashboard/cuestionario", "/dashboard/mi_perfil", "/dashboard/registrar", "/dashboard/pacientes/maria-lopez","/dashboard/pacientes/juan-perez","/dashboard/pacientes/carlos-garcia"]
}