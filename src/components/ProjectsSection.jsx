"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 2,
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
    id: 1,
    title: "Api Rick and Morty",
    description:
      "Api de Rick and Morty que permite a los usuarios buscar y visualizar informacion sobre los personajes. Consta de un campo busqueda y 3 filtros, como asi tambien poder borrarlos y resetear la busqueda, desplegada en Vercel.",
    descriptiontwo: "#React #Vite #GraphQL #TailwindCSS",
    image: "/images/projects/web1.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/MateoDonino/dev-challenge-rickymorty",
    previewUrl: "https://dev-challenge-rickymorty.vercel.app/",
  },
  {
    id: 3,
    title: "Porfolio Web",
    description:
      "Si, este mismo proyecto. Portfolio Web con mi resumen, donde se pueden encontrar mis proyectos, como tambien el poder interactuar para poder descargar mi CV, ir a mi LinkedIn, Github y más. Desplegada en Vercel.",
    descriptiontwo: "#React #Next.js #TailwindCSS",
    image: "/images/projects/web3.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "https://github.com/MateoDonino/portfolio-web",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
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
      <div className=" grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            descriptiontwo={project.descriptiontwo}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
