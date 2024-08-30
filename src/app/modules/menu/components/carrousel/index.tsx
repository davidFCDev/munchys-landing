"use client";
import Image from "next/image";
import React, { useState } from "react";

const Carrousel = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const images = [
    { src: "/images/taza-cafe.webp", label: "Café" },
    { src: "/images/palmeras.webp", label: "Dulces" },
    { src: "/images/sandwich-cerca.webp", label: "Salados" },
  ];
  return (
    <>
      <div className="hidden small:flex small:flex-row space-x-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden h-[400px] flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer ${
              selected === index ? "w-[600px]" : "w-[400px]"
            }`}
            onMouseEnter={() => setSelected(index)}
            onMouseLeave={() => setSelected(null)}
          >
            <Image
              src={image.src}
              alt={`imagen${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300"
            />
            {selected === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 font-kabouter tracking-widest">
                <span className="text-white text-4xl font-bold border-b-secondary border-b-4">
                  {image.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col small:hidden space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden h-[400px] w-[350px] flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer ${
              selected === index ? "" : ""
            }`}
            onMouseEnter={() => setSelected(index)}
            onMouseLeave={() => setSelected(null)}
          >
            <Image
              src={image.src}
              alt={`imagen${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 font-kabouter tracking-widest">
              <span className="text-white text-4xl font-bold border-b-secondary border-b-4">
                {image.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carrousel;
