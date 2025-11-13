"use client";

import Image from "next/image";
import { useState } from "react";

const Page = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="container mx-auto">
      <nav className="mt-10 lg:max-w-6xl lg:mx-auto lg:flex lg:justify-between lg:items-center">
        <ul
          className={`
            ${openMenu ? "flex" : "hidden"}
            absolute top-24 left-0 w-full h-screen bg-white/90  
            text-black text-xl uppercase 
            flex-col items-center justify-center gap-8 
            lg:static lg:flex lg:h-auto lg:w-auto lg:mt-0 lg:bg-transparent
            lg:text-white lg:normal-case lg:flex-row lg:justify-between lg:gap-20
          `}
        >
          <li>
            <a href="#" rel="noopener noreferrer">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" rel="noopener noreferrer">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" rel="noopener noreferrer">
              Inicio
            </a>
          </li>
        </ul>
        <div className="flex justify-center lg:relative lg:right-28">
          <a href="#" rel="noopener noreferrer">
            <Image
              src="/assets/logo.png"
              alt="Logo do site"
              width={50}
              height={70}
            />
          </a>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-5">
          <Image
            src="/assets/search.png"
            alt="Logo de pesquisa"
            width={18}
            height={18}
          />
          <Image
            src="/assets/user-round.png"
            alt="Logo de user"
            width={18}
            height={18}
          />
        </div>
        <div className="flex justify-end relative right-4 -top-10 lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label={openMenu ? "Fechar menu" : "Abrir menu"}
          >
            <Image
              src="/assets/menu.png"
              alt="Logo do menu"
              width={30}
              height={30}
            />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Page;
