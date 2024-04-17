import Link from "next/link"

const Login = () => {

    return (
<div class="font-[sans-serif] text-[#333]">
      <div class="min-h-screen flex fle-col items-center justify-center py-6 px-4">
        <div class="flexitems-center gap-4 max-w-7xl w-full">
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
          </div>
          <div class="lg:h-[400px] md:h-[300px] max-md:mt-10">
          </div>
        </div>
      </div>
    </div>
    )
}
export default Login