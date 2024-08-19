import Image from "next/image";
import React from "react";
import BoxText from "../components/box-text";

const AboutTemplate = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <header className="w-full bg-primary text-white flex flex-col gap-4 items-center py-10 z-20">
        <h1 className="text-7xl font-semibold font-patrick">
          <span className="text-terciary">¿Qué</span> es Munchys?
        </h1>
        <h4 className="text-lg font-normal">
          Tu punto de encuentro favorito en Arrecife
        </h4>
      </header>

      <div className="relative w-full h-[80vh] my-0 overflow-hidden">
        <Image
          src="/local.jpg"
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
