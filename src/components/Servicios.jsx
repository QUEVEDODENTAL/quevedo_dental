'use client'
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTooth } from 'react-icons/fa';

const Carousel = () => {
  const images = [
    {
      src: '/assets/carrusel1.jpg',
      caption: 'Imagen 1',
    },
    {
      src: '/assets/carrusel2.webp',
      caption: 'Imagen 2',
    },
    {
      src: '/assets/carrusel3.jpg',
      caption: 'Imagen 3',
    },
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
    }, 300);
  };

  const prevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto mb-8">
      <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-secondary-font md:pl-4 sm:pl-4 md:ml-0">Servicios</h2>
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
            src={images[currentImageIndex].src}
            alt={`Slide ${currentImageIndex + 1}`}
            className={`w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-60'}`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-25"></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10 text-center transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <FaTooth className="inline-block mr-2" />
            {images[currentImageIndex].caption}
          </div>
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
    </div>
  );
};

export default Carousel;

