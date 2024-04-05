{
  /*import React from "react";
import { Navbar } from "../components";
import { ConnectKitButton } from "connectkit";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b shadow-lg bg-gradient-to-r from-pink-500 to-rose-300">
      <div className="flex items-center">
        <img
          className="w-12 h-12 transition-transform duration-300 ease-in-out transform md:w-20 md:h-20 hover:scale-110 hover:rotate-6"
          src="/logo.png"
          alt="Logo"
        />
        <h1 className="hidden ml-4 text-xl font-bold text-yellow-500 transition-shadow duration-300 shadow-md md:block hover:shadow-lg">
          PréstamoDeFi
        </h1>
      </div>
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <div className="flex items-center">
        <div className="p-1 transition-shadow duration-300 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-600 hover:shadow-xl">
          <ConnectKitButton showBalance className="rounded-full" />
        </div>
        <FaBars className="ml-4 text-2xl text-white transition-colors duration-300 cursor-pointer md:hidden hover:text-yellow-500" />
      </div>
    </header>
  );
}
*/
}

import React from "react";
import Navbar from "../components/Navbar";
import { ConnectKitButton } from "connectkit";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b shadow-lg bg-gradient-to-r from-pink-500 to-rose-300">
      <div className="flex items-center">
        <img
          className="w-12 h-12 transition-transform duration-300 ease-in-out transform md:w-20 md:h-20 hover:scale-110 hover:rotate-6"
          src="/logo.png"
          alt="Logo"
        />
        <h1 className="hidden ml-4 text-xl font-bold text-yellow-500 md:block hover:shadow-lg">
          PréstamoDeFi
        </h1>
      </div>
      <Navbar />
      <div className="p-1 transition-shadow duration-300 rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-600 hover:shadow-xl">
        <ConnectKitButton showBalance className="rounded-full" />
      </div>
    </header>
  );
}
