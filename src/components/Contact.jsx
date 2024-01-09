import contactImg from "../assets/img/meeting.png";

export default function Contact() {
  return (
    <>
      <article
        id="contato"
        className="flex flex-wrap gap-10 lg:gap-24 dark:text-bone-100 justify-center px-8 mt-24"
      >
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">
            E aí, vamos trabalhar juntos?
          </h1>
          <h2 className="text-lg font-semibold mt-1">
            Escolha a rede social e converse comigo
          </h2>
          <h2 className="flex items-center mt-3 text-lg font-semibold">
            <i className="fa-brands fa-square-whatsapp text-3xl mr-2"></i>
            (48) 98405-2423
          </h2>
          <h2 className="flex items-center text-lg font-semibold">
            <i className="fa-solid fa-envelope text text-3xl mr-2"></i>
            Leonardomscontato@gmail.com
          </h2>
          <div className="text-4xl flex gap-3 mt-3">
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
              href="https://www.instagram.com/leonardomsilvestri/"
              rel="noreferrer"
            >
              <i className="cursor-pointer hover:text-indigo-600 hover:scale-125 fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
        <div>
          <img className="w-[29rem]" src={contactImg} alt="" />
        </div>
      </article>
    </>
  );
}
