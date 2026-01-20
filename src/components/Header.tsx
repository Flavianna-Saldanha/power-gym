"use client";

import Image from "next/image";
import { headerSections } from "../data/headerSections";

type HeaderProps = {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const Header = ({ currentIndex, setCurrentIndex }: HeaderProps) => {
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === headerSections.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? headerSections.length - 1 : prev - 1,
    );
  };

  const currentSection = headerSections[currentIndex];

  return (
    <header
      className="relative h-[calc(100vh-105px)] overflow-hidden transition-[background] duration-700 ease-in-out"
      style={{ background: currentSection.backgroundColor }}
    >
      <div className="h-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
        {/* LOGO ESQUERDA */}
        <div className="lg:flex-1 relative z-20">
          <Image
            src="/assets/01.png"
            alt="Logo do site"
            width={150}
            height={70}
            className="lg:absolute lg:left-0 lg:-top-64 sm:w-52 lg:w-56 xl:w-72"
          />
        </div>

        {/* TEXTO */}
        <div className="w-80 mx-auto relative z-20 bottom-6 sm:bottom-32 lg:bottom-0 lg:w-[420px] lg:left-10">
          <h1 className="text-4xl text-center font-bold mb-4">
            {currentSection.title}
          </h1>

          <p className="text-justify">{currentSection.description}</p>

          <div className="flex items-center justify-between mt-6">
            <button className="p-2 bg-white text-black uppercase text-sm rounded-md lg:p-3">
              Ver na loja
            </button>

            <div className="flex gap-2 relative z-30">
              <Image
                src="/assets/arrow-left.png"
                width={30}
                height={30}
                alt="Anterior"
                className="cursor-pointer"
                onClick={handlePrev}
              />
              <Image
                src="/assets/arrow-right.png"
                width={30}
                height={30}
                alt="Próximo"
                className="cursor-pointer"
                onClick={handleNext}
              />
            </div>
          </div>
        </div>

        {/* IMAGENS */}
        <div className="relative flex justify-center items-center lg:flex-2 lg:h-full pointer-events-none">
          {currentSection.image && (
            <Image
              src={currentSection.image}
              alt={currentSection.title}
              width={386}
              height={70}
              className={`
                absolute right-0 z-10
                sm:-top-28
                lg:top-[490px]
                lg:w-[400px]
                xl:top-32
                ${currentSection.xlImageWidth ?? "xl:w-[700px]"}
              `}
            />
          )}

          <Image
            src="/assets/09.png"
            alt=""
            width={386}
            height={70}
            className="
              absolute right-0 z-0 opacity-30
              sm:-top-28
              lg:top-[490px]
              lg:w-[400px]
              xl:top-40
              xl:w-[650px]
            "
          />
        </div>
      </div>
    </header>
  );
};
