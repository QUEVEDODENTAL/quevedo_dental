import FormsContacto from '@/components/FormsContacto'
import Map from '@/components/Map'
import React from 'react'

const Contactanos = () => {
  return (
    <section className="flex flex-col items-center min-h-screen p-5 min-w-full justify-between bg-primary-seccion">
    <div className='min-w-full text-4xl font-extrabold pt-8'>
    <h2 className='text-secondary-font '>Contactanos</h2>
    </div>
    <div className='grid grid-cols-2 min-w-full min-h-screen gap-3 '>
    <FormsContacto/>
    <Map/>
    </div>
    
    </section>
  )
}

export default Contactanos