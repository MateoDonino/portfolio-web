import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className=" text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100">
              {" "}
              Hola, soy Mateo
            </div>
          </h1>
          <p className=" text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Soy Full Stack Developer, apasionado por crear soluciones web
            innovadoras y eficientes. Domino tecnologías como HTML5, CSS3,
            JavaScript y ReactJS, y Backend como Node.js, Express.js, MongoDB,
            Java y Bases de Datos con SQL. Mi enfoque se basa en la colaboración
            y la entrega de resultados de alta calidad. Me adapto fácilmente a
            diferentes entornos y siempre estoy dispuesto a aprender y afrontar
            nuevos desafíos.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 hover:bg-slate-200 text-black">
              Contratame
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Descargar CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[#250px] h-[#250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/avatar.png"
              alt="mateo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
