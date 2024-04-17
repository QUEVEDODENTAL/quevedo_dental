<<<<<<< HEAD
import { signup } from '@/app/actions/auth'
const RegistrarPage = () => {
=======
import RegistrarPage from '@/components/Registrar'
import React from 'react'
>>>>>>> 454ccb76a73ad3467dce82bca06d3fccfc0872b3

export const RegistroPage = () => {
    return (
        <section className="flex flex-col items-center min-h-screen p-5 min-w-full justify-center bg-primary-seccion">
            <div className='flex justify-center min-w text-xl font-extrabold pt-8'>
                <RegistrarPage />
            </div>
<<<<<<< HEAD

            <form action={signup}>
                <label className="text-lg font-medium px-[12px]">Nombre(s)</label>
                <input
                    type="text"
                    name='nombre'
                    className="w-full outline-secondary-font rounded-[5px] mb-[10px] bg-[#e4e4e4] px-[12px] py-[15px]"
                    placeholder="Nombre" />
                <label className="text-lg font-medium px-[12px]">Apellidos</label>
                <input
                    type="text"
                    name='Apellidos'
                    className="w-full outline-none rounded-[5px] mb-[10px] bg-[#e4e4e4] px-[12px] py-[15px]"
                    placeholder="Apellidos" />
                <label className="text-lg font-medium px-[12px]">Correo</label>
                <input

                    type="email"
                    name='correo'
                    className="w-full outline-none rounded-[5px] mb-[10px] bg-[#e4e4e4] px-[12px] py-[15px]"
                    placeholder="Ingresa tu correo electronico" />
                <label className="text-lg font-medium px-[12px]">Contraseña</label>
                <input
                    type="password"
                    name='password'
                    className="w-full outline-none rounded-[5px] bg-[#e4e4e4] px-[12px] py-[15px]"
                    placeholder="Ingresa tu contraseña" />
            </form>
            <div className="mt-8 flex flex-col ">
                <button type="submit" name="registrar" className="text-[1rem] p-[10px] rounded-[10px] bg-primary-info text-primary-seccion cursor-pointer text-white hover:bg-primary-info hover:text-primary-seccion hover:scale-95 transition-transform duration-300">
                    Registrar
                </button>
            </div>
        </div>
=======
        </section>
>>>>>>> 454ccb76a73ad3467dce82bca06d3fccfc0872b3
    )
}

export default RegistroPage