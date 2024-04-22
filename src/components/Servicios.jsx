'use client'
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = () => {
  const images = [
    'https://lh3.googleusercontent.com/44OEKSc6rWXexvuvCdTKNK5FK38LgbiLBMooW00HAT0-uEdibYUltKqAY1ls1sPVqHzM_CnuIVw37EnEcCHl3Re8wlg8YPseR8ffsB1xpFT_Nt3-4JVhELvsz-fpQmfMpIZ1UqVr',
    'https://jboard-tenant.s3.us-west-1.amazonaws.com/editor/ndbNKCAQrv9PtnpZDIjml9cqhY4WLXFyDEWA3sc0.webp',
    'https://www.florence.edu.br/blog/wp-content/uploads/2023/02/Florence-como-ser-dentista.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLeftIconHovered, setIsLeftIconHovered] = useState(false);
  const [isRightIconHovered, setIsRightIconHovered] = useState(false);

  const nextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 300); // Duración de la transición en milisegundos
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsTransitioning(false);
    }, 300); // Duración de la transición en milisegundos
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto mb-8">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-secondary-font">Servicios</h2>
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-5xl z-10 ${isLeftIconHovered ? 'scale-110 transition-transform duration-300' : ''}`}
        onClick={prevImage}
        onMouseEnter={() => setIsLeftIconHovered(true)}
        onMouseLeave={() => setIsLeftIconHovered(false)}
      >
        <FaChevronLeft />
      </button>
      <div className="relative">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className={`w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-60'}`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div> {/* Superposición de color oscuro */}
      </div>
      <button
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-5xl z-10 ${isRightIconHovered ? 'scale-110 transition-transform duration-300' : ''}`}
        onClick={nextImage}
        onMouseEnter={() => setIsRightIconHovered(true)}
        onMouseLeave={() => setIsRightIconHovered(false)}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
