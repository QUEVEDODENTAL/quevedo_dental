import CardsPersonal from '@/components/CardsPersonal'
import React from 'react'

const NuestroEquipo = () => {
  return (
    <section className="flex flex-col items-center min-w-full bg-primary-main px-4 lg:pl-12">
      <div className='min-w-full text-4xl font-extrabold pt-2 mb-4 md:mb-8'>
        <h2 className='text-secondary-font '>Nuestro Equipo</h2>
      </div>
      <CardsPersonal />
    </section>
  )
}

export default NuestroEquipo  
