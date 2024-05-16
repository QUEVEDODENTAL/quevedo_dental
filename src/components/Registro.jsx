'use client'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegistrarPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [password, setPassword] = useState('');
    const [salario, setSalario] = useState('');
    const [fechaContratacion, setFechaContratacion] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSalarioChange = (event) => {
        setSalario(event.target.value);
    };

    const handleFechaContratacionChange = (event) => {
        setFechaContratacion(event.target.value);
    };


    const onSubmitDoctor = handleSubmit(async (data) => {

        const password = data.Password.trim().toLowerCase();
        const confirmPassword = data.ConfirmPassword.trim().toLowerCase();

        if (password !== confirmPassword) {
            return alert('La contraseña no es igual.');
        }

        // Procesar la fecha para asegurarte de que no contiene la hora
        const birthDate = new Date(data.BirthDate);
        birthDate.setUTCHours(0, 0, 0, 0); // Asegurar que la hora sea 00:00:00

        // Procesar la fecha para asegurarte de que no contiene la hora
        const dateHere = new Date(data.DateHere);
        dateHere.setUTCHours(0, 0, 0, 0); // Asegurar que la hora sea 00:00:00

        const doctorData = {
            Name: data.Name,
            LastName: data.LastName,
            BirthDate: birthDate,
            Gender: data.Gender,
            Phone: data.Phone,
            Address: data.Address,
            Specialty: data.Specialty,
            CURP: data.CURP,
            MedicalLicense: data.MedicalLicense,
            LicenseNumber: data.LicenseNumber,
            Salary: data.Salary,
            DateHere: dateHere,
            Email: data.Email,
            Password: data.Password,
        };

        // console.log(doctorData);

        try {
            const registrationRes = await fetch('/api/auth/registerDoctor', {
                method: 'POST',
                body: JSON.stringify(doctorData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!registrationRes.ok) {
                const errorData = await registrationRes.json();
                throw new Error(errorData.message || 'Error al registrar el doctor');
            }

            alert('Registro exitoso');
        } catch (error) {
            alert(error.message);
        }
    });



    const onSubmitEmpleado = handleSubmit(async (data) => {
        const password = data.PasswordE.trim().toLowerCase();
        const confirmPassword = data.ConfirmPasswordE.trim().toLowerCase();

        if (password !== confirmPassword) {
            return alert('La contraseña no es igual.');
        }

        const birthDateE = new Date(data.BirthDateE);
        birthDateE.setUTCHours(0, 0, 0, 0);

        const dateHereE = new Date(data.DateHireE);
        dateHereE.setUTCHours(0, 0, 0, 0);

        const empleadoData = {
            Name: data.NameE,
            LastName: data.LastNameE,
            BirthDate: birthDateE,
            Gender: data.GenderE,
            Phone: data.PhoneE,
            Address: data.AddressE,
            Position: data.PositionE,
            RFC: data.RFCE,
            Salary: data.SalaryE,
            DateHere: dateHereE,
            Email: data.EmailE,
            Password: password,
        };

        // console.log(empleadoData);

        try {
            const registrationRes = await fetch('/api/auth/registerEmpleado', {
                method: 'POST',
                body: JSON.stringify(empleadoData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!registrationRes.ok) {
                const errorData = await registrationRes.json();
                throw new Error(errorData.message || 'Error al registrar el empleado');
            }

            alert('Registro exitoso');
        } catch (error) {
            alert(error.message);
        }
    });

    return (
        <div className="mx-1 my-1 p-4 border-10 custom-shadowa rounded-[10px] lg:w-4/5 md:w-4/4">
            <h1 className='text-3xl font-bold flex justify-center mb-[20px]'>Registro</h1>
            <div className="flex justify-around">
                <div style={{ flex: 1 }}>
                    <button
                        className={`font-semibold text-sm text-secondary-font hover:bg-secondary-font hover:text-primary-white ${selectedOption === 'doctor' ? 'bg-secondary-font text-white' : ''}`}
                        onClick={() => handleOptionSelect('doctor')}
                        style={{ width: '100%', padding: '10px', borderRadius: '10px', textAlign: 'center', marginBottom: '10px', transition: 'background-color 0.3s' }}
                    >
                        Doctor
                    </button>
                </div>
                <div style={{ flex: 1 }}>
                    <button
                        className={`font-semibold text-sm text-secondary-font hover:bg-secondary-font hover:text-primary-white ${selectedOption === 'empleado' ? 'bg-secondary-font text-white' : ''}`}
                        onClick={() => handleOptionSelect('empleado')}
                        style={{ width: '100%', padding: '10px', borderRadius: '10px', textAlign: 'center', marginBottom: '10px', transition: 'background-color 0.3s' }}
                    >
                        Empleado
                    </button>
                </div>
            </div>
            {selectedOption === 'doctor' && (
                <form onSubmit={onSubmitDoctor} className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-2">
                    <div>
                        <label className="text-sm font-medium">Nombre(s):</label>
                        <input
                            {...register("Name", { requierd: true })}
                            type="text"
                            name='Name'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Nombre"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Apellidos:</label>
                        <input
                            {...register("LastName", { requierd: true })}
                            type="text"
                            name='LastName'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Apellidos"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Fecha de Nacimiento:</label>
                        <input
                            {...register("BirthDate", { requierd: true })}
                            type="date"
                            name='BirthDate'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Género:</label>
                        <select
                            {...register("Gender", { requierd: true })}
                            name='Gender'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            style={{ fontWeight: "300" }}>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-medium">Celular:</label>
                        <input
                            {...register("Phone", { requierd: true })}
                            type="tel"
                            name='Phone'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Celular"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Correo:</label>
                        <input
                            {...register("Email", { requierd: true })}
                            type="email"
                            name='Email'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Ingresa tu correo electronico"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Contraseña:</label>
                        <input
                            {...register("Password", { requierd: true })}
                            type="password"
                            name='Password'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Ingresa tu contraseña"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Confirmacion contraseña:</label>
                        <input
                            {...register("ConfirmPassword", { requierd: true })}
                            type="password"
                            name='ConfirmPassword'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Confirma tu contraseña"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Dirección:</label>
                        <input
                            {...register("Address", { requierd: true })}
                            type="text"
                            name='Address'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Dirección"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Especialidad:</label>
                        <input
                            {...register("Specialty", { requierd: true })}
                            type="text"
                            name='Specialty'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Especialidad"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">CURP:</label>
                        <input
                            {...register("CURP", { requierd: true })}
                            type="text"
                            name='CURP'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="CURP"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Licencia Médica:</label>
                        <input
                            {...register("MedicalLicense", { requierd: true })}
                            type="text"
                            name='MedicalLicense'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Licencia Médica"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Número de Licencia:</label>
                        <input
                            {...register("LicenseNumber", { requierd: true })}
                            type="text"
                            name='LicenseNumber'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Número de Licencia"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Salario:</label>
                        <input
                            {...register("Salary", { requierd: true })}
                            type="number"
                            name='Salary'
                            value={salario}
                            onChange={handleSalarioChange}
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Salario"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Fecha de Contratación</label>
                        <input
                            {...register("DateHire", { requierd: true })}
                            type="date"
                            name='DateHire'
                            value={fechaContratacion}
                            onChange={handleFechaContratacionChange}
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            style={{ fontWeight: "300" }} />
                    </div>
                    {selectedOption === 'doctor' && (
                        <>
                            <div>
                                <label className="text-sm font-medium">Contraseña:</label>
                                <input
                                    type="password"
                                    name='contrasenaDoctor'
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                    placeholder="Contraseña"
                                    style={{ fontWeight: "300" }} />
                            </div>
                        </>
                    )}
                    {selectedOption === 'empleado' && (
                        <>
                            <div>
                                <label className="text-sm font-medium">Contraseña:</label>
                                <input
                                    type="password"
                                    name='contrasenaEmpleado'
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                    placeholder="Contraseña"
                                    style={{ fontWeight: "300" }} />
                            </div>
                        </>
                    )}
                    <div className="mt-4">
                        <button type="submit" name="registrar" className="text-[1rem] p-[10px] rounded-[10px] scale-90 bg-secondary-font text-primary-seccion cursor-pointer text-white hover:bg-secondary-font hover:text-primary-seccion hover:scale-100 transition-transform duration-300">
                            Registrar
                        </button>
                    </div>
                </form>
            )}
            {selectedOption === 'empleado' && (
                <>
                    <form onSubmit={onSubmitEmpleado} className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-2">
                        <div>
                            <label className="text-sm font-medium">Nombre(s):</label>
                            <input
                                {...register("NameE", { requierd: true })}
                                type="text"
                                name='NameE'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                placeholder="Nombre"
                                style={{ fontWeight: "300" }} />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Apellidos:</label>
                            <input
                                {...register("LastNameE", { requierd: true })}
                                type="text"
                                name='LastNameE'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                placeholder="Apellidos"
                                style={{ fontWeight: "300" }} />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Fecha de Nacimiento:</label>
                            <input
                                {...register("BirthDateE", { requierd: true })}
                                type="date"
                                name='BirthDateE'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                style={{ fontWeight: "300" }} />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Género:</label>
                            <select
                                {...register("GenderE", { requierd: true })}
                                name='GenderE'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                style={{ fontWeight: "300" }}>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-medium">Celular:</label>
                            <input
                                {...register("PhoneE", { requierd: true })}
                                type="tel"
                                name='PhoneE'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                placeholder="Celular"
                                style={{ fontWeight: "300" }} />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Correo:</label>
                            <input
                                {...register("EmailE", { requierd: true })}
                                type="email"
                                name='EmailE'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                placeholder="Ingresa tu correo electronico"
                                style={{ fontWeight: "300" }} />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Contraseña:</label>
                            <input
                                {...register("PasswordE", { requierd: true })}
                                type="password"
                                name='PasswordE'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                placeholder="Ingresa tu contraseña"
                                style={{ fontWeight: "300" }} />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Confirmacion contraseña:</label>
                            <input
                                {...register("ConfirmPasswordE", { requierd: true })}
                                type="password"
                                name='ConfirmPasswordE'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                placeholder="Confirma tu contraseña"
                                style={{ fontWeight: "300" }} />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Dirección:</label>
                            <input
                                {...register("AddressE", { requierd: true })}
                                type="text"
                                name='AddressE'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                placeholder="Dirección"
                                style={{ fontWeight: "300" }} />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Posición:</label>
                            <input
                                {...register("PositionE", { requierd: true })}
                                type="text"
                                name='PositionE'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                placeholder="Posición"
                                style={{ fontWeight: "300" }} />
                        </div>
                        <div>
                            <label className="text-sm font-medium">RFC:</label>
                            <input
                                {...register("RFCE", { requierd: true })}
                                type="text"
                                name='RFCE'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                placeholder="RFC"
                                style={{ fontWeight: "300" }} />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Salario:</label>
                            <input
                                {...register("SalaryE", { requierd: true })}
                                type="number"
                                name='Salary'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                placeholder="SalarioE"
                                style={{ fontWeight: "300" }} />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Fecha de Contratación</label>
                            <input
                                {...register("DateHireE", { requierd: true })}
                                type="date"
                                name='DateHireE'
                                className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                style={{ fontWeight: "300" }} />
                        </div>
                        <div className="mt-4">
                            <button type="submit" name="registrar" className="text-[1rem] p-[10px] rounded-[10px] scale-90 bg-secondary-font text-primary-seccion cursor-pointer text-white hover:bg-secondary-font hover:text-primary-seccion hover:scale-100 transition-transform duration-300">
                                Registrar
                            </button>
                        </div>
                    </form>
                </>
            )};
        </div>

    )
}

export default RegistrarPage;
