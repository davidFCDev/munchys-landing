import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-primary text-white flex flex-col items-center py-10 text-center">
      <h3 className="text-base font-semibold text-neutral-800 uppercase -tracking-wider">
        Brunchea en Munchys
      </h3>
      <h1 className="text-[6rem] font-bold uppercase tracking-widest font-kabouter text-secondary border-text">
        Carta
      </h1>
      <div className="flex items-center gap-5">
        <a
          href="https://drive.google.com/file/d/1tAd8rx_2ZHXAVq4BbGUm9kgke6-v4F2R/view?usp=sharing"
          target="_blank"
          className="px-5 py-3 bg-neutral-800 hover:bg-neutral-700 font-semibold text-lg rounded-full"
        >
          Menú
        </a>
        <Link
          href={"/menu"}
          className="px-5 py-3 border border-white hover:border-neutral-800 hover:text-neutral-800 transition ease-in-out font-semibold text-lg rounded-full"
        >
          Galería
        </Link>
      </div>
    </header>
  );
};

export default Header;
