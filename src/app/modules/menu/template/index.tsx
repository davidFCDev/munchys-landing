"use client";
import Carrousel from "../components/carrousel";
import Header from "../components/header";

const MenuTemplate: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center pb-32">
      <Header />

      <div className="flex flex-col gap-5 items-center py-10">
        <h2 className="text-4xl font-semibold text-neutral-800 font-kabouter">¿Eres más de dulce o de salado? ¿Café o smoothie?</h2>
        <h3 className="text-lg">Ven a conocernos y déjate sorprender por nuestra variedad de bebidas, platos dulces y salados.</h3>
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        <Carrousel />
      </div>
    </div>
  );
};

export default MenuTemplate;
