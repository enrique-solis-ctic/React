import { Title, TextInput, Button } from "./ui";
import { prestamoDeFiABI } from "../contracts/ABIs";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export default function AltaPrestamista() {
  const [lenderAddress, setLenderAddress] = useState("");
  const { address } = useAccount();

  const { config } = usePrepareContractWrite({
    address: import.meta.env.VITE_TOKEN_CONTRACT_ADDRESS,
    abi: prestamoDeFiABI,
    functionName: "altaPrestamista",
    enabled: lenderAddress,
    args: [lenderAddress],
  });

  const { data, write } = useContractWrite(config);

  const isMainPartner = address === data;

  const {
    isLoading: isTransactionLoading,
    isSuccess: isTransactionSuccess,
    isError: isTransactionError,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleLenderAddressInputChange = (event) => {
    setLenderAddress(event.target.value);
  };

  useEffect(() => {
    if (isTransactionSuccess) {
      toast.success("Prestamista dado de alta con éxito");
      setLenderAddress("");
    }
    if (isTransactionError) {
      toast.error(
        "La transacción ha fallado, por favor, revisa los datos de entrada"
      );
    }
  }, [isTransactionSuccess, isTransactionError]);

  return (
    <section className="max-w-lg mx-auto my-8 overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-purple-300 to-pink-400">
      <div className="px-6 py-4 rounded-t-lg bg-gradient-to-r from-pink-500 to-purple-500">
        <Title>Alta Prestamista</Title>
      </div>

      <form className="grid gap-4 p-4">
        <label className="font-bold text-pink-900" htmlFor="lenderAddress">
          Introduzca dirección Monedero Prestamista
        </label>
        <TextInput
          id="lenderAddress"
          type="text"
          placeholder="Ej: 0x123..."
          value={lenderAddress}
          disabled={isTransactionLoading}
          onChange={handleLenderAddressInputChange}
          className="text-pink-900 placeholder-pink-300 rounded-lg bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <Button
          disabled={!lenderAddress || isTransactionLoading}
          isLoading={isTransactionLoading}
          onClick={() => write?.()}
        >
          {isTransactionLoading ? "Procesando..." : "Alta Prestamista"}
        </Button>
      </form>
    </section>
  );
}
