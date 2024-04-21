"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const EmailSection = () => {
  const [emailSumbitted, setEmailSumbitted] = useState(false);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endponint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endponint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      console.log("Message sent");
      setEmailSumbitted(true);
    }
  };

  return (
    <section
      id="contacto"
      className=" grid md:grid-cols-2 my-12 md:md-12 py-24 gap-4 relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
      >
        <div className=" z-10">
          <h5 className=" text-xl font-bold text-white my-2">Contactame!</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-lg">
            Actualmente estoy en busqueda de nuevas oportunidades laborales, mi
            casilla de mensajes siempre está abierta. Dejame un mensaje y me
            pondre en contacto a la brevedad. Tambien estoy muy atento a mi
            casilla de LinkedIn.
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.5 }}
      >
        <div>
          <form className=" flex flex-col" onSubmit={handleSumbit}>
            <div className=" mb-6">
              {" "}
              <label
                htmlFor="name"
                className=" text-white mb-2 block text-sm font-medium"
              >
                Nombre Completo
              </label>
              <input
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                name="name"
                type="text"
                id="name"
                required
                placeholder="Escribir . . ."
              />
            </div>
            <div className=" mb-6">
              {" "}
              <label
                htmlFor="email"
                className=" text-white block text-sm mb-2 font-medium"
              >
                Tu Email
              </label>
              <input
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                name="email"
                type="email"
                id="email"
                required
                placeholder="Escribir . . ."
              />
            </div>
            <div className=" mb-6">
              <label
                htmlFor="subject"
                className=" text-white block text-sm mb-2 font-medium"
              >
                Asunto
              </label>
              <input
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Escribir . . ."
              />
            </div>
            <div className=" mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensaje
              </label>
              <textarea
                name="message "
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Dejar un mensaje . . ."
              ></textarea>
            </div>
            <button
              type="sumbit"
              className=" bg-blue-800 hover:bg-blue-900 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar Mensaje
            </button>
            {emailSumbitted && (
              <p className="text-green-500 text-sm mt-2">
                Tu mensaje ha sido enviado!
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default EmailSection;
