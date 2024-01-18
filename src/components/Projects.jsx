import topCars from "../assets/img/topCars.jpg";
import pandaExpress from "../assets/img/PandaExpress.jpg";
import wwii from "../assets/img/wwii.jpg";
import spaceWars2 from "../assets/img/spaceWars2.jpg";

import { motion } from "framer-motion";
import { slideInFromRight } from "../utils/motion";

export default function Projetos() {
  const projetos = [
    {
      id: 1,
      name: "Top Cars",
      theme: "Vendas",
      description:
        "Landing Page desenvolvida para uma concessionária de carros.",
      tools: ["React", "Tailwind"],
      url: "https://LeonardoMelloSilvestri.github.io/TopCars",
      img: topCars,
    },
    {
      id: 2,
      name: "Panda Express",
      description:
        "Landing Page desenvolvida para uma amiga, dona de um restaurante de fast food localizado na Venezuela.",
      tools: ["React", "Tailwind"],
      url: "https://LeonardoMelloSilvestri.github.io/PandaExpress",
      img: pandaExpress,
    },
    {
      id: 3,
      name: "World War II",
      description:
        "Projeto pessoal com temática da Segunda Guerra Mundial. Possui o intuíto de ensinar a história desse conflito tão importante.",
      tools: ["React", "Chakra UI", "Zustand"],
      url: "https://LeonardoMelloSilvestri.github.io/WorldWarII",
      img: wwii,
    },
    {
      id: 4,
      name: "Space Wars 2",
      description:
        "Jogo web de batalha espacial, fácil de jogar e muito divertido.",
      tools: ["HTML - Canvas", "Javascript"],
      url: "https://LeonardoMelloSilvestri.github.io/SpaceWars2",
      img: spaceWars2,
    },
  ];

  return (
    <>
      <motion.article
        variants={slideInFromRight(0.3)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        id="projetos"
        className="flex flex-col items-center gap-8 mt-24 px-8 lg:px-14"
      >
        <h1 className="text-3xl dark:text-bone-100 font-semibold">Projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-4 max-w-[1536px]">
          {projetos.map((projeto) => (
            <div
              key={projeto.id}
              className="flex flex-col text-center dark:text-bone-100 gap-3"
            >
              <a href={projeto.url} target="__blank" className="h-64">
                <img
                  className="object-fill h-full w-full border-indigo-600 border-2 border-solid border-sm rounded-2xl"
                  src={projeto.img}
                />
              </a>
              <h1 className="text-xl font-semibold">{projeto.name}</h1>
              <p className="">{projeto.description}</p>
              <div className="flex gap-2 justify-center">
                {projeto.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="rounded-md dark:bg-indigo-500 bg-indigo-600 px-2 py-1 text-sm font-medium text-white ring-1 ring-inset dark:ring-indigo-600 ring-indigo-500"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.article>
    </>
  );
}
