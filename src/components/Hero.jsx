import hero from "../assets/img/LeonardoIndigo.png";
import curriculum from "../assets/files/LeonardoSilvestri.pdf";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../utils/motion";

export default function Hero() {
  return (
    <>
      <article
        id="hero"
        className="flex 100vh flex-wrap justify-center gap-10 lg:gap-52 mt-12 sm:mt-16 px-8 dark:text-bone-100"
      >
        <motion.div
          variants={slideInFromLeft()}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-4xl font-bold mb-2 sm:mb-1">
            Olá, sou o Leonardo!
          </h1>
          <h2 className="text-3xl font-semibold mb-2 sm:mb-1">
            Sou um{" "}
            <span className="dark:text-indigo-500 text-indigo-600 font-bold">
              Desenvolvedor Front-End
            </span>
          </h2>
          <p className="text-xl  font-semibold mb-5 sm:mb-4">
            Fome de conhecimento, autodidatismo, honestidade e disciplína.
          </p>
          <motion.div
            variants={slideInFromLeft(0.9)}
            initial="initial"
            animate="animate"
            className="text-4xl flex gap-3"
          >
            <motion.a
              variants={slideInFromLeft(0.9)}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/leonardo-mello-silvestri-941504151/"
            >
              <i className="cursor-pointer hover:text-indigo-600 hover:scale-125 fa-brands fa-linkedin"></i>
            </motion.a>
            <motion.a
              variants={slideInFromLeft(1)}
              target="_blank"
              href="https://github.com/LeonardoMelloSilvestri"
              rel="noreferrer"
            >
              <i className="cursor-pointer hover:text-indigo-600 hover:scale-125 fa-brands fa-github"></i>
            </motion.a>
            <motion.a
              variants={slideInFromLeft(1.1)}
              target="_blank"
              href="https://www.instagram.com/leonardomsilvestri/"
              rel="noreferrer"
            >
              <i className="cursor-pointer hover:text-indigo-600 hover:scale-125 fa-brands fa-square-instagram"></i>
            </motion.a>
            <motion.a
              variants={slideInFromLeft(1.2)}
              href={curriculum}
              download="LeonardoSilvestriDev"
            >
              <i className="cursor-pointer hover:text-indigo-600 hover:scale-125 fa-solid fa-file"></i>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          variants={slideInFromRight()}
          initial="initial"
          animate="animate"
          className=""
        >
          <img className="hero-img w-64" src={hero} alt="" />
        </motion.div>
      </article>
    </>
  );
}
