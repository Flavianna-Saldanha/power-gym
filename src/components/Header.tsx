import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="h-[calc(100vh-105px)] flex flex-col">
        <div>
          <Image
            src="/assets/01.png"
            alt="Logo do site"
            width={150}
            height={70}
            className="relative top-10"
          />
        </div>
        <div className="w-10/12 mx-auto">
          <div className="text-4xl text-center font-bold mb-4">Musculação</div>
          <p className="text-justify">
            Aqui é onde os limites deixam de existir. Cada repetição é uma
            conquista, cada gota de suor é progresso. A musculação é a base da
            força, da forma e da confiança.
          </p>
          <a href="">
            <button>Ver na loja</button>
          </a>
        </div>
        <div className="relative">
          <Image
            src="/assets/02.png"
            alt="Logo do site"
            width={450}
            height={70}
            className="mt-0.5"
          />
          <Image
            src="/assets/09.png"
            alt="Logo do site"
            width={550}
            height={70}
            className="absolute top-0 left-0 -z-10"
          />
        </div>
      </div>
    </>
  );
};
