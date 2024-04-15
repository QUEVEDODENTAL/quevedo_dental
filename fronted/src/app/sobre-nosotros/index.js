import React from 'react'
import Image from 'next/image';

const SobreNosotros = () => {
  return (
    <section className="flex flex-col items-center min-h-screen p-5 min-w-full justify-between bg-primary-seccion">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-secondary-font">Sobre Nosotros</h2>

            <p class="mb-4">Somos un equipo de especialistas comprometidos con la salud bucal y el bienestar de nuestros pacientes. Nos destacamos por nuestra pasión por la odontología innovadora y nuestro enfoque en encontrar soluciones efectivas para cada necesidad dental. Con un enfoque centrado en el paciente y una dedicación inquebrantable, estamos aquí para brindarle la atención excepcional que usted y su familia merecen.</p>
            <p>Somos expertos en estrategia, diseño y desarrollo dental. Innovadores y solucionadores de problemas. Suficientemente flexibles para adaptarnos a sus necesidades, pero lo suficientemente sólidos como para ofrecer el más alto nivel de atención.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
        <Image
        className='w-full rounded-lg'
          src="/assets/sobrenosotros.jpg"
          alt="Dentista"
            width={400}
            height={400}
        />
        <Image
        className='mt-4 w-full lg:mt-10 rounded-lg'
          src="/assets/sobrenosotros2.jpg"
          alt="Dentista"
            width={400}
            height={400}
        />
        </div>
    </div>
    </section>
  )
}

export default SobreNosotros