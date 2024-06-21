'use client'
import { Manrope } from "next/font/google";
import React, { useState } from 'react';
import Sliderbar from '@/components/Sliderbar';

const Inter = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isSliderVisible, setIsSliderVisible] = useState(true);
  // const [isLoading, setIsLoading] = useState(false); // indicador de carga

  const toggleSliderVisibility = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  return (
    <html lang="es">
      <body className={Inter.className}>
        {/* {isLoading && ( // Mostrar indicador de carga si isLoading es true
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-16 w-16"></div>
          </div>
        )} */}
        <div className="flex">
          <Sliderbar isSliderVisible={isSliderVisible} toggleSliderVisibility={toggleSliderVisibility} />
          <main className={`transition-all duration-500 flex-grow ${isSliderVisible ? 'ml-64' : 'ml-0'}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
