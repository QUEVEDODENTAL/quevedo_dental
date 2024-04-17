'use client'

import Link from "next/link";

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault();
        const correo = event.target.correo.value;
        const password = event.target.password.value;
        console.log("Correo:", correo);
        console.log("Contraseña:", password);
    };

    return (
        <div className="mx-1 my-1 p-4 border-2 rounded-[15px] drop-shadow-2xl ">
            <h1 className='text-5xl font-semibold flex justify-center mb-[30px]'>Iniciar Sesión</h1>

            <form onSubmit={handleLogin}>
                <label className="text-lg font-medium px-[12px]">Correo</label>
                <input
                    type="email"
                    name='correo'
                    className="w-full outline-none rounded-[25px] mb-[10px] bg-[#e4e4e4] px-[12px] py-[15px]"
                    placeholder="Ingresa tu correo electrónico" />
                <label className="text-lg font-medium px-[12px]">Contraseña</label>
                <input
                    type="password"
                    name='password'
                    className="w-full outline-none rounded-[25px]  bg-[#e4e4e4] px-[12px] py-[15px]"
                    placeholder="Ingresa tu contraseña" />

                <div className="mt-8 flex flex-col">
                    <button
                        type='submit'
                        name='registrar'
                        className="text-[1rem] p-[10px] rounded-[25px] bg-[#1f5792] cursor-pointer text-white" >
                        Iniciar sesión
                    </button>
                </div>
            </form>
            <div className="flex justify-center mt-[15px]">
                <p className="mr-2">¿No estás registrado?</p>
                <Link href={'/admin/registrar'} className="text-blue-500">Regístrate Ahora</Link>
            </div>
        </div>
    )
};

export default Login;
