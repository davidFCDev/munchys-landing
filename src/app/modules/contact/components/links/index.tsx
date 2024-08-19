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
      className="bg-neutral-100 rounded-md border text-black p-10 w-full h-64 flex flex-col gap-5 justify-between"
    >
      <div className="text-5xl font-bold flex items-center justify-between">
        <h2 className="font-patrick text-5xl">{title}</h2>
        {icon}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3>{description}</h3>
          <h3 className="text-xl font-semibold">{subtext}</h3>
        </div>
        <button className="btn btn-primary text-xl">
          <BsArrowRight />
        </button>
      </div>
    </a>
  );
};

const Links: React.FC = () => {
  return (
    <div className="w-full flex items-center gap-10 px-10 py-20">
      <LinkCard
        href="mailto:munchys@gmail.com"
        title="Email"
        icon={<MdOutlineAlternateEmail />}
        description="Envíanos un correo"
        subtext="munchys@gmail.com"
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
