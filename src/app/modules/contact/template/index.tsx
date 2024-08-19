import React from "react";

import Links from "../components/links";

const ContactTemplate = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <header className="w-full bg-primary text-white flex flex-col gap-4 items-center py-10 z-20">
        <h1 className="text-7xl font-semibold font-patrick">
          ¿Quieres saber <span className="text-terciary">más</span>?
        </h1>
        <h4 className="text-lg font-normal">
          Échale un vistazo a nuestras redes o contacta con nosotros
        </h4>
      </header>

      <Links />
    </div>
  );
};

export default ContactTemplate;
