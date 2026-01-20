import Image from "next/image";

export const Header = () => {
  return (
    <div className="h-[calc(100vh-105px)] flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-20 overflow-hidden">
      {/* IMAGEM 01 (Topo no Mobile / Esquerda no Desktop) */}
      <div className="lg:flex-1">
        <Image
          src="/assets/01.png"
          alt="Logo do site"
          width={150}
          height={70}
          className="lg:w-72 lg:absolute lg:left-0 lg:top-40"
        />
      </div>

      {/* TEXTO CENTRAL (Meio no Mobile / Centro no Desktop) */}
      <div className="w-10/12 mx-auto relative bottom-6 lg:bottom-0 lg:w-[420px]">
        <div className="text-4xl text-center font-bold mb-4">Musculação</div>
        <p className="text-justify">
          Aqui é onde os limites deixam de existir. Cada repetição é uma
          conquista, cada gota de suor é progresso. A musculação é a base da
          força, da forma e da confiança.
        </p>
        <div className="flex items-center justify-between mt-6">
          <button className="border p-2 bg-white text-black uppercase text-sm rounded-md lg:p-3">
            Ver na loja
          </button>

          <div className="flex gap-2 lg:mr-0">
            <Image src="/assets/arrow-left.png" width={30} height={30} alt="" />
            <Image
              src="/assets/arrow-right.png"
              width={30}
              height={30}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* IMAGENS SOBREPOSTAS (Base no Mobile / Direita no Desktop) */}
      <div className="relative flex justify-center items-center lg:flex-1 lg:h-full">
        <div className="relative w-full h-full ">
          <Image
            src="/assets/02.png"
            alt="Logo do site"
            width={386}
            height={70}
            className="absolute -top-[15px] left-7 lg:left-20 lg:top-[400px] lg:-translate-y-1/2 z-10 lg:w-[620px]"
          />
          <Image
            src="/assets/09.png"
            alt="Logo do site"
            width={386}
            height={70}
            className="absolute -top-4 left-7 -z-10 lg:left-0 lg:top-1/2 lg:-translate-y-1/2 opacity-40"
          />
        </div>
      </div>
    </div>
  );
};
