const RegistrarPage = () => {

    return (
        <div className=" mx-1 my-1 p-4 border-10 custom-shadowa rounded-[15px] lg:w-4/5 md:w-1/2">
            <h1 className='text-5xl font-bold flex justify-center mb-[30px]'>Registro</h1>

            <div className="flex justify-around">
                <div>
                    <button className="font-semibold text-secondary-font hover:bg-cyan-600" >Doctor </button>
                </div>
                <div>
                    <button className=" font-semibold text-secondary-font">Empleado</button>
                </div>
            </div>

            <form>
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
    )
}
export default RegistrarPage