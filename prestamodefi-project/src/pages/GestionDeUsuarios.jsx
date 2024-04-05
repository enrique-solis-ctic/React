import React from "react";
import { AltaPrestamista, AltaCliente } from "../components";

export default function GestionDeUsuarios() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="pt-10 pb-5 text-5xl font-thin text-center text-sky-800">
        <h2>Gestión de Usuarios</h2>
        <hr className="w-1/2 mx-auto border-t-4 border-pink-400" />
      </div>

      <section className="flex flex-wrap items-center justify-center gap-10 py-10">
        <div className="transition-transform hover:scale-105">
          <AltaPrestamista className="p-6 bg-white rounded-full shadow-xl" />
        </div>

        <div className="transition-transform hover:scale-105">
          <AltaCliente className="p-6 bg-white rounded-full shadow-xl" />
        </div>
      </section>
    </div>
  );
}
