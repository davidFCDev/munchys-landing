"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ImageProps {
  src: string;
  alt: string;
}

// Lista de imágenes en la carpeta public/images
const images: ImageProps[] = [
  { src: "/images/bolleria.webp", alt: "Bolleria" },
  { src: "/images/tortitas.webp", alt: "Bowl" },
  { src: "/images/vinos1.webp", alt: "Vinos frescos" },
  { src: "/images/palmeras.webp", alt: "Palmeras" },
  { src: "/images/sandwich-vaso.webp", alt: "Sandwich cerca" },
  { src: "/images/vinos2.webp", alt: "Vinos zona" },
  { src: "/images/lata-cafe.webp", alt: "Lata de café" },
  { src: "/images/roll.webp", alt: "Cinammon roll" },
  { src: "/images/ensalada3.webp", alt: "Poke arroz" },
  { src: "/images/brownie.webp", alt: "Brownie chocolate" },
  { src: "/images/taza-cafe.webp", alt: "Taza de café" },
  { src: "/images/ensalada1.webp", alt: "Ensalada" },
  { src: "/images/ensalada2.webp", alt: "Ensalada brotes" },
  { src: "/images/bowl.webp", alt: "Tortitas" },
  { src: "/images/poke.webp", alt: "Poke de arroz" },
  { src: "/images/sandwich-cerca.webp", alt: "Ensalada" },
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
    <div className="mx-auto p-4">
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
              layout="fill"
              objectFit="cover"
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
