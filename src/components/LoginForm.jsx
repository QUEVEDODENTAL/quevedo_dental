'use client';
import Image from 'next/image';
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
    <div className="relative mx-auto p-8 w-4/5 max-w-lg custom-shadow rounded-lg bg-opacity-90">
      <Image
        src="/assets/wave.jpg" // Ruta de la imagen de fondo
        alt="Imagen de fondo de inicio de sesión" // Texto alternativo para la accesibilidad
        layout="fill" // Indicando que la imagen ocupe todo el espacio disponible
        objectFit="cover" // Indicando que la imagen se ajuste dentro del contenedor
        className="absolute top-0 left-0 z-0" // Posiciona la imagen detrás del contenido
      />

      <div className="relative z-10"> {/* Contenedor del contenido del formulario */}
        <h1 className='text-5xl font-bold flex justify-center mb-8'>Iniciar sesión</h1>


        <h1 className='text-5xl font-bold flex justify-center mb-8'>Iniciar sesión</h1>

        <form onSubmit={onSubmit} className="space-y-8">

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
                  message: "Correo electronico requerido", // Mensaje de error si el campo está vacío
                },
              })}
              className="w-full outline-none rounded-md mb-4 bg-gray-200 px-4 py-3 text-center"
              placeholder="Ingresa tu correo electrónico"
              style={{ fontWeight: "300" }} />
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
                message: "Contraseña requerida", // Mensaje de error si el campo está vacío
              },
            })}
            className="w-full outline-none rounded-md bg-gray-200 px-4 py-3 text-center"
            placeholder="Ingresa tu contraseña"
            style={{ fontWeight: "300" }} />
          {errors.Password && (
            <span className="text-red-500 text-xs">
              {errors.Password.message}
            </span>
          )}

          <button className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-gradient-to-r from-purple-700 to-blue-500"
            style={{ background: "linear-gradient(to right,  #2D16AD, #167CA5, #5AA7E6, #5EDCEC) " }}>
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
    </>);
}
