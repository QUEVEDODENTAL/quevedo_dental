'use client'

// Importación de módulos y hooks necesarios
import { set, useForm } from "react-hook-form"; // Para el manejo de formularios
import { signIn } from "next-auth/react"; // Para la autenticación
import { useRouter } from 'next/navigation'; // Para la navegación
import { useState } from 'react'; // Para manejar el estado

// Componente principal del formulario de inicio de sesión
function LoginForm() {
  // Inicialización de useForm para manejar el formulario
  const {
    register, // Para registrar los campos del formulario
    handleSubmit, // Para manejar el envío del formulario
    formState: { errors }, // Para manejar los errores del formulario
  } = useForm();

  const router = useRouter(); // Hook para la navegación
  const [error, setError] = useState(null); // Estado para manejar errores de autenticación

  // Función que se ejecuta al enviar el formulario
  const onSubmit = handleSubmit(async (data) => {
    // console.log(data);

    // Intento de inicio de sesión utilizando las credenciales proporcionadas
    const res = await signIn('credentials', {
      Email: data.Email, // Email del usuario
      Password: data.Password, // Contraseña del usuario
      redirect: false, // No redirigir automáticamente
    });

    // console.log(res);

    // Manejo de errores o redirección en caso de éxito
    if (res.error) {
      setError(res.error); // Establece el error si ocurre
    } else {
      router.push('/dashboard'); // Redirige al dashboard si el inicio de sesión es exitoso
    }
  });

  return (
    <div className="mx-1 p-4 custom-shadowa rounded-lg lg:w-3/5 md:w-3/4 bg-secondary-dash2">
      <h1 className='text-5xl font-bold flex justify-center mb-8'>Iniciar sesión</h1>

      <form onSubmit={onSubmit} className="space-y-4">

        {error && (
          <p className="bg-primary-red text-xs text-white p-3 rounded-md text-center"> {error}</p>
        )}

        <div className="flex flex-col">
          <label htmlFor="Email" className="text-lg font-medium">
            Correo:
          </label>
          <input
            type="Email"
            {...register("Email", {
              required: {
                value: true,
                message: "Email is required", // Mensaje de error si el campo está vacío
              },
            })}
            className="w-full outline-none rounded-md mb-4 bg-gray-200 px-4 py-3"
            placeholder="Ingresa tu correo electrónico"
            style={{ fontWeight: "300" }}
          />
          {errors.Email && (
            <span className="text-red-500 text-xs mb-4">{errors.Email.message}</span>
          )}
        </div>

        <label htmlFor="Password" className="text-lg font-medium">
          Contraseña:
        </label>
        <input
          type="Password"
          {...register("Password", {
            required: {
              value: true,
              message: "Password is required", // Mensaje de error si el campo está vacío
            },
          })}
          className="w-full outline-none rounded-md bg-gray-200 px-4 py-3"
          placeholder="Ingresa tu contraseña"
          style={{ fontWeight: "300" }}
        />
        {errors.Password && (
          <span className="text-red-500 text-xs">
            {errors.Password.message}
          </span>
        )}

        <button className="flex text-lg p-3 rounded-md bg-secondary-button text-white scale-95 cursor-pointer transform hover:scale-100 transition-transform duration-300 text-primary-white">
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
