import CardServices from '@/components/CardServices'
import React from 'react'

const Servicios = () => {
  return (
    <section className="flex flex-col items-center min-h-screen p-5 min-w-full justify-between bg-primary-main">
    <div className='min-w-full text-4xl font-extrabold pt-8'><h2 className='text-secondary-font '>Servicios</h2></div>
    <CardServices/>
    </section>
  )
}

export default Servicios