// 'use client'

// import Link from "next/link";

// const Login = () => {

//     const handleLogin = (event) => {
//         event.preventDefault();
//         const correo = event.target.correo.value;
//         const password = event.target.password.value;
//         console.log("Correo:", correo);
//         console.log("Contraseña:", password);
//     };

//     return (
//         <div className="mx-1 my-1 p-4 border-10 custom-shadowa rounded-[15px] lg:w-3/5 md:w-1/2">
//             <h1 className='text-5xl font-semibold flex justify-center mb-[30px]'>Iniciar Sesión</h1>

//             <form onSubmit={handleLogin}>
//                 <label className="text-lg font-medium px-[12px]">Correo</label>
//                 <input
//                     type="email"
//                     name='correo'
//                     className="w-full outline-none rounded-[5px] mb-[10px] bg-[#e4e4e4] px-[12px] py-[15px]"
//                     placeholder="Ingresa tu correo electrónico" />
//                 <label className="text-lg font-medium px-[12px]">Contraseña</label>
//                 <input
//                     type="password"
//                     name='password'
//                     className="w-full outline-none rounded-[5px]  bg-[#e4e4e4] px-[12px] py-[15px]"
//                     placeholder="Ingresa tu contraseña" />

//                 <div className="mt-8 flex flex-col">
//                     <button
//                         type='submit'
//                         name='registrar'
//                         className="text-[1rem] p-[10px] rounded-[5px] bg-primary-info cursor-pointer text-white font-medium scale-90 hover:scale-100 transition-transform duration-300" >
//                         Iniciar sesión
//                     </button>
//                 </div>
//             </form>
//             <div className="flex justify-center mt-[15px]">
//                 <p className="mr-2 font-medium">¿No estás registrado?</p>
//                 <Link href={'/admin/registrar'} className="text-blue-500">Regístrate Ahora</Link>
//             </div>
//         </div>
//     )
// };

// export default Login;
