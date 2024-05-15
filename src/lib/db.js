// Importa el cliente Prisma desde el paquete @prisma/client

import { PrismaClient } from "@prisma/client"


// Función para crear una nueva instancia de PrismaClient
const prismaClientSingleton = () => {
    return new PrismaClient()
}

// Referencia global para almacenar el cliente Prisma
const globalForPrisma = globalThis

// Utiliza una instancia existente de PrismaClient en el contexto global si existe, 
// de lo contrario, crea una nueva instancia
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

// Exporta la instancia de PrismaClient para que pueda ser utilizada en otras partes de la aplicación
export default prisma

// Si no estamos en producción, asigna la instancia de PrismaClient al contexto global
// para reutilizarla en solicitudes subsecuentes y evitar crear múltiples instancias de PrismaClient.
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
