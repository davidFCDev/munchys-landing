"use client";

import Footer from "@/app/modules/layout/footer";
import LegalAdvice from "@/app/modules/legal/legaladvice";
import Privacity from "@/app/modules/legal/privacity";
import React, { useState } from "react";

const LegalTemplate = () => {
  const [selected, setSelected] = useState(0);

  const tabs = [
    {
      title: "Aviso Legal",
      content: <LegalAdvice />,
    },
    {
      title: "Política de Privacidad",
      content: <Privacity />,
    },
  ];

  const handleTabChange = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="w-full">
      <main className="my-20 px-6 small:px-20 xlarge:px-40 flex flex-col gap-5 small:gap-10 text-justify">
        <div className="flex flex-row gap-0 small:gap-6 justify-between small:justify-start">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`text-xl px-5 py-2 rounded-md border border-primary ${
                selected === index
                  ? "bg-primary text-white font-semibold"
                  : ""
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <hr className="w-full border-2 border-base-100" />
        <div>{tabs[selected].content}</div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalTemplate;
