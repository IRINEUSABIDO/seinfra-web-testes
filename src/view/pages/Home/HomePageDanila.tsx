import ConectaSeinfraIcon from "./../../../assets/ConectaSeinfra.svg";
import LogoPrefeitura from "./../../../assets/LogoPrefeitura.svg";
import pinkLine from "./../../../assets/pinkLine.svg";
import yellowLine from "./../../../assets/yellowLine.svg";
import { History } from "lucide-react";
import { Phone } from "lucide-react";
import { RoundedFile } from "@/assets/RoundedFile";
import NavButtonDanila from "@/components/nav-button-danila";

function HomePageDanila() {
  return (
    <div className="relative flex h-[100dhv] flex-col overflow-x-hidden ">
      <img
        src={pinkLine}
        alt="Linha Rosa Background"
        className="absolute left-0 top-0 z-0"
      />
      <main className="h-full w-full flex bg-gray-100 justify-center items-center">
        <div className="flex flex-col gap-24 items-center justify-center">
          <img
            src={ConectaSeinfraIcon}
            alt="Logo do Conecta Seinfra"
            className="size-[60%] sm:size-[40%] mt-[20%]"
          />
          <div className="flex flex-col gap-6">
            <NavButtonDanila
              Page="/register"
              Desc="Informe uma nova O.S"
              Icon={RoundedFile}
              Label="Nova Ordem de Serviço"
              className="w-[90vw] max-w-[600px]"
            />
            <NavButtonDanila
              Page="/solicitacoes"
              Desc="Veja o andamento das suas O.S"
              Icon={History}
              Label="Minhas Solicitações"
              className="w-[90vw] max-w-[600px]"
            />
            <NavButtonDanila
              Page="/register"
              Desc="Mensagem Direta"
              Icon={Phone}
              Label="Envie mensagens diretamente para a prefeitura"
              className="w-[90vw] max-w-[600px] mb-[5%]"
            />
          </div>
          <img
            src={LogoPrefeitura}
            alt="Logo do Conecta Seinfra"
            className="size-[60%] sm:size-[40%]"
          />

          <div>
            <img
              src={yellowLine}
              alt="Yellow Line"
              className="absolute -right-2 sm:right-0 bottom-0"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePageDanila;
