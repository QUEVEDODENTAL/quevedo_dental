'use client'
import { Manrope } from "next/font/google";
import React, { useState } from 'react';
import Sliderbar from '@/components/Sliderbar';

const Inter = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isSliderVisible, setIsSliderVisible] = useState(true);

  const toggleSliderVisibility = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  return (
    <html lang="es">
      <body className={Inter.className}>
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
