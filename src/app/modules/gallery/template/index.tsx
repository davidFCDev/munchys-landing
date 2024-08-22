'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
}

// Lista de imágenes en la carpeta public/images
const images: ImageProps[] = [
  { src: '/images/bolleria.jpg', alt: 'Bolleria' },
  { src: '/images/tortitas.jpg', alt: 'Bowl' },
  { src: '/images/cafe.jpg', alt: 'Café' },
  { src: '/images/palmeras.jpg', alt: 'Palmeras' },
  { src: '/images/sandwich-cerca2.jpg', alt: 'Sandwich cerca' },
  { src: '/images/poke.jpg', alt: 'Poke' },
  { src: '/images/lata-cafe.jpg', alt: 'Lata de café' },
  { src: '/images/sandwich-vaso.jpg', alt: 'Sandwich' },
];

const GalleryTemplate: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null);

  const handleImageClick = (image: ImageProps) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-0 pb-[75%] overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"              objectFit="cover"
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleCloseClick} // Cierra la imagen cuando se hace clic en cualquier lugar
        >
          <div className="relative">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryTemplate;
