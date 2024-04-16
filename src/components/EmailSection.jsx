import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className=" grid md:grid-cols-2 my-12 md:md-12 py-24 gap-4">
      <div>
        <h5 className=" text-xl font-bold text-white my-2">Contactame!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Actualmente estoy en busqueda de nuevas oportunidades laborales, mi
          casilla de mensajes siempre está abierta. Dejame un mensaje y me
          pondre en contacto a la brevedad.
        </p>
        <div className=" socials flex flex-row gap-2">
          <Link
            href="https://github.com/MateoDonino"
            alt="Github Icon"
            target="_blank"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mateo-donino-583035192/"
            alt="Linkedin Icon"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className=" flex flex-col gap-4">
          <label htmlFor="email" className=" text-white">
            Tu Email
          </label>
          <input type="email" id="email" required placeholder="Escribir..." />
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
