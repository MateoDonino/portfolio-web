/*
"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../components/constants/index";
import { textVariant } from "../components/constants/motion";
import { styles } from "../styles";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <motion.div
          className="flex items-center justify-center w-full h-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href={experience.iconLink} target="_blank">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[100%] h-[60%] object-contain"
            />
          </a>
        </motion.div>
      }
    >
      <div>
        <h3 className=" text-white text-[24px] font-bold">
          {experience.title}
        </h3>
        <p
          className=" text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Areas de manejo
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Conocimientos
        </h2>
      </motion.div>
      <div className=" mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
*/
"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experiencia">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
      >
        <h2 className=" text-center text-4xl font-bold mt-10 mb-8 md:mb-2 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300">
          Experiencia Laboral
        </h2>
        <ul className=" mt-5 timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10 ">
              <time className="text-sm">Enero - Junio 2019</time>
              <div className="text-xl font-bold">
                Pasantía en Area Comercial de Movistar Telefonica
              </div>
              <div className="text-lg text-blue-400">MOVISTAR TELEFÓNICA</div>

              <div className="text-[#ADB7BE] text-justify">
                <p className=" mt-1 ">
                  · Estuve a cargo de la supervisión y control de stock en los
                  distintos puntos fisicos de venta de la ciudad de Santa Fe
                </p>
                <p className=" mt-2">
                  · Eficiente trabajo en equipo, resposnabilidad y gran
                  comunicación.
                </p>
                <p className=" mt-2">
                  · Excelente cumplimiento de atención al cliente
                </p>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="text-sm">Agosto - Noviembre 2022</time>
              <div className="text-xl font-bold">Desarrollador Web</div>
              <div className="text-lg text-blue-400">LUTIN STUDIOS</div>

              <div className="text-[#ADB7BE] text-justify">
                <p className="mt-1">
                  · Colaboré en un proyecto Freelance para un cliente de Chile.
                  Consistió en la creación de una Página Web de promoción de NFT
                  (Tokens no Fungibles)
                </p>
                <p className="mt-2">
                  · Desarrollo y diseño en la interfaz de usuario utilizando
                  tecnologías como HTML, CSS, ReactJS y Bootstrap.
                </p>
                <p className="mt-2">
                  · El trabajo de equipo fue de dos Disenadores Graficos y dos
                  Programadores Web. Excelente comunicación y trabajo en equipo.
                </p>
              </div>
              <Link
                href="https://lutin-varelacristianfacundo.vercel.app/"
                target="_blank"
                className=" mt-3 flex gap-2 items-center"
              >
                <li>Página Web.</li>
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
                href="https://github.com/VarelaCristianFacundo/lutin"
                target="_blank"
                className=" mt-1 flex gap-2 items-center"
              >
                <li>Código Github.</li>
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
            </div>
            <hr />
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;
