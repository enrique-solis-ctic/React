import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserFriends, FaDollarSign, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative shadow-lg bg-gradient-to-r from-pink-500 to-rose-500">
      <div className="flex items-center justify-between px-4 py-4 text-white">
        <FaBars
          className="text-2xl text-yellow-500 cursor-pointer md:hidden hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <ul
          className={`${
            isMenuOpen ? "fixed" : "hidden"
          } flex-col inset-x-0 top-0 mt-[4rem] bg-pink-500 z-50 md:hidden`}
          style={{ width: "100vw" }} // Establecer el ancho como 100% del viewport
        >
          <MenuItem icon={<FaHome />} to="/" text="Inicio" />
          <MenuItem icon={<FaUserFriends />} to="/usuarios" text="Usuarios" />
          <MenuItem icon={<FaDollarSign />} to="/prestamos" text="Préstamos" />
        </ul>
        <ul className="items-center justify-center hidden space-x-4 lg:flex">
          {/* Menú para pantallas grandes: iconos + texto completo */}
          <MenuItem
            icon={<FaHome />}
            to="/"
            text="Inicio y Autenticación"
            fullText
          />
          <MenuItem
            icon={<FaUserFriends />}
            to="/usuarios"
            text="Gestión de Usuarios"
            fullText
          />
          <MenuItem
            icon={<FaDollarSign />}
            to="/prestamos"
            text="Operaciones de Préstamos"
            fullText
          />
        </ul>
        <ul className="items-center justify-center hidden space-x-2 md:flex lg:hidden">
          {/* Menú para pantallas medianas: iconos + texto simplificado */}
          <MenuItem icon={<FaHome />} to="/" text="Inicio" />
          <MenuItem icon={<FaUserFriends />} to="/usuarios" text="Usuarios" />
          <MenuItem icon={<FaDollarSign />} to="/prestamos" text="Préstamos" />
        </ul>
      </div>
    </nav>
  );
}

function MenuItem({ icon, to, text }) {
  return (
    <li className="w-full">
      <Link
        to={to}
        className="flex items-center justify-between w-full px-4 py-2 text-yellow-500 hover:text-white"
      >
        <span className="text-xl">{icon}</span>
        <span className="flex-grow text-left">{text}</span>
      </Link>
    </li>
  );
}
