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
        <div className="flex flex-col gap-12 items-center justify-center">
          <img
            src={ConectaSeinfraIcon}
            alt="Logo do Conecta Seinfra"
            className="size-54 sm:size-64 mt-12"
          />
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 justify-center">
              <NavButtonDanila
                Page="/login"
                Desc="Informe uma nova O.S"
                Icon={RoundedFile}
                Label="Nova Ordem de Serviço"
                className="w-44 h-full max-w-[480px] xs:w-55 lg:w-[40vw] lg:flex lg:justify-center lg:items-center lg:text-center"
              />
              <NavButtonDanila
                Page="/solicitacoes"
                Desc="Veja o andamento das suas O.S"
                Icon={History}
                Label="Minhas Solicitações"
                className="w-44 h-full max-w-[480px] xs:w-55 lg:w-[40vw] lg:flex lg:justify-center lg:items-center lg:text-center"
              />
            </div>
            <div className="flex justify-center items-center">
              <NavButtonDanila
                Page="/register"
                Desc="Envie mensagens diretamente para a prefeitura"
                Icon={Phone}
                Label="Mensagem Direta"
                className="w-92 max-w-[480px] xs:w-55 lg:w-[40vw] lg:flex lg:justify-center lg:items-center lg:text-center"
              />
            </div>
          </div>
          <img
            src={LogoPrefeitura}
            alt="Logo do Conecta Seinfra"
            className="size-54 sm:size-64"
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
