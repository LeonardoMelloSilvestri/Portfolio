import { motion } from "framer-motion";
import { slideInFromTop } from "../utils/motion.js";

export default function Navbar() {
  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }
  return (
    <>
      <header>
        <motion.nav
          variants={slideInFromTop(0.3)}
          initial="initial"
          animate="animate"
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 justify-start sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="text-2xl dark:text-indigo-500 text-indigo-600 font-semibold">
                    LeonardoDev <i className="fa-regular fa-hand-spock"></i>
                  </h1>
                </div>
                <div className="flex ml-auto gap-6">
                  <div className="hidden sm:block">
                    <div className="flex space-x-4 dark:[&>*]:text-bone-100">
                      <a
                        href="#about"
                        className="transition-all duration-300 hover:scale-110 dark:hover:bg-indigo-500 hover:bg-indigo-600 dark:hover:text-bone-100 hover:text-white rounded-md px-3 py-2 font-medium"
                      >
                        Sobre
                      </a>
                      <a
                        href="#projetos"
                        className="transition-all duration-300 hover:scale-110 dark:hover:bg-indigo-500 hover:bg-indigo-600 dark:hover:text-bone-100 hover:text-white rounded-md px-3 py-2 font-medium"
                      >
                        Projetos
                      </a>
                      <a
                        href="#contato"
                        className="transition-all duration-300 hover:scale-110 dark:hover:bg-indigo-500 hover:bg-indigo-600 dark:hover:text-bone-100 hover:text-white rounded-md px-3 py-2 font-medium"
                      >
                        Contato
                      </a>
                    </div>
                  </div>
                  <label className="inline-flex items-center space-x-4 cursor-pointer">
                    <span>
                      <i className="fa-solid fa-sun text-yellow-400"></i>
                    </span>
                    <span className="relative">
                      <input
                        onClick={toggleTheme}
                        type="checkbox"
                        className="hidden peer"
                      />
                      <div className="w-10 h-6 rounded-full shadow-inner dark:bg-indigo-500 bg-indigo-600"></div>
                      <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-bone-100 dark:bg-gray-800"></div>
                    </span>
                    <span>
                      <i className="fa-solid fa-moon text-indigo-500"></i>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
      </header>
    </>
  );
}
