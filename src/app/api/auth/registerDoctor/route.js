const { NextResponse } = require("next/server");
import db from "@/lib/db";
import bcrypt from 'bcrypt' // Biblioteca para la gestión de contraseñas (hashing y comparación)

export async function POST(request) {
    const data = await request.json();

    // Extraer datos del doctor
    const { Name, LastName, BirthDate, Gender, Phone, Address, Specialty, CURP, MedicalLicense, LicenseNumber, Email, Password } = data;

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

            const hashPassword = await bcrypt.hash(Password, 10)
            // Si el email no existe, crea un nuevo usuario
            const newUser = await db.usuarios.create({
                data: {
                    Email,
                    Password: hashPassword,
                    IsDoctor: true
                }
            });

            // Crear el nuevo doctor asociado al usuario
            const newDoctor = await db.doctor.create({
                data: {
                    Name,
                    LastName,
                    BirthDate,
                    Gender,
                    Phone,
                    Address,
                    Specialty,
                    CURP,
                    MedicalLicense,
                    LicenseNumber,
                    Email // Asociar el email del doctor con el email del usuario
                }
            });


            // Retornar la respuesta con el nuevo doctor
            return NextResponse.json({ doctor: newDoctor, usuarios: newUser });
        } catch (error) {
            console.error(error);
            // En caso de error, el entorno manejará el error y lo mostrará según su configuración predeterminada
            return NextResponse.json({
                message: "Hubo un error al registrar el doctor"
            }, { status: 500 });
        }
    }

}
