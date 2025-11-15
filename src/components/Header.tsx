import Image from "next/image";

export const Header = () => {
  return (
    <>
      <div className="h-[calc(100vh-91px)] lg:flex lg:justify-between">
        <div>
          <Image
            src="/assets/01.png"
            alt="Logo do site"
            width={300}
            height={690}
            className="relative top-44 drop-shadow-[0_15px_20px_rgba(0,0,0,1)]"
          />
        </div>
        <div className="w-[520px] text-justify flex flex-col justify-center gap-8 lg:ml-48">
          <h1 className="font-bold text-7xl">Musculação</h1>
          <p>
            Aqui é onde os limites deixam de existir. Cada repetição é uma
            conquista, cada gota de suor é progresso. A musculação é a base da
            força, da forma e da confiança.
          </p>
          <button className="uppercase bg-white text-black w-32 py-3 rounded-md">
            <a href="#">Saiba mais</a>
          </button>
        </div>
        <div>
          <Image
            src="/assets/02.png"
            alt="Logo do site"
            width={720}
            height={748}
            className="absolute bottom-0 right-2 z-10 drop-shadow-[0_15px_20px_rgba(0,0,0,0.8)]"
          />
          <Image
            src="/assets/09.png"
            alt="Logo do site"
            width={920}
            height={793}
            className="lg:relative lg:top-[153px]"
          />
        </div>
      </div>
    </>
  );
};
