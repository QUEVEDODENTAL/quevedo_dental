const { NextResponse } = require("next/server");
import db from "@/lib/db";
import bcrypt from 'bcrypt';

export async function POST(request) {
    const data = await request.json();

    // Extrae los datos del empleado
    const { Name, LastName, BirthDate, Gender, Phone, Address, Position, RFC, Email, Password } = data;

    // Buscar si el email ya está registrado en la tabla de usuarios
    const existingUser = await db.usuarios.findUnique({
        where: {
            Email
        }
    });

    // Si el email ya existe, retornar un mensaje de error
    if (existingUser) {
        console.log('Usuario ya registrado');
        return NextResponse.json({
            message: "Ya existe un usuario registrado con este correo electrónico"
        }, { status: 400 });
    } else {
        try {
            // Se genera un hash de la contraseña proporcionada utilizando bcrypt
            const hashPassword = await bcrypt.hash(Password, 10)
            // Si el email no existe, crea un nuevo usuario
            const newUser = await db.usuarios.create({
                data: {
                    Email,
                    Password: hashPassword,
                    IsEmployee: true // Se establece que el nuevo usuario es un empleado
                }
            });

            // Crear el nuevo empleado asociado al usuario
            const newEmpleado = await db.empleado.create({
                data: {
                    Name,
                    LastName,
                    BirthDate,
                    Gender,
                    Phone,
                    Address,
                    Position,
                    RFC,
                    Email
                }
            });
            // Retornar la respuesta con el nuevo empleado
            return NextResponse.json({ empleado: newEmpleado, usuarios: newUser });

        } catch (error) {
            console.error(error);
            return NextResponse.json({
                message: "Hubo un error al registrar el empleado"
            }, { status: 500 });
        }
    }
}
