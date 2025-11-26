import SolicitacaoCard from "@/components/ui/solicitacao";
import logoPrefeitura from "./../../../assets/LogoPrefeitura.svg";
import { cn } from "@/lib/utils";

export default function SolicitacoesPage() {
  return (
    <div>
      <main
        className={cn(
          "bg-gray-100 text-seinfra-blue-light-400 font-semibold",
          "flex flex-col items-center justify-center gap-8",
          "min-h-[100dvh] h-auto w-screen"
        )}
      >
        <h1 className="mt-24 text-2xl lg:text-3xl">Minhas Solicitações</h1>
        <div className="flex flex-col justify-center items-center gap-8">
          <SolicitacaoCard
            Category="Iluminação"
            Local="11 de Novembro"
            Problem="Caiu um raio e explodiu tudo aqui kakakakakakakakakakakakakakakakakakak kakakakakakakakakakakkaakkakakakakakakakakakaakakkakakakakakakakakakakakakakakkakakakakakakakakakakakakak"
            RequestDate="12/03/25"
            ConclusionDate="09/09/25"
            State="Finalizada"
            Time="2h"
          />
          <SolicitacaoCard
            Category="Iluminação"
            Local="11 de Novembro"
            Problem="Caiu um raio e explodiu tudo aqui"
            RequestDate="12/03/25"
            ConclusionDate=""
            State="Em execução"
            Time="2h"
          />
          <SolicitacaoCard
            Category="Iluminação"
            Local="11 de Novembro"
            Problem="Caiu um raio e explodiu tudo aqui"
            RequestDate="12/03/25"
            ConclusionDate="09/09/25"
            State="Excluída"
            Time="2h"
          />
          <SolicitacaoCard
            Category="Iluminação"
            Local="11 de Novembro"
            Problem="Caiu um raio e explodiu tudo aqui"
            RequestDate="12/03/25"
            ConclusionDate="09/09/25"
            State="Finalizada"
            Time="2h"
          />
          <SolicitacaoCard
            Category="Iluminação"
            Local="11 de Novembro"
            Problem="Caiu um raio e explodiu tudo aqui"
            RequestDate="12/03/25"
            ConclusionDate="09/09/25"
            State="Finalizada"
            Time="2h"
          />
        </div>
        <img src={logoPrefeitura} className="size-[40%] sm:size-[20%] mb-4" />
      </main>
    </div>
  );
}
