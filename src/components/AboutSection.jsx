"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
      </ul>
    ),
  },
  {
    title: "Certificaciones",
    id: "certificaciones",
    content: (
      <ul className=" list-disc pl-2">
        <li>Desarrollo Front-End</li>
        <li>Java Back-End</li>
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
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/computer2.png" width={600} height={600} />
        <div className=" mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className=" text-4xl font-bold text-white mb-4 ">Sobre Mi</h2>
          <p className=" text-base lg:text-lg">
            Apasionado por crear soluciones web innovadoras y eficientes. Domino
            tecnologías como HTML5, CSS3, JavaScript y ReactJS, y Backend como
            Node.js, Express.js, MongoDB, Java y Bases de Datos con SQL. Mi
            enfoque se basa en la colaboración y la entrega de resultados de
            alta calidad. Me adapto fácilmente a diferentes entornos y siempre
            estoy dispuesto a aprender y afrontar nuevos desafíos.
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
              Educacion
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
    </section>
  );
};

export default AboutSection;
