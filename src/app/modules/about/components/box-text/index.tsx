import React from "react";

const BoxText = () => {
  return (
    <div className="bg-black bg-opacity-60 text-white p-16 w-[40%] text-justify flex flex-col gap-4">
      <h3 className="text-4xl font-semibold text-white font-patrick">
        De <span className="text-terciary">Puzzle</span> Madrid a{" "}
        <span className="text-primary">Munchys</span> Arrecife
      </h3>
      <p className="leading-loose font-light">
        Puzzle nació como un rompecabezas gastronómico, donde cada pieza
        encajaba a la perfección para logar una experiencia única, canalla y
        divertida.
      </p>
      <p className="leading-loose font-light">
        Lo que comenzó en Puzzle, continúa ahora en Munchys en su versión de
        desayunos y brunch. Sin dejar de lado un estilo desenfadado, pero
        cuidando al máximo cada detalle y la calidad de todos nuestros productos
      </p>
    </div>
  );
};

export default BoxText;
