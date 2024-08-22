import React from "react";
import "./index.css";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center gap-6 absolute text-white font-kabouter tracking-widest">
      <h2 className="text-7xl small:text-9xl font-extrabold uppercase text-secondary curved-text border-text">
        <span>M</span>
        <span>u</span>
        <span>n</span>
        <span>c</span>
        <span>h</span>
        <span>y</span>
        <span>s</span>
      </h2>
      <p className="text-2xl small:text-3xl italic">Desayunos, brunch y +</p>
      <a
        href="https://drive.google.com/file/d/1tAd8rx_2ZHXAVq4BbGUm9kgke6-v4F2R/view?usp=sharing"
        target="_blank"
        className="border-2 rounded-full px-8 small:px-10 py-2 small:py-3 text-2xl  uppercase font-semibold hover:bg-primary transition"
      >
        Carta
      </a>
    </div>
  );
};

export default HeroText;
