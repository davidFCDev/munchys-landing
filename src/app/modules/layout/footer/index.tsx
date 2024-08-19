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
    <div
      id="footer"
      className="flex flex-col items-center bg-neutral-900 text-neutral-100 py-10 gap-32"
    >
      <div className="flex w-full justify-around">
        <div className="flex flex-col gap-4">
          <h3 className="flex items-center gap-2 font-bold text-xl tracking-wider">
            UBICACIÓN
            <MdLocationOn className="mb-1" />
          </h3>
          <div>
            <a
              className="hover:text-primary"
              target="_blank"
              href="#"
              onClick={(event) => {
                if (!window.confirm("¿Quieres acceder a Ubicación?")) {
                  event.preventDefault();
                } else {
                  handleContactClick();
                }
              }}
            >
              <p>
                Calle Triana 91, <br />
                Arrecife, Lanzarote,
              </p>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="flex items-center gap-2 font-bold text-xl tracking-wider">
            HORARIO
            <FaRegClock className="mb-1" />
          </h3>
          <div>
            <p>Lunes a Viernes:</p>
            <p>- 7:30 a 15:30</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="flex items-center gap-2 font-bold text-xl tracking-wider">
            TELÉFONO
            <MdOutlinePhoneAndroid className="mb-1" />
          </h3>
          <div>
            <p>+34 912960896</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="flex items-center gap-2 font-bold text-xl tracking-wider">
            SOCIAL
            <BiLike className="mb-1" />
          </h3>
          <div>
            <a
              className="flex items-center gap-2 hover:text-primary"
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
              <GrInstagram className="text-l md:text-xl" />
            </a>
          </div>
        </div>
      </div>

      <ul className="flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-4">
          <Link
            className="hover:underline"
            href={{ pathname: "/legal", hash: "#top" }}
            onClick={(event) => {
              if (!window.confirm("¿Quieres acceder a Aviso legal?")) {
                event.preventDefault();
              } else {
                handleContactClick();
              }
            }}
          >
            <li>Aviso legal</li>
          </Link>
          <Link
            className="hover:underline"
            href={{ pathname: "/privacity", hash: "#top" }}
            onClick={(event) => {
              if (
                !window.confirm("¿Quieres acceder a la Política de privacidad?")
              ) {
                event.preventDefault();
              } else {
                handleContactClick();
              }
            }}
          >
            <li>Política de privacidad</li>
          </Link>
        </div>
        <p className="flex items-center italic">
          designed by{" "}
          <a
            target="_blank"
            href="https://personal-virtualfolio.netlify.app/#portfolio"
          >
            <Image src="/web-develop.png" alt="logo Web Developer" width={100} height={50} layout="relative" />
          </a>
        </p>
      </ul>
    </div>
  );
};

export default Footer;
