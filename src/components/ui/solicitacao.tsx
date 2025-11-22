import { cn } from "@/lib/utils";

interface Props {
  Category: string;
  Local: string;
  Problem: string;
  RequestDate: string;
  ConclusionDate: string;
  State: "Finalizada" | "Em execução" | "Excluída";
  Time: string;
}

export default function SolicitacaoCard({
  Category,
  Local,
  Problem,
  RequestDate,
  ConclusionDate,
  State,
  Time,
}: Props) {
  return (
    <div
      className={cn(
        "bg-white rounded-3xl",
        "mx-2",
        "flex w-[90vw] lg:w-[90vw]",
      )}
    >
      <div
        className={cn(
          "bg-green-500 text-transparent rounded-tl-3xl rounded-bl-3xl",
          "w-4",
        )}
      >
        Dbz
      </div>

      <div className={cn("px-4 py-4", "flex justify-between grow text-[1rem]")}>
        {/* text */}
        <div className="flex flex-col gap-2 break-all hyphens-auto">
          <div>
            <h1 className="font-bold">Categoria: {Category}</h1>
          </div>
          <div className="flex flex-col gap-2 text-[0.75rem]">
            <h3>Local: {Local}</h3>
            <h3 lang="pt-br">Problema: {Problem}</h3>
          </div>
          <div className="flex flex-col gap-2 text-[0.625rem]">
            <p>Data de solicitação {RequestDate}</p>
            <p>Data de conclusão: {ConclusionDate}</p>
          </div>
        </div>
        {/* other stuff */}
        <div className="flex flex-col justify-between items-end">
          <button className="bg-green-500 py-2 px-4 text-white text-[0.7rem] rounded-sm">
            {State}
          </button>
          <p>{Time}</p>
        </div>
      </div>
    </div>
  );
}
