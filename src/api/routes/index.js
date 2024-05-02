const { PrismaClient } = require('@prisma/client');

// Crea una instancia del cliente Prisma
const prisma = new PrismaClient();

async function insertData() {
    try {
        // Insertar un nuevo cliente
        const newClient = await prisma.clientes.create({
            data: {
                Name: 'Alejandro',
                LastName: 'Valenzuela',
                SEX: 'M',
                Age: 27,
                BirthDate: new Date('1989-05-15'),
                Address: 'Isla San Lorenzo',
                Phone: '6462789007',
                CURP: 'VARA961109HBCLML07',
                Email: 'al20760222@ite.edu.mx',
                BloodType: 'O+',
                Occupation: 'Estudiante',
                Education: 'Ing. Sistemas Computacionales'
            },
        });
        console.log('Cliente insertado a la base de datos:', newClient);
    } catch (error) {
        console.error('Error al insertar cliente a la base de datos:', error);
    } finally {
        await prisma.$disconnect();
    }
}

insertData();