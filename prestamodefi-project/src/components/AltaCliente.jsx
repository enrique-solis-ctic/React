import { useState, useEffect } from "react";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { prestamoDeFiABI } from "../contracts/ABIs";
import { toast } from "react-hot-toast";
import { Title, TextInput, Button } from "./ui";

export default function AltaCliente() {
  const [clientAddress, setClientAddress] = useState("");
  const { address } = useAccount();

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "altaCliente",
    enabled: clientAddress,
    args: [clientAddress],
  });

  const { data, write } = useContractWrite(config);

  const isLenderEmployee = address === data;

  const {
    isLoading: isTransactionLoading,
    isSuccess: isTransactionSuccess,
    isError: isTransactionError,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleClientAddressInputChange = (event) => {
    setClientAddress(event.target.value);
  };

  useEffect(() => {
    if (isTransactionSuccess) {
      toast.success("Cliente dado de alta con éxito");
      setClientAddress("");
    }
    if (isTransactionError) {
      toast.error("La transacción se ha fallado");
    }
  }, [isTransactionSuccess, isTransactionError]);

  return (
    <section className="max-w-lg mx-auto my-8 overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-purple-300 to-pink-400">
      <div className="px-6 py-4 rounded-t-lg bg-gradient-to-r from-pink-500 to-purple-500">
        <Title>Alta Cliente</Title>
      </div>

      <form className="grid gap-4 p-4">
        <label htmlFor="clientAddress" className="font-bold text-pink-900">
          Introduzca dirección del Nuevo Cliente
        </label>
        <TextInput
          id="clientAddress"
          type="text"
          placeholder="Ej: 0x123..."
          value={clientAddress}
          disabled={!isLenderEmployee || isTransactionLoading}
          onChange={handleClientAddressInputChange}
          className="text-pink-900 placeholder-pink-300 rounded-lg bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <Button
          disabled={!clientAddress || !isLenderEmployee || isTransactionLoading}
          isLoading={isTransactionLoading}
          onClick={() => write?.()}
        >
          {isLenderEmployee
            ? isTransactionLoading
              ? "Tramitando Alta Nuevo Cliente"
              : "Alta Cliente"
            : "Operación reservada a los Empleados Prestamistas"}
        </Button>
      </form>
    </section>
  );
}
