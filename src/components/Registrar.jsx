const RegistrarPage = () => {

    return (
        <div className="bg-white mx-1 my-1 p-4  border-2 rounded-[15px] drop-shadow-2xl lg:w-1/4 md:w-1/2">
            <h1 className='text-5xl font-semibold flex justify-center mb-[30px]'>Registro</h1>

            <div className="flex justify-around">
                <button>Doctor </button>
                <button>Empleado</button>
            </div>

            <form>
                <label className="text-lg font-medium px-[12px]">Nombre(s)</label>
                <input
                    type="text"
                    name='nombre'
                    className="w-full outline-none rounded-[25px] mb-[10px] bg-[#e4e4e4] px-[12px] py-[15px]"
                    placeholder="Ingresa tu nombre" />
                <label className="text-lg font-medium px-[12px]">Apellido paterno</label>
                <input
                    type="text"
                    name='apellidop'
                    className="w-full outline-none rounded-[25px] mb-[10px] bg-[#e4e4e4] px-[12px] py-[15px]"
                    placeholder="Ingresa tu apellido paterno" />
                <label className="text-lg font-medium px-[12px]">Apellido materno</label>
                <input

                    type="text"
                    name='apellidom'
                    className="w-full outline-none rounded-[25px] mb-[10px] bg-[#e4e4e4] px-[12px] py-[15px]"
                    placeholder="Ingresa tu apellido materno" />
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
                    className="w-full outline-none rounded-[25px] bg-[#e4e4e4] px-[12px] py-[15px]"
                    placeholder="Ingresa tu contraseña" />

            </form>
            <div className="mt-8 flex flex-col">
                <button
                    type='submit'
                    name='registrar'
                    className="text-[1rem] p-[10px] rounded-[25px] bg-[#212529] cursor-pointer text-white" >Registrar</button>
            </div>
        </div>
    )
}
export default RegistrarPage