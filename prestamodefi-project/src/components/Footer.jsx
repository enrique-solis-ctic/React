import React from "react";
import { FaInfoCircle, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center px-3 py-4 text-yellow-500 md:flex-row justify-evenly bg-gradient-to-r from-pink-500 to-rose-500">
      <div className="flex items-center mb-4 md:mb-0">
        <FaInfoCircle className="mr-2 text-yellow-500" />
        <p className="text-xs sm:text-sm">
          © {new Date().getFullYear()} Enrique Solís. Todos los derechos
          reservados.
        </p>
      </div>
      <div className="flex">
        <a
          href="https://www.linkedin.com/in/enrique-jes%C3%BAs-sol%C3%ADs-gonz%C3%A1lez-78000227/"
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-yellow-500 transition-transform duration-200 hover:scale-125"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/ElWaje"
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-yellow-500 transition-transform duration-200 hover:scale-125"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href="mailto:elwaje@gmail.com"
          className="mx-2 text-yellow-500 transition-transform duration-200 hover:scale-125"
        >
          <FaEnvelope className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}
