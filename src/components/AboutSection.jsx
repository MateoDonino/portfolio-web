"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className=" list-disc pl-2">
        <li>JavaScript</li>
        <li>React JS</li>
        <li>Node.js</li>
        <li>Java</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Educacion",
    id: "educacion",
    content: (
      <ul className=" list-disc pl-2">
        <li>Ingenieria en Informatica, Univesidad Nacional del Litoral</li>
        <li>Desarrollo Front-End, Academia CoderHouse</li>
        <li>Java Back-End, Universidad Tecnologica Nacional</li>
        <li>English for IT (B2), Cisco & OpenEDG</li>
      </ul>
    ),
  },
  {
    title: "Certificaciones",
    id: "certificaciones",
    content: (
      <ul className=" list-disc pl-2">
        <Link
          href="https://www.coderhouse.com/ar/certificados/62654470ecf77800245d6a4f"
          target="_blank"
          className=" flex gap-2 items-center"
        >
          <li>Desarrollador JavaScript</li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>

        <Link
          href="https://www.coderhouse.com/ar/certificados/62b29971df7835002167ab04"
          target="_blank"
          className=" flex gap-2 items-center"
        >
          <li>Desarrollador ReactJS</li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1klKiVlkd9YqwiLbao17-Ei-n-pG9g_la/view?usp=drive_link"
          target="_blank"
          className=" flex gap-2 items-center"
        >
          <li>Java Back-End</li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1FCDSptVsKJj1a-5h1h_svM35dLaPUsqY/view?usp=drive_link"
          target="_blank"
          className=" flex gap-2 items-center"
        >
          <li>English for IT (B2)</li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </Link>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, starTransition] = useTransition();

  const handleTabChange = (id) => {
    starTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className=" text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
        className=" col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image
            className=" rounded-xl"
            src="/images/computer5.png"
            width={500}
            height={500}
          />
          <div className=" mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className=" text-center text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300">
              Sobre Mi
            </h2>
            <p className=" text-[#ADB7BE] text-base lg:text-lg">
              Apasionado por crear soluciones web innovadoras y eficientes.
              Domino tecnologías como HTML5, CSS3, JavaScript y ReactJS, y
              Backend como Node.js, Express.js, MongoDB, Java y Bases de Datos
              con SQL. Mi enfoque se basa en la colaboración y la entrega de
              resultados de alta calidad. Me adapto fácilmente a diferentes
              entornos y siempre estoy dispuesto a aprender y afrontar nuevos
              desafíos.
            </p>
            <div className=" flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("educacion")}
                active={tab === "educacion"}
              >
                {" "}
                Educación
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certificaciones")}
                active={tab === "certificaciones"}
              >
                {" "}
                Certificaciones
              </TabButton>
            </div>
            <div className=" mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
