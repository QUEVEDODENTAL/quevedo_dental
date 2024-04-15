import { Phone, Mail, MapPin } from 'react-feather';
import HeroBanner from "./pages";
import Servicios from "./servicios";
import Contactanos from './contactanos';
import NuestroEquipo from './nuestro-equipo';
import SobreNosotros from './sobre-nosotros';
export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen min-w-full md:min-w-0 bg-primary-main mx-24">
      <div className="flex items-center min-w-full justify-between p-2 bg-primary-info">
        <div className="p-3"><p className="text-sm flex text-text-blackText"><MapPin size={16} className='mx-2'/> Valle dorado, valle de los sirios, Ensenada, Baja California</p></div>
        <div className="flex">
          <div className="p-3"><p className="text-sm flex"><Phone size={16} className='mx-2'/> +52 646 256 3625</p></div>
          <div className="p-3">|</div>
          <div className="p-3"><p className="text-sm flex"><Mail size={16} className='mx-2' /> doctor@consultoriomx.com</p></div>
        </div>
      </div>
      <HeroBanner></HeroBanner>
      <Servicios/>
      <SobreNosotros/>
      <NuestroEquipo/>
      <Contactanos/>
    </main>
  );
}
