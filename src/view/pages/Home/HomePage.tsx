import NavButton from "@/components/ui/nav-button";
import ConectaSeinfraIcon from "./../../../assets/ConectaSeinfra.svg";
import LogoPrefeitura from "./../../../assets/LogoPrefeitura.svg";
import pinkLine from "./../../../assets/pinkLine.svg";
import yellowLine from "./../../../assets/yellowLine.svg";

import { FileText } from "lucide-react";
import { History } from "lucide-react";
import { Keyboard } from "lucide-react";

function HomePage() {
  return (
    <div className="flex h-screen flex-col overflow-x-hidden ">
      <img
        src={pinkLine}
        alt="Linha Rosa Background"
        className="absolute left-0 top-0"
      />
      <main className="h-full w-full border-8 flex justify-center items-center">
        <div>
          <img src={ConectaSeinfraIcon} alt="Logo do Conecta Seinfra" />
          <div className="flex flex-col items-center gap-6">
            <NavButton
              Page="/register"
              Icon={FileText}
              Label="Registrar uma Ordem"
              className="w-[90vw] max-w-[600px]"
            />{" "}
            <NavButton
              Page="/login"
              Icon={History}
              Label="Minhas Solicitações"
              className="w-[90vw] max-w-[600px]"
            />{" "}
            <NavButton
              Page="/register"
              Icon={Keyboard}
              Label="Mensagem Direta"
              className="w-[90vw] max-w-[600px]"
            />
          </div>
          <img src={LogoPrefeitura} alt="LogoPrefeitura de Nova Russas" />
        </div>
      </main>
      <img
        src={yellowLine}
        alt="Yellow Line"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
}

export default HomePage;
