import topCars from "../assets/img/TopCars.png";
import emDesenvolvimento from "../assets/img/EmDesenvolvimento.png";
export default function Projetos() {
  const projetos = [
    {
      id: 1,
      name: "Top Cars",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero odio impedit recusandae nobis.",
      url: "https://LeonardoMelloSilvestri.github.io/TopCars",
      img: topCars,
    },
    {
      id: 2,
      name: "Panda Express",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatum nulla queue.",
      url: "#",
      img: emDesenvolvimento,
    },
    {
      id: 3,
      name: "Space Wars",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas minus use.",
      url: "#",
      img: emDesenvolvimento,
    },
  ];

  return (
    <>
      <article
        id="projetos"
        className="flex flex-col items-center gap-8 mt-24 px-8 md:px-24"
      >
        <h1 className="text-3xl dark:text-bone-100 font-semibold">Projetos</h1>
        <div className="flex flex-wrap gap-6 w-full">
          {projetos.map((projeto) => (
            <a
              key={projeto.id}
              href={projeto.url}
              target="__blank"
              className="flex flex-col justify-center cursor-pointer items-center flex-auto w-80 h-60"
            >
              <img
                className="object-fill h-full w-full border-indigo-600 border-4 border-solid border-sm rounded-2xl"
                src={projeto.img}
              />
            </a>
          ))}
        </div>
      </article>
    </>
  );
}
