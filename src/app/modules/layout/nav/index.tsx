"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";

const Nav = () => {
  return (
    <div className="navbar bg-primary z-30 border-b-2 border-b-white px-10 text-white font-roboto">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
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
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
        <a href="/">
          <Image
            src="/logo-munchys.png"
            alt="logo principal"
            width={180}
            height={100}
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
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="#" className="text-4xl hover:text-terciary">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default Nav;
