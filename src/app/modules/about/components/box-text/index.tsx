import React from "react";

const BoxText = () => {
  return (
    <div className="bg-black bg-opacity-60 text-white p-6 small:p-16 w-[85%] small:w-[40%] flex flex-col gap-4 text-justify">
      <h3 className="text-3xl small:text-4xl font-semibold text-white font-kabouter">
        De <span className="text-secondary">Puzzle</span> Madrid a{" "}
        <span className="text-primary">Munchys</span> Arrecife
      </h3>
      <p className="small:leading-loose font-light text-xs small:text-base">
        Puzzle nació en Madrid como un rompecabezas gastronómico para ofrecer
        una experiencia única y divertida.
      </p>
      <p className="small:leading-loose font-light text-xs small:text-base">
        Con el tiempo nos dimos cuenta de que le faltaba una pieza a nuestro
        puzzle, un entorno relajado y paradisiaco como el que ofrece esta bella
        isla.
      </p>
      <p className="small:leading-loose font-light text-xs small:text-base">
        Hemos querido exprimir cada rayito de sol y nos hemos pasado a los
        desayunos y brunch, para que empieces bien tu dia (eso sí, sin dejar
        atrás el buen vino).
      </p>
    </div>
  );
};

export default BoxText;
