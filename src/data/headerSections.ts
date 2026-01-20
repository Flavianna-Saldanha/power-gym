import { HeaderSection } from "../type/HeaderSection";

export const headerSections: HeaderSection[] = [
  {
    title: "Musculação",
    description:
      "Aqui é onde os limites deixam de existir. Cada repetição é uma conquista, cada gota de suor é progresso. A musculação é a base da força.",
    image: "/assets/02.png",
    backgroundColor: "var(--bg-color)",
  },
  {
    title: "Crossfit",
    description:
      "Explosão, resistência e superação. O Crossfit desafia corpo e mente em cada movimento.",
    image: "/assets/04.png",
    backgroundColor: "var(--bg-musculacao)",
    xlImageWidth: "xl:w-[560px]",
  },
  {
    title: "Muay Thai",
    description:
      "Disciplina, técnica e intensidade. O Muay Thai molda guerreiros.",
    image: "/assets/06.png",
    backgroundColor: "var(--bg-muay-thai)",
    xlImageWidth: "xl:w-[620px]",
  },
  {
    title: "Yoga ou Pilates",
    description:
      "Equilíbrio, respiração e consciência corporal. Corpo e mente em harmonia.",
    image: "/assets/08.png",
    backgroundColor: "var(--bg-yoga)",
    xlImageWidth: "xl:w-[600px]",
  },
];
