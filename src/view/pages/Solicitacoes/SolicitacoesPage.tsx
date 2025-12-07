import SolicitacaoCard from "@/components/solicitacao";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

export default function SolicitacoesPage() {
  const fakeData = [
    {
      category: "Buraco na pista",
      local: "11 de novembro",
      problem: "rua ta toda cheia de buraco",
      requestDate: "21/08/2025",
      conclusionDate: "04/09/2025",
      state: "Finalizada",
      time: "20h",
    },
    {
      category: "Iluminação",
      local: "11 de novembro",
      problem:
        "caiu um poste e explodiu a cabeça do fulano jakaasjasdlkadklajdlkasdklasjdlkasjdlkasjdkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
      requestDate: "21/08/2025",
      conclusionDate: "04/09/2025",
      state: "Finalizada",
      time: "15m",
    },
    {
      category: "Asfaltar",
      local: "11 de novembro",
      problem: "rua ta toda cheia de buraco tem que asfaltar isso dae",
      requestDate: "21/08/2025",
      conclusionDate: "04/09/2025",
      state: "Em execução",
      time: "3d",
    },
    {
      category: "Asfaltar",
      local: "11 de novembro",
      problem: "rua ta toda cheia de buraco tem que asfaltar isso dae",
      requestDate: "21/08/2025",
      conclusionDate: "04/09/2025",
      state: "Em execução",
      time: "3d",
    },
    {
      category: "Asfaltar",
      local: "11 de novembro",
      problem: "rua ta toda cheia de buraco tem que asfaltar isso dae",
      requestDate: "21/08/2025",
      conclusionDate: "04/09/2025",
      state: "Excluída",
      time: "3d",
    },
  ];
  return (
    <div>
      <Header Title="Minhas Solicitações" />
      <main
        className={cn(
          "bg-gray-100 text-seinfra-blue-light-400 font-semibold",
          "flex flex-col items-center justify-center gap-8",
          "min-h-dvh h-auto w-full overflow-hidden",
        )}
      >
        <div className="flex flex-col justify-center items-center gap-8 mt-28 mb-20 lg:mt-4">
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
        <Footer />
      </main>
    </div>
  );
}
