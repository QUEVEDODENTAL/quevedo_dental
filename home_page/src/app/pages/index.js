import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Image from "next/image";
export default function HeroBanner() { 
  return (
    <section className="flex flex-col items-center min-h-screen min-w-full justify-between bg-primary-seccion">
    <Header/>
    <div className="flex flex-row justify-center">
    <Banner/>
    </div>
      
    </section>
  );
}
