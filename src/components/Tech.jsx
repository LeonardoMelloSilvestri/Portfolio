import { motion } from "framer-motion";
import { slideInFromLeft } from "../utils/motion";

import html5 from "../assets/icons/html5.png";
import css3 from "../assets/icons/css3.png";
import chakraUI from "../assets/icons/chakraUI.png";
import tailwind from "../assets/icons/tailwind-css.png";
import bootstrap from "../assets/icons/bootstrap.png";
import materialize from "../assets/icons/materializecss.png";
import javascript from "../assets/icons/javascript.png";
import react from "../assets/icons/react.png";
import python from "../assets/icons/python.png";
import django from "../assets/icons/django.png";
import c from "../assets/icons/c.png";
import github from "../assets/icons/github.png";

export default function Tech() {
  const icons = [
    {
      id: 1,
      name: "HTML5",
      url: html5,
    },
    {
      id: 2,
      name: "CSS3",
      url: css3,
    },
    {
      id: 3,
      name: "Chakra UI",
      url: chakraUI,
    },
    {
      id: 4,
      name: "Tailwind",
      url: tailwind,
    },
    {
      id: 5,
      name: "Bootstrap",
      url: bootstrap,
    },
    {
      id: 6,
      name: "Materialize",
      url: materialize,
    },
    {
      id: 7,
      name: "Javascript",
      url: javascript,
    },
    {
      id: 8,
      name: "React",
      url: react,
    },
    {
      id: 9,
      name: "Python",
      url: python,
    },
    {
      id: 10,
      name: "Django",
      url: django,
    },
    {
      id: 11,
      name: "C",
      url: c,
    },
    {
      id: 12,
      name: "Github",
      url: github,
    },
  ];

  return (
    <>
      <motion.article
        variants={slideInFromLeft()}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        id="tech"
        className="flex flex-col items-center gap-8 mt-16 px-4"
      >
        <h1 className="text-3xl dark:text-bone-100 font-semibold">
          Tech Stack
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-6 [&>*]:w-16">
          {icons.map((icon) => (
            <div key={icon.id} className="relative cursor-pointer">
              <img src={icon.url} alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:bg-indigo-500 bg-indigo-600 text-white p-2 rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-xl font-semibold">{icon.name}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.article>
    </>
  );
}
