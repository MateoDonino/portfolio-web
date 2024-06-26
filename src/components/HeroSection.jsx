"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className=" col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className=" text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100">
              Hola, soy Mateo,{" "}
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Desarrollador Web",
                5000, // wait 1s before replacing "Mice" with "Hamsters"
                "Full Stack Developer",
                5000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className=" text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Especializado en el Frontend, utilizando las últimas tecnologías y
            frameworks disponibles puedo crear sitios y aplicaciones web a
            medida que se adapten a tus necesidades específicas. Te puedo
            asesorar en la selección de la mejor tecnología para tu proyecto,
            analizar los requisitos y planificar el desarrollo. Te invito a que
            le des un vistazo a mi CV!
          </p>
          <div>
            <Link href="#contacto">
              <button className=" font-semibold px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 hover:bg-slate-200 text-black">
                Contactame
              </button>
            </Link>

            <Link
              href="https://drive.google.com/file/d/14n8EjWS9hZFwx_FHjcGJ4PhQdUJg74A-/view?usp=drive_link"
              target="_blank"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-gray-900 rounded-full px-5 py-2">
                  Descargar CV
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className=" col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <Image
                src="/images/avatar.png"
                alt="mateo"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
