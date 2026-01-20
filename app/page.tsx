"use client";

import { Header } from "@/src/components/Header";
import Image from "next/image";
import { useState } from "react";
import { headerSections } from "@/src/data/headerSections";

const Page = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSection = headerSections[currentIndex];

  return (
    <div>
      {/* NAV */}
      <nav
        className="container mt-10 lg:max-w-6xl lg:mx-auto lg:flex lg:justify-between lg:items-center transition-[background] duration-700"
        style={{ background: currentSection.backgroundColor }}
      >
        <ul
          className={`
            ${openMenu ? "flex" : "hidden"}
            absolute top-24 left-0 w-full h-screen bg-white/90  
            text-black text-xl uppercase 
            flex-col items-center justify-center gap-8 
            lg:static lg:flex lg:h-auto lg:w-auto lg:bg-transparent
            lg:text-white lg:normal-case lg:flex-row lg:gap-20
          `}
        >
          <li>Inicio</li>
          <li>Planos</li>
          <li>Contato</li>
        </ul>

        <Image src="/assets/logo.png" alt="Logo" width={50} height={70} />

        <div className="hidden lg:flex gap-5">
          <Image src="/assets/search.png" alt="" width={18} height={18} />
          <Image src="/assets/user-round.png" alt="" width={18} height={18} />
        </div>
      </nav>

      {/* HEADER */}
      <Header currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
    </div>
  );
};

export default Page;
