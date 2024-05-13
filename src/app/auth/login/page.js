'use client'
import Login from '@/components/Login'
import React from 'react'

export const LoginPage = () => {
    return (
        <section className="flex flex-col items-center min-h-screen p-5 min-w-full justify-center bg-primary-seccion">
            <div className='flex justify-center min-w text-xl font-extrabold pt-8'>
                <Login />
            </div>
        </section>
    )
}

export default LoginPage