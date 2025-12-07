import SolicitacaoCard from "@/components/solicitacao";
import logoPrefeitura from "./../../../assets/LogoPrefeitura.svg";
import { cn } from "@/lib/utils";

export default function SolicitacoesPage() {
  const fakeData = [
    {
      category: "Buraco na pista",
      local: "11 de novembro",
      problem: "caiu a luz aq doido",
      requestDate: "21/08/2025",
      conclusionDate: "04/09/2025",
      state: "Finalizada",
      time: "20h",
    },
    {
      category: "Iluminação",
      local: "11 de novembro",
      problem: "rua ta toda cheia de buraco",
      requestDate: "21/08/2025",
      conclusionDate: "04/09/2025",
      state: "Excluída",
      time: "15m",
    },
    {
      category: "Asfaltar",
      local: "11 de novembro",
      problem: "rua ta toda cheia de buraco",
      requestDate: "21/08/2025",
      conclusionDate: "04/09/2025",
      state: "Em execução",
      time: "3d",
    },
  ];
  return (
    <div>
      <main
        className={cn(
          "bg-gray-100 text-seinfra-blue-light-400 font-semibold",
          "flex flex-col items-center justify-center gap-8",
          "min-h-[100dvh] h-auto w-screen",
        )}
      >
        <h1 className="mt-24 text-2xl lg:text-3xl">Minhas Solicitações</h1>
        <div className="flex flex-col justify-center items-center gap-8">
          {fakeData.map((data) => (
            <SolicitacaoCard
              Category={data.category}
              Local={data.local}
              Problem={data.problem}
              RequestDate={data.requestDate}
              ConclusionDate={data.conclusionDate}
              State={data.state}
              Time={data.time}
            />
          ))}
        </div>
        {/*  <SolicitacaoCard
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
	*/}
        <img src={logoPrefeitura} className="size-[40%] sm:size-[20%] mb-4" />
      </main>
    </div>
  );
}
