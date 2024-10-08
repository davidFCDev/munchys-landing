import Image from "next/image";
import React from "react";
import BoxText from "../components/box-text";

const AboutTemplate = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <header className="w-full bg-primary text-white flex flex-col gap-4 items-center py-6 small:py-10 z-20 tracking-wider text-center">
        <h1 className="text-4xl small:text-7xl font-semibold font-kabouter">
          ¿<span className="text-secondary border-text">Qué</span> es Munchys?
        </h1>
        <h4 className="text-sm small:text-lg font-light max-w-56 small:max-w-full">
          Tu punto de encuentro favorito en Arrecife
        </h4>
      </header>

      <div className="relative w-full h-[80vh] my-0 overflow-hidden">
        <Image
          src="/images/local.webp"
          alt="Imagen local"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 filter brightness-50"
        />
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <BoxText />
        </div>
      </div>
    </div>
  );
};

export default AboutTemplate;
