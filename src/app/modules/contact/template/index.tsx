import React from "react";

import Links from "../components/links";

const ContactTemplate = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <header className="w-full bg-primary text-white flex flex-col gap-4 items-center py-6 small:py-10 z-20 tracking-wider text-center">
        <h1 className="text-4xl small:text-7xl font-semibold font-kabouter">
          ¿Quieres saber <span className="text-secondary border-text">más</span>?
        </h1>
        <h4 className="text-sm small:text-lg font-light max-w-56 small:max-w-full">
          Échale un vistazo a nuestras redes o contáctanos
        </h4>
      </header>

      <Links />
    </div>
  );
};

export default ContactTemplate;
