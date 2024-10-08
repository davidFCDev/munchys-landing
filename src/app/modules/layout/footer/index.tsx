"use client";
import { MdLocationOn, MdOutlinePhoneAndroid } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const handleContactClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-neutral-900 text-neutral-300 py-10 gap-16 small:gap-20">
      <div className="grid grid-cols-2 small:grid-cols-4 items-center gap-y-6 w-full justify-around">
        <div className="flex flex-col gap-2 small:gap-4 items-center text-left">
          <h3 className="flex items-center gap-2 font-bold text-base small:text-xl tracking-wider">
            UBICACIÓN
            <MdLocationOn className="mb-1" />
          </h3>
          <div>
            <p className="text-xs small:text-base">
              Calle Triana 91, <br />
              Arrecife, Lanzarote,
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 small:gap-4 items-center text-left">
          <h3 className="flex items-center gap-2 font-bold text-base small:text-xl tracking-wider">
            HORARIO
            <FaRegClock className="mb-1" />
          </h3>
          <div className="text-xs small:text-base">
            <p>Lunes a Viernes:</p>
            <p>- 7:30 a 15:30</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 small:gap-4 items-center text-left">
          <h3 className="flex items-center gap-2 font-bold text-base small:text-xl tracking-wider">
            TELÉFONO
            <MdOutlinePhoneAndroid className="mb-1" />
          </h3>
          <div className="text-xs small:text-base">
            <p>+34 667099593</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 small:gap-4 items-center text-left">
          <h3 className="flex items-center gap-2 font-bold text-base small:text-xl tracking-wider">
            SOCIAL
            <BiLike className="mb-1" />
          </h3>
          <div>
            <a
              className="flex items-center gap-2 hover:text-primary text-xs small:text-base"
              target="_blank"
              href="https://www.instagram.com/munchysbypuzzle/"
              onClick={(event) => {
                if (!window.confirm("¿Quieres acceder a Instagram?")) {
                  event.preventDefault();
                } else {
                  handleContactClick();
                }
              }}
            >
              Instagram
              <GrInstagram className="text-l md:text-lg small:text-xl" />
            </a>
          </div>
        </div>
      </div>

      <ul className="flex flex-col items-center text-center gap-1 text-xs small:text-base">
        <div className="flex items-center gap-4">
          <Link
            className="hover:underline"
            href={{ pathname: "/legal", hash: "#top" }}
            onClick={(event) => {
              if (
                !window.confirm(
                  "¿Quieres acceder a Aviso legal y Política de privacidad?"
                )
              ) {
                event.preventDefault();
              } else {
                handleContactClick();
              }
            }}
          >
            <li>Aviso legal y Política de privacidad</li>
          </Link>
        </div>
        <p className="flex items-center italic">
          designed by{" "}
          <a
            target="_blank"
            href="https://personal-virtualfolio.netlify.app/#portfolio"
          >
            <Image
              src="/images/web-develop.png"
              alt="logo Web Developer"
              width={100}
              height={100}
              layout="relative"
            />
          </a>
        </p>
      </ul>
    </div>
  );
};

export default Footer;
