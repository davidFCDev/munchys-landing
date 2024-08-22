"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className="navbar bg-primary z-30 border-b-2 border-b-white px-6 small:px-10 text-white font-roboto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-50 mt-4 w-32 p-2 tracking-wide flex flex-col gap-1 bg-primary border border-white rounded-md"
          >
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/about">Nosotros</Link>
            </li>
            <li>
              <Link href="/menu">Carta</Link>
            </li>
            <li>
              <Link href="/gallery">Galería</Link>
            </li>
            <li>
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
        <a href="/">
          <Image
            src="/images/logo-munchys.png"
            alt="logo principal"
            width={150}
            height={150}
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-roboto uppercase tracking-widest">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/about">Nosotros</Link>
          </li>
          <li>
            <Link href="/menu">Carta</Link>
          </li>
          <li>
            <Link href="/gallery">Galería</Link>
          </li>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div
          className="tooltip tooltip-left tooltip-warning p-2"
          data-tip="¡Síguenos!"
        >
          <a href="#" className="text-4xl">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
