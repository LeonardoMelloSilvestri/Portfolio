export default function Projetos() {
  const projetos = [
    {
      id: 1,
      name: "Top Cars",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero odio impedit recusandae nobis.",
      url: "LeonardoMelloSilvestri.github.io/TopCars",
    },
    {
      id: 2,
      name: "Smart Tech",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatum nulla queue.",
      url: "#",
    },
    {
      id: 3,
      name: "Space Wars",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas minus use.",
      url: "#",
    },
    {
      id: 4,
      name: "Gym Power",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aperiam amet veniam quis.",
      url: "#",
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
            <div
              key={projeto.id}
              className="flex justify-center items-center rounded-2xl flex-auto w-80 h-60 text-white dark:bg-indigo-500 bg-indigo-600"
            >
              <h1 className="text-2xl">{projeto.name}</h1>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
