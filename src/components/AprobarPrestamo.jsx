import React from "react";
import { Title, TextInput, Button } from "./ui";

export default function AprobarPrestamo() {
  return (
    <section className="max-w-lg mx-auto my-8 overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-purple-300 to-pink-400">
      <div className="px-6 py-4 rounded-t-lg bg-gradient-to-r from-pink-500 to-purple-500">
        <Title>Aprobar Préstamo</Title>
      </div>

      <form className="grid gap-4 p-4">
        <label className="font-bold text-pink-900">
          Introduzca dirección del monedero del cliente
        </label>
        <TextInput
          type="text"
          placeholder="Ej: 0x123..."
          className="text-pink-900 placeholder-pink-300 rounded-lg bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <label className="font-bold text-pink-900">
          Introduzca el ID del Préstamo a Aprobar
        </label>
        <TextInput
          type="number"
          placeholder="Ej: 123"
          className="text-pink-900 placeholder-pink-300 rounded-lg bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <Button className="text-white rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600">
          Aprobar Préstamo
        </Button>
      </form>
    </section>
  );
}
