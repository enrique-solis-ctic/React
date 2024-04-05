import React from "react";
import { Title, TextInput, Button } from "./ui";

export default function PrestamosClientes() {
  return (
    <section className="max-w-lg mx-auto my-8 overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-purple-300 to-pink-400">
      <div className="px-6 py-4 rounded-t-lg bg-gradient-to-r from-pink-500 to-purple-500">
        <Title>Consulta tus Préstamos</Title>
      </div>

      <form className="grid gap-4 p-4">
        <label className="font-bold text-pink-900">
          Indica el ID del Préstamo a Consultar
        </label>
        <TextInput
          type="number"
          placeholder="Ej: 123"
          className="text-pink-900 placeholder-pink-300 rounded-lg bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <Button>Consultar</Button>
      </form>
    </section>
  );
}
