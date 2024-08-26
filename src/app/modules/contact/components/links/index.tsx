import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdPhoneAndroid } from "react-icons/md";

interface LinkCardProps {
  href: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  subtext: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ href, title, icon, description, subtext }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-neutral-100 rounded-md border text-neutral-800 p-6 small:p-10 w-full h-44 small:h-64 flex flex-col gap-5 justify-between"
    >
      <div className="text-5xl font-bold flex items-center justify-between">
        <h2 className="font-kabouter text-4xl small:text-5xl">{title}</h2>
        {icon}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm small:text-base">{description}</h3>
          <h3 className="text-lg small:text-xl font-semibold">{subtext}</h3>
        </div>
        <button className="btn btn-primary text-lg small:text-xl">
          <BsArrowRight />
        </button>
      </div>
    </a>
  );
};

const Links: React.FC = () => {
  return (
    <div className="w-full flex flex-col small:flex-row items-center gap-6 small:gap-10 px-6 small:px-10 py-14 small:py-20">
      <LinkCard
        href="mailto:munchysbypuzzle@gmail.com"
        title="Email"
        icon={<MdOutlineAlternateEmail />}
        description="Envíanos un correo"
        subtext="munchysbypuzzle@gmail.com"
      />
      <LinkCard
        href="#"
        title="Teléfono"
        icon={<MdPhoneAndroid />}
        description="Llámanos"
        subtext="666123456"
      />
      <LinkCard
        href="https://www.instagram.com/munchysbypuzzle/"
        title="Instagram"
        icon={<FaInstagram />}
        description="Sigue nuestras redes"
        subtext="@munchysbypuzzle"
      />
    </div>
  );
};

export default Links;
