'use client'
import React, { useState } from 'react';

const RegistrarPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);
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

            {selectedOption && (
                <form className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-2">
                    <div>
                        <label className="text-sm font-medium">Nombre(s):</label>
                        <input
                            type="text"
                            name='nombre'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Nombre"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Apellidos:</label>
                        <input
                            type="text"
                            name='Apellidos'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Apellidos"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Fecha de Nacimiento:</label>
                        <input
                            type="date"
                            name='fechaNacimiento'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Género:</label>
                        <select
                            name='genero'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            style={{ fontWeight: "300" }}>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-sm font-medium">Celular:</label>
                        <input
                            type="tel"
                            name='celular'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Celular"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Correo:</label>
                        <input
                            type="email"
                            name='correo'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Ingresa tu correo electronico"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Dirección:</label>
                        <input
                            type="text"
                            name='direccion'
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Dirección"
                            style={{ fontWeight: "300" }} />
                    </div>
                    {selectedOption === 'doctor' && (
                        <>
                            <div>
                                <label className="text-sm font-medium">Especialidad:</label>
                                <input
                                    type="text"
                                    name='especialidad'
                                    className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                    placeholder="Especialidad"
                                    style={{ fontWeight: "300" }} />
                            </div>
                            <div>
                                <label className="text-sm font-medium">CURP:</label>
                                <input
                                    type="text"
                                    name='curp'
                                    className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                    placeholder="CURP"
                                    style={{ fontWeight: "300" }} />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Licencia Médica:</label>
                                <input
                                    type="text"
                                    name='licenciaMedica'
                                    className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                    placeholder="Licencia Médica"
                                    style={{ fontWeight: "300" }} />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Número de Licencia:</label>
                                <input
                                    type="text"
                                    name='numeroLicencia'
                                    className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                    placeholder="Número de Licencia"
                                    style={{ fontWeight: "300" }} />
                            </div>
                        </>
                    )}
                    {selectedOption === 'empleado' && (
                        <>
                            <div>
                                <label className="text-sm font-medium">Posición:</label>
                                <input
                                    type="text"
                                    name='posicion'
                                    className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                    placeholder="Posición"
                                    style={{ fontWeight: "300" }} />
                            </div>
                            <div>
                                <label className="text-sm font-medium">RFC:</label>
                                <input
                                    type="text"
                                    name='rfc'
                                    className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                                    placeholder="RFC"
                                    style={{ fontWeight: "300" }} />
                            </div>
                        </>
                    )}
                    <div>
                        <label className="text-sm font-medium">Salario:</label>
                        <input
                            type="number"
                            name='salario'
                            value={salario}
                            onChange={handleSalarioChange}
                            className="w-full outline-secondary-font rounded-[3px] mb-[6px] bg-[#e4e4e4] px-[8px] py-[10px] text-sm"
                            placeholder="Salario"
                            style={{ fontWeight: "300" }} />
                    </div>
                    <div>
                        <label className="text-sm font-medium">Fecha de Contratación</label>
                        <input
                            type="date"
                            name='fechaContratacion'
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
        </div>
    );
}

export default RegistrarPage;
