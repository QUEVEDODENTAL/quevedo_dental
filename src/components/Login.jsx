'use client'
import { signIn } from 'next-auth/react';
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Verificar si los campos de correo y contraseña están vacíos
    if (!email || !password) {
      setError('Por favor, ingresa tu correo y contraseña.');
      return;
    }
    // Intentar iniciar sesión si los campos no están vacíos
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    if (!result.error) {
      window.location.href = '/dashboard';
    } else {
      // El inicio de sesión falló, mostrar un mensaje de error al usuario
      setError(result.error);
    }
  };

  return (
    <div className="mx-1 p-4 custom-shadowa rounded-lg lg:w-3/5 md:w-3/4 bg-secondary-dash2">
      <h1 className='text-5xl font-bold flex justify-center mb-8'>Iniciar sesión</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="usuario" className="text-lg font-medium">Correo:</label>
        <input
          type="text"
          id="usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full outline-none rounded-md mb-4 bg-gray-200 px-4 py-3"
          placeholder="Ingresa tu correo electrónico"
          style={{ fontWeight: "300" }}
        />
        <label htmlFor="contraseña" className="text-lg font-medium">Contraseña:</label>
        <input
          type="password"
          id="contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full outline-none rounded-md bg-gray-200 px-4 py-3"
          placeholder="Ingresa tu contraseña"
          style={{ fontWeight: "300" }}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" name="entrar" className="text-lg p-3 rounded-md bg-secondary-button text-white scale-95 cursor-pointer transform hover:scale-100 transition-transform duration-300 text-primary-white">
          Entrar
        </button>
      </form>

      <div className="mt-8 flex flex-col items-center">
        <div className="mt-4">
          <a href="#" className="text-sm text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
