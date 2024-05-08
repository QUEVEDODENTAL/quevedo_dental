import React from 'react';

function LoginForm() {
  return (
    <div className="mx-1 p-4 border-10 custom-shadowa rounded-lg lg:w-3/5 md:w-3/4">
      <h1 className='text-5xl font-bold flex justify-center mb-8'>Iniciar sesión</h1>

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
}

export default LoginForm;
