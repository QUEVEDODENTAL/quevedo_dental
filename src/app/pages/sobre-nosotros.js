import React from 'react';
import Image from 'next/image';

const SobreNosotros = () => {
  return (
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-4">
      <div className="font-light sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-secondary-font">Sobre Nosotros</h2>

        <p className="mb-4">Somos un equipo de especialistas comprometidos con la salud bucal y el bienestar de nuestros pacientes. Nos destacamos por nuestra pasión por la odontología innovadora y nuestro enfoque en encontrar soluciones efectivas para cada necesidad dental. Con un enfoque centrado en el paciente y una dedicación inquebrantable, estamos aquí para brindarle la atención excepcional que usted y su familia merecen.</p>
        <p>Somos expertos en estrategia, diseño y desarrollo dental. Innovadores y solucionadores de problemas. Suficientemente flexibles para adaptarnos a sus necesidades, pero lo suficientemente sólidos como para ofrecer el más alto nivel de atención.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="w-full md:mt-0">
          <Image
            className='rounded-lg w-auto h-auto'
            src="/assets/sobrenosotros.jpg"
            alt="Dentista"
            width={400}
            height={400}
          />
        </div>
        <div className="w-full mt-4 md:mt-0">
  <Image
    className='rounded-lg'
    src="/assets/sobrenosotros2.jpg"
    alt="Dentista"
    width={800}
    height={600}
  />
</div>
      </div>
    </div>
  )
}

export default SobreNosotros;
