import React from "react";
import {
  SolicitarPrestamo,
  ReembolsarPrestamo,
  PrestamosClientes,
  AprobarPrestamo,
  LiquidarGarantia,
} from "../components";

export default function OperacionesDePrestamos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="pt-10 pb-5 text-5xl font-thin text-center text-sky-800">
        <h2>Operaciones de Préstamos</h2>
        <hr className="w-1/2 mx-auto border-t-4 border-pink-400" />
      </div>

      <div className="flex flex-wrap justify-center py-10 gap-14">
        <div className="transition-transform hover:scale-105">
          <SolicitarPrestamo className="p-6 bg-white rounded-full shadow-xl" />
        </div>

        <div className="transition-transform hover:scale-105">
          <AprobarPrestamo className="p-6 bg-white rounded-full shadow-xl" />
        </div>

        <div className="transition-transform hover:scale-105">
          <ReembolsarPrestamo className="p-6 bg-white rounded-full shadow-xl" />
        </div>

        <div className="transition-transform hover:scale-105">
          <LiquidarGarantia className="p-6 bg-white rounded-full shadow-xl" />
        </div>

        <div className="transition-transform hover:scale-105">
          <PrestamosClientes className="p-6 bg-white rounded-full shadow-xl" />
        </div>
      </div>
    </div>
  );
}
