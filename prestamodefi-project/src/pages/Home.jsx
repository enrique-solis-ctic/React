import React, { useState } from "react";
import { Title } from "../components/ui";

const faqs = [
  {
    question: "¿Qué es DeFi?",
    answer:
      "DeFi, o finanzas descentralizadas, es un sistema financiero construido sobre tecnología blockchain que permite acceder a servicios financieros, como préstamos o inversiones, de manera abierta y sin intermediarios.",
  },
  {
    question: "¿Cómo puedo empezar con los préstamos DeFi?",
    answer:
      "Para empezar con los préstamos DeFi, necesitas una wallet de criptomonedas conectada a la red Ethereum. Luego, puedes elegir una plataforma DeFi, depositar tu criptomoneda como garantía, y solicitar un préstamo en la moneda que prefieras.",
  },
];

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 overflow-hidden transition-shadow duration-300 ease-in-out border border-gray-200 rounded-lg shadow-lg hover:shadow-xl">
      <button
        className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-left text-gray-800">
          {question}
        </span>
        <span className="font-bold text-gray-800">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <div className="px-4 py-2 bg-white">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="container p-4 mx-auto anim-fade-in">
        <Title>Bienvenido a Prestamos DeFi</Title>
        <p className="my-2 text-lg text-center">
          Tu plataforma confiable para préstamos descentralizados.
        </p>
        <div className="mt-8 anim-fade-in">
          <Title>¿Por qué conectar tu wallet?</Title>
          <p className="mt-4">
            Conectar tu wallet te permite interactuar de forma segura y
            eficiente con los contratos inteligentes de nuestra plataforma.
            Podrás solicitar préstamos, depositar garantías y realizar otras
            operaciones financieras de manera descentralizada.
          </p>
          <p className="mt-2">
            Asegúrate de estar en la red Sepolia y sigue los pasos para conectar
            tu wallet Ethereum.
          </p>
        </div>
        <div className="mt-8 educacion-usuario anim-fade-in">
          <Title>Aprende Más Sobre DeFi</Title>
          <ul className="mt-4 list-disc list-inside">
            <li>
              <a
                href="https://n26.com/es-es/blog/que-es-defi"
                className="text-blue-600 hover:underline"
              >
                Qué es DeFi
              </a>
            </li>
            <li>
              <a
                href="https://www.business2community.com/es/criptomonedas/prestamos-defi"
                className="text-blue-600 hover:underline"
              >
                Cómo funcionan los préstamos DeFi
              </a>
            </li>
            <li>
              <a
                href="https://borrowbits.com/2022/04/protege-tus-fondos-en-defi-consejos-de-seguridad-para-dapps-web3/"
                className="text-blue-600 hover:underline"
              >
                Protege tus fondos en DeFi: Consejos de seguridad
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 anim-fade-in">
          <Title>Preguntas Frecuentes</Title>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
