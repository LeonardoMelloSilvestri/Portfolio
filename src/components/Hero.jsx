import hero from "../assets/img/LeonardoIndigo.png";
import curriculum from "../assets/files/LeonardoSilvestri.pdf";

export default function Hero() {
  return (
    <>
      <article
        id="hero"
        className="flex flex-wrap justify-center items-center gap-16 mt-12 sm:mt-16 px-8 dark:text-bone-100"
      >
        <div>
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
          <div className="text-4xl flex gap-3">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/leonardo-mello-silvestri-941504151/"
            >
              <i className="cursor-pointer hover:text-indigo-600 hover:scale-125 fa-brands fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/LeonardoMelloSilvestri"
              rel="noreferrer"
            >
              <i className="cursor-pointer hover:text-indigo-600 hover:scale-125 fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/LeonardoMelloSilvestri"
              rel="noreferrer"
            >
              <i className="cursor-pointer hover:text-indigo-600 hover:scale-125 fa-brands fa-square-instagram"></i>
            </a>
            <a href={curriculum} download="LeonardoSilvestriDev">
              <i className="cursor-pointer hover:text-indigo-600 hover:scale-125 fa-solid fa-file"></i>
            </a>
          </div>
        </div>
        <div className="">
          <img className="hero-img w-72 min-[909px]:w-56" src={hero} alt="" />
        </div>
      </article>
    </>
  );
}
