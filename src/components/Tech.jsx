import { motion } from "framer-motion";
import { slideInFromLeft } from "../utils/motion";
export default function Tech() {
  const icons = [
    {
      id: 1,
      name: "HTML5",
      url: "src/assets/icons/html5.png",
    },
    {
      id: 2,
      name: "CSS3",
      url: "src/assets/icons/css3.png",
    },
    {
      id: 3,
      name: "Sass",
      url: "src/assets/icons/sass.png",
    },
    {
      id: 4,
      name: "Tailwind",
      url: "src/assets/icons/tailwind-css.png",
    },
    {
      id: 5,
      name: "Bootstrap",
      url: "src/assets/icons/bootstrap.png",
    },
    {
      id: 6,
      name: "Materialize",
      url: "src/assets/icons/materializecss.png",
    },
    {
      id: 7,
      name: "Javascript",
      url: "src/assets/icons/javascript.png",
    },
    {
      id: 8,
      name: "React",
      url: "src/assets/icons/react.png",
    },
    {
      id: 9,
      name: "Python",
      url: "src/assets/icons/python.png",
    },
    {
      id: 10,
      name: "Django",
      url: "src/assets/icons/django.png",
    },
    {
      id: 11,
      name: "C",
      url: "src/assets/icons/c.png",
    },
    {
      id: 12,
      name: "Github",
      url: "src/assets/icons/github.png",
    },
  ];

  return (
    <>
      <motion.article
        variants={slideInFromLeft()}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
        id="tech"
        className="flex flex-col items-center gap-8 mt-16 px-4"
      >
        <h1 className="text-3xl dark:text-bone-100 font-semibold">
          Tech Stack
        </h1>
        <div className="flex flex-wrap justify-center items-center text-3xl gap-6 [&>*]:w-16">
          {icons.map((icon) => (
            <img key={icon.id} src={icon.url} alt="" />
          ))}
        </div>
      </motion.article>
    </>
  );
}
