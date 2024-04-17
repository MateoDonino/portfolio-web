"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Api Rick and Morty 1",
    description:
      "Api de Rick and Morty que permite a los usuarios buscar y visualizar informacion sobre los personajes. Consta de un campo busqueda y 3 filtros, como asi tambien poder borrarlos y resetear la busqueda, desplegada en Vercel. Desarrollado con React + Vite, Tailwind CSS y GraphQL.",
    image: "/images/projects/web1.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MateoDonino/dev-challenge-rickymorty",
    previewUrl: "https://dev-challenge-rickymorty.vercel.app/",
  },
  {
    id: 2,
    title: "Aplicacaion Web con NodeJS",
    description:
      "Aplicacion Web simple con Node JS, la cual nos permite ir de pagina en pagina, la interfaz es ligera y rapida, y está diseñada para usuarios que buscan una navegacion eficaz y sencilla, desplegada en Render. Desarrollada con JavaScript, Nodejs Y Bootstrap.",
    image: "/images/projects/web3.PNG",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/MateoDonino/nodejs-project",
    previewUrl: "https://nodejs-project-chyw.onrender.com/",
  },
  {
    id: 3,
    title: "Api Rick and Morty 3",
    description: "Api de rick and morty",
    image: "/images/projects/web.PNG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Api Rick and Morty 4",
    description: "Api de rick and morty",
    image: "/images/projects/web.PNG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Api Rick and Morty 5",
    description: "Api de rick and morty",
    image: "/images/projects/web.PNG",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Api Rick and Morty 6",
    description: "Api de rick and morty",
    image: "/images/projects/web.PNG",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className=" text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Proyectos
      </h2>
      <div className=" text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className=" grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
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
