import Home from "./Home";
import { useAccount } from "wagmi";

export default function InicioYAutenticacion() {
  const { address, isConnecting, isDisconnected } = useAccount();
  <section>
    <Home />;
  </section>;

  if (isConnecting)
    return (
      <div className="text-right text-sky-950 first-line: bg-gradient-to-r from-sky-600 to-cyan-200">
        Connecting...
      </div>
    );

  if (isDisconnected)
    return (
      <div className="text-right text-red-950 px-7 bg-gradient-to-r from-red-300 to-red-500">
        Disconnected{" "}
      </div>
    );
  return (
    <div className="flex flex-col font-semibold text-right text-green-500 bg-gradient-to-r from-green-50 to-emerald-200">
      <p className="text-xs md:hidden">Connected: {address}</p>
      <p className="hidden md:block">Connected Wallet: {address} </p>
    </div>
  );
}
