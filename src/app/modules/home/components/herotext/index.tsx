import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center gap-6 absolute text-white">
      <h2 className="text-8xl font-extrabold tracking-wider font-patrick uppercase text-secondary">
        Munchys
      </h2>
      <p className="text-2xl italic">Desayunos, brunch y +</p>
      <button className="border-2 rounded-full px-10 py-3 text-lg tracking-wider uppercase font-semibold hover:bg-primary transition">
        Carta
      </button>
    </div>
  );
};

export default HeroText;
