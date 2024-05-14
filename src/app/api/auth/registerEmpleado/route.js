const { NextResponse } = require("next/server");
import db from "@/lib/db";
import bcrypt from 'bcrypt' // Biblioteca para la gestión de contraseñas (hashing y comparación)

export async function POST(request) {
    const data = await request.json();

    const { Name, LastName, BirthDate, Gender, Phone, Address, Position, RFC, Email, Password } = data;

    const existingUser = await db.usuarios.findUnique({
        where: {
            Email
        }
    });

    if (existingUser) {
        console.log('Usuario ya registrado');
        return NextResponse.json({
            message: "Ya existe un usuario registrado con este correo electrónico"
        }, { status: 400 });
    } else {
        try {
            const hashPassword = await bcrypt.hash(Password, 10)
            const newUser = await db.usuarios.create({
                data: {
                    Email,
                    Password: hashPassword,
                    IsEmployee: true
                }
            });

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
                    Email// Asociar el email del empleado con el email del usuario
                }
            });
            return NextResponse.json({ empleado: newEmpleado, usuarios: usuarios });


        } catch (error) {
            console.error(error);
            return NextResponse.json({
                message: "Hubo un error al registrar el empleado"
            }, { status: 500 });
        }
    }
}
