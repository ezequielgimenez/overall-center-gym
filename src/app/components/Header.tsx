"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function HeaderComp() {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="lg:hidden relative flex items-center mt-[22px] px-4 sm:px-16">
        {/* Burger */}
        <button onClick={openNav} className="z-10">
          <Image
            src="/logo/menu.png"
            alt="burger"
            width={41}
            height={46}
            priority
            unoptimized
          />
        </button>

        {/* Logo centrado real */}
        <div className="absolute left-1/2 -translate-x-1/2 pl-4">
          <Image
            src="/logo/logo-mobile.png"
            alt="Logo"
            width={197}
            height={49}
            priority
            unoptimized
          />
        </div>
      </div>

      <div
        className={`
    fixed top-0 left-0 w-screen h-125 bg-[#2E2E2E]
    z-50 rounded-b-4xl
    flex flex-col items-center
    transition-all duration-300 ease-out
    ${
      showNav
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-6 pointer-events-none"
    }
  `}
      >
        <div className="flex w-full justify-between px-4 py-4">
          <div onClick={openNav}>
            <Image
              src="/logo/close.png"
              alt="Logo"
              width={23}
              height={23}
            ></Image>
          </div>
        </div>

        <Link
          className="pt-5 font-description font-medium text-xl text-[#ccc8c8]"
          href="/#planes"
          onClick={openNav}
        >
          Planes
        </Link>
        <Link
          className="py-15 font-description font-medium text-xl text-[#ccc8c8]"
          href="/#sedes"
          onClick={openNav}
        >
          Sedes
        </Link>
        <Link
          className="pb-15 font-description font-medium text-xl text-[#ccc8c8]"
          href="/#redes"
          onClick={openNav}
        >
          Contacto
        </Link>
      </div>

      <div className="hidden lg:flex max-w-7xl mx-auto py-8 flex justify-between items-center px-4">
        <Image
          src="/logo/logo-header.png"
          width={245}
          height={61}
          className="cursor-pointer"
          alt="Logo-Header"
          priority
          unoptimized
        />

        <nav className="flex px-2">
          <ul className="flex justify-center items-center gap-20">
            <li>
              <Link
                className="font-header font-medium text-[#ccc8c8] text-base cursor-pointer hover:text-white transition-colors duration-500 ease-in-out"
                href="/"
              >
                INICIO
              </Link>
            </li>

            <li>
              <Link
                className="font-header font-medium text-[#ccc8c8] text-base cursor-pointer hover:text-white transition-colors duration-500 ease-in-out"
                href="/#planes"
              >
                PLANES
              </Link>
            </li>

            <li>
              <Link
                className="font-header font-medium text-[#ccc8c8] text-base cursor-pointer hover:text-white transition-colors duration-500 ease-in-out"
                href="/#sedes"
              >
                SEDES
              </Link>
            </li>

            <li>
              <Link
                className="font-header font-medium text-[#ccc8c8] text-base cursor-pointer hover:text-white transition-colors duration-500 ease-in-out"
                href="/#redes"
              >
                CONTACTO
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
