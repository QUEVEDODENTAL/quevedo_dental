import React from 'react';

function LoginForm() {
  return (
    <div className="mx-1 p-4 border-10 custom-shadowa rounded-lg lg:w-3/5 md:w-3/4">
      <h1 className='text-5xl font-bold flex justify-center mb-8'>Iniciar sesión</h1>

<<<<<<< HEAD
    return (
<div class="font-[sans-serif] text-[#333]">
      <div class="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div class="flex items-center gap-4 max-w-7xl w-full">
          <div class="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
            <form class="space-y-6">
              <div class="mb-10">
                <h3 class="text-3xl font-extrabold">Ingresa</h3>
              </div>
              <div>
                <label class="text-sm mb-2 block">Nombre</label>
                <div class="relative flex items-center">
                  <input name="username" type="text" required class="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]" placeholder="Ingresa tu usuario" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div>
                <label class="text-sm mb-2 block">Contraseña</label>
                <div class="relative flex items-center">
                  <input name="password" type="password" required class="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]" placeholder="Ingresa tu contraseña" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                  <label for="remember-me" class="ml-3 block text-sm">
                    Recuerdame
                  </label>
                </div>
                <div class="text-sm">
                  <a href="jajvascript:void(0);" class="text-blue-600 hover:underline">
                    Olvidaste la contraseña?
                  </a>
                </div>
              </div>
              <div class="!mt-10">
                <button type="button" class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-[#333] hover:bg-black focus:outline-none">
                  Ingresa
                </button>
              </div>
            </form>
<<<<<<< HEAD
          </div>
          <div class="lg:h-[400px] md:h-[300px] max-md:mt-10">
          </div>
=======
            <div className="mt-8 flex flex-col">
                <button
                    type='submit'
                    name='registrar'
                    className="text-[1rem] p-[10px] rounded-[25px] bg-[#1f5792] cursor-pointer text-white" >
                    Iniciar secion
                </button>
            </div>
            <div className="flex justify-center mt-[15px]">
                <p className="mr-2">No estas registrado?</p>
                <Link href={'/admin/registrar'} className="text-blue-500">Registrate Ahora</Link>
            </div>
>>>>>>> 454ccb76a73ad3467dce82bca06d3fccfc0872b3
        </div>
      </div>
    </div>
    )
=======
      <form className="space-y-4">
        <label htmlFor="usuario" className="text-lg font-medium">Correo:</label>
        <input
          type="text"
          id="usuario"
          className="w-full outline-none rounded-md mb-4 bg-gray-200 px-4 py-3"
          placeholder="Ingresa tu correo electrónico"
          style={{ fontWeight: "300" }}
        />
        <label htmlFor="contraseña" className="text-lg font-medium">Contraseña:</label>
        <input
          type="password"
          id="contraseña"
          className="w-full outline-none rounded-md bg-gray-200 px-4 py-3"
          placeholder="Ingresa tu contraseña"
          style={{ fontWeight: "300" }}
        />
      </form>

      <div className="mt-8 flex flex-col">
      <button type="submit" name="entrar" className="text-lg p-3 rounded-md bg-secondary-button text-white scale-95 cursor-pointer transform hover:scale-100 transition-transform duration-300 text-primary-white">
          Entrar
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="mt-4">
          <a href="#" className="text-sm text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
>>>>>>> QA
}

export default LoginForm;
