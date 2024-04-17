"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { Bars3Icon, XmarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "Sobre mi",
    path: "#about",
  },
  {
    title: "Proyectos",
    path: "#proyects",
  },
  {
    title: "Contacto",
    path: "#contact",
  },
];

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-3xl text-white font-semibold"
        >
          PORTFOLIO.
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white">
              <Bars3Icon
                onClick={() => setNavbarOpen(true)}
                className="h-5 w-5"
              />
            </button>
          ) : (
            <button className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:border-white">
              <XmarkIcon
                onClick={() => setNavbarOpen(false)}
                className="h-5 w-5"
              />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
