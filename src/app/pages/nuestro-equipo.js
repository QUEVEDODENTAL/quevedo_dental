import CardsPersonal from '@/components/CardsPersonal'
import React from 'react'

const NuestroEquipo = () => {
  return (
    <section className="flex flex-col items-center min-h-screen p-5 min-w-full justify-between bg-primary-main">
      <div className='min-w-full text-4xl font-extrabold pt-10 '>
        <h2 className='text-secondary-font '>Nuestro Equipo</h2>
      </div>
      <CardsPersonal />
    </section>
  )
}

export default NuestroEquipo    