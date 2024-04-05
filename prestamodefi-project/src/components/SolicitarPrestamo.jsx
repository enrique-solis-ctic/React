import React from "react";
import { Title, TextInput, Button } from "./ui";

export default function SolicitarPrestamo() {
  return (
    <section className="max-w-lg mx-auto my-8 overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-purple-300 to-pink-400">
      <div className="px-6 py-4 rounded-t-lg bg-gradient-to-r from-pink-500 to-purple-500">
        <Title>Solicitar Préstamo</Title>
      </div>

      <form className="grid gap-4 p-4">
        <label className="font-bold text-pink-900">
          Paso 1: Deposita Garantía (100% Préstamo Solicitado)
        </label>
        <TextInput
          type="number"
          placeholder="Ej: 100 ETH"
          className="text-pink-900 placeholder-pink-300 rounded-lg bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <div className="grid p-2">
          <Button>Depositar Saldo Garantía</Button>
        </div>

        <label className="font-bold text-pink-900">
          Paso 2: Indica Monto en Ether que se Solicita
        </label>
        <TextInput
          type="number"
          placeholder="Ej: 3 ETH"
          className="text-pink-900 placeholder-pink-300 rounded-lg bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <label className="font-bold text-pink-900">
          Paso 3: Indica Plazo de Devolución (días NATURALES)
        </label>
        <TextInput
          type="number"
          placeholder="Ej: 30"
          className="text-pink-900 placeholder-pink-300 rounded-lg bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <div className="grid p-2">
          <Button>Enviar Solicitud</Button>
        </div>
      </form>
    </section>
  );
}
