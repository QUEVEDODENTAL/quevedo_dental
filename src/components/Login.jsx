'use client'

import { set, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation'
import { useState } from 'react'
function LoginForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter()
  const [error, setError] = useState(null)

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await signIn('credentials', {
      Email: data.Email,
      Password: data.Password,
      redirect: false,
    });

    console.log(res);

    if (res.error) {
      setError(res.error)
    } else {
      router.push('/dashboard')
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
                message: "Email is required",
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
              message: "Password is required",
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
