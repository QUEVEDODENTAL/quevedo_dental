import { Phone, Mail, MapPin } from 'react-feather';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Contactanos from './pages/contactanos';
import NuestroEquipo from './pages/nuestro-equipo';
import SobreNosotros from './pages/sobre-nosotros';
import Servicios from './pages/servicios';
export default function Home() {
  return (

    <main className="flex flex-col items-center min-h-screen min-w-full md:min-w-0 bg-primary-main mx-24 ">
      <Header />

      <section className="flex flex-col items-center min-h-screen min-w-full justify-between bg-primary-seccion">
      
        <Banner />
      </section>
      <div>
        <section id='servicios' className="flex flex-col items-center min-h-screen min-w-full justify-between bg-primary-seccion">
          <Servicios />
        </section>
        <section id='sobre-nosotros' className="flex flex-col items-center min-h-screen min-w-full justify-between bg-primary-seccion">
          <SobreNosotros />
        </section>
        <section id='nuestro-equipo' className="flex flex-col items-center min-h-screen min-w-full justify-between bg-primary-seccion">
          <NuestroEquipo />
        </section>
        <section id='contactanos' className="flex flex-col items-center min-h-screen min-w-full justify-between bg-primary-seccion">
          <Contactanos />
        </section>
      </div>
    </main>
  );
}