import Header from '@/components/Header';
import Banner from '@/components/Banner';
import NuestroEquipo from './pages/nuestro-equipo';
import SobreNosotros from './pages/sobre-nosotros';
import Footer from '@/components/Footer';
import CardServices from '@/components/Servicios';
export default function Home() {
  return (

    <main className="flex flex-col items-center min-h-screen w-full bg-primary-main">
      <Header />
      <section>
        <Banner />
      </section>
      <section id='servicios' className="flex flex-col items-center min-w-full justify-between bg-primary-main">
        <CardServices />
      </section>
      <section id='sobre-nosotros' className="flex flex-col items-center min-w-full justify-between bg-primary-seccionary">
        <SobreNosotros />
      </section>
      <section id='nuestro-equipo' className="flex flex-col items-center min-w-full justify-between bg-primary-seccion">
        <NuestroEquipo />
      </section>
      <Footer />
    </main>
  );
}