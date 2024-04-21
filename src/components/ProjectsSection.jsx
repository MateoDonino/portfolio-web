"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Lutin Studios",
    description:
      "Proyecto como Freelance, experiencia labolar, creando una Página Web de promoción de NFT (tokens no fungibles) para un cliente de Chile. El equipo consistió de dos Diseñadores Gráficos y dos Desarrolladores Web. Desplegada en Vercel. ",
    descriptiontwo: "#HTML #CSS #ReactJS #Bootstrap",
    image: "/images/projects/web4.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/VarelaCristianFacundo/lutin",
    previewUrl: "https://lutin-varelacristianfacundo.vercel.app/",
  },
  {
    id: 2,
    title: "Api Rick and Morty",
    description:
      "Api de Rick and Morty que permite a los usuarios buscar y visualizar informacion sobre los personajes. Consta de un campo busqueda y 3 filtros, como asi tambien poder borrarlos y resetear la busqueda, desplegada en Vercel.",
    descriptiontwo: "#ReactJS #Vite #GraphQL #TailwindCSS",
    image: "/images/projects/web1.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/MateoDonino/dev-challenge-rickymorty",
    previewUrl: "https://dev-challenge-rickymorty.vercel.app/",
  },
  {
    id: 3,
    title: "Aplicacaión Web NodeJS",
    description:
      "Aplicación Web simple con NodeJS, la cual nos permite ir de pagina en pagina, la interfaz es ligera y rapida, y está diseñada para usuarios que buscan una navegacion eficaz y sencilla, desplegada en Render.",
    descriptiontwo: "#JavaScript #NodeJS #Bootstrap",
    image: "/images/projects/web2.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/MateoDonino/nodejs-project",
    previewUrl: "https://nodejs-project-chyw.onrender.com/",
  },
  {
    id: 4,
    title: "Porfolio Web",
    description:
      "Si, este mismo proyecto. Portfolio Web con mi resumen, donde se pueden encontrar mis proyectos, como tambien el poder interactuar para poder descargar mi CV, ir a mi LinkedIn, Github y más. Desplegada en Vercel.",
    descriptiontwo: "#ReactJS #Next.js #TailwindCSS",
    image: "/images/projects/web3.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "https://github.com/MateoDonino/portfolio-web",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <section id="proyectos">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5 }}
        >
          <h2 className=" text-center text-4xl font-bold mt-10 mb-8 md:mb-2 text-transparent bg-clip-text bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300">
            Proyectos
          </h2>
          <div className=" text-white flex flex-row justify-center items-center gap-2 py-6 ">
            <ProjectTag
              onClick={handleTagChange}
              name="Todos"
              isSelected={tag === "Todos"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="Web"
              isSelected={tag === "Web"}
            />
          </div>
        </motion.div>

        <ul ref={ref} className=" grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: index * 0.8 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                descriptiontwo={project.descriptiontwo}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ProjectsSection;
