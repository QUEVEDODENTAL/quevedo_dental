import Link from "next/link"

const Login = () => {

    return (
        <div className="mx-1 my-1 p-4 border-2 rounded-[15px] drop-shadow-2xl ">
            <h1 className='text-5xl font-semibold flex justify-center mb-[30px]'>Iniciar Sesion</h1>

            <form>
                <label className="text-lg font-medium px-[12px]">Correo</label>
                <input
                    type="email"
                    name='correo'
                    className="w-full outline-none rounded-[25px] mb-[10px] bg-[#e4e4e4] px-[12px] py-[15px]"
                    placeholder="Ingresa tu correo electronico" />
                <label className="text-lg font-medium px-[12px]">Contraseña</label>
                <input
                    type="password"
                    name='password'
                    className="w-full outline-none rounded-[25px]  bg-[#e4e4e4] px-[12px] py-[15px]"
                    placeholder="Ingresa tu contraseña" />

            </form>
            <div className="mt-8 flex flex-col">
                <button
                    type='submit'
                    name='registrar'
                    className="text-[1rem] p-[10px] rounded-[25px] bg-[#1f5792] cursor-pointer text-white" >Iniciar secion</button>
            </div>
            <div className="flex justify-center mt-[15px]">
                <p className="mr-2">No estas registrado?</p>
                <Link href={'/admin/registrar'} className="text-blue-500">Registrate Ahora</Link>
            </div>
        </div>
    )
}
export default Login