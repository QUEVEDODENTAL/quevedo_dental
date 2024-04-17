import Link from 'next/link';
import { Mail, MapPin, Phone } from 'react-feather';

const Header = () => {
  return (
    <header className="flex flex-col sticky items-center min-w-full justify-end min-h-1">
      <div className="flex items-center min-w-full justify-between p-2 bg-primary-info ">
        <div className="p-3"><p className="text-sm flex text-text-blackText"><MapPin size={16} className='mx-2' /> Valle dorado, valle de los sirios, Ensenada, Baja California</p></div>
        <div className="flex">
          <div className="p-3"><p className="text-sm flex"><Phone size={16} className='mx-2' /> +52 646 256 3625</p></div>
          <div className="p-3">|</div>
          <div className="p-3"><p className="text-sm flex"><Mail size={16} className='mx-2' /> doctor@consultoriomx.com</p></div>
        </div>
      </div>
      <div className='flex flex-row items-center'>
        <div>
          <Link href="/">
            <h1 className="text-3xl text-gray-800 p-3">QUEVEDO<b>DENTAL</b></h1>
          </Link>

        </div>
        <nav className="hidden md:flex ">
          <ul className="flex items-center p-5">
            <li className='p-2'>
              <Link href="/#">Inicio</Link>
            </li>
            <li className='p-2'>
              <Link href="/#servicios">Servicio</Link>
            </li>
            <li className='p-2'>
              <Link href="/#sobre-nosotros">Sobre Nosotros</Link>
            </li>
            <li className='p-2'>
              <Link href="/#nuestro-equipo">Nuestro Equipo</Link>
            </li>
            <li className='p-2'>
              <Link href="/#contactanos">Contactanos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
