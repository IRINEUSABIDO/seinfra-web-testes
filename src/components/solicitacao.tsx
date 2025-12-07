import { cn } from "@/lib/utils";

interface Props {
  Category: string;
  Local: string;
  Problem: string;
  RequestDate: string;
  ConclusionDate: string;
  State: string;
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
    <div className={cn("bg-white rounded-3xl", "flex w-[90vw] lg:w-[90vw]")}>
      <div
        className={cn(
          "bg-gray-500",
          `${State === "Finalizada" && "bg-seinfra-green-500"}`,
          `${State === "Em execução" && "bg-seinfra-yellow-500"}`,
          `${State === "Excluída" && "bg-red-500"}`,
          "text-transparent rounded-tl-3xl rounded-bl-3xl",
          "w-4",
        )}
      >
        Dbz
      </div>

      <div
        className={cn(
          "px-4 py-4",
          "flex grow text-sm text-seinfra-blue-light-700-50",
        )}
      >
        {/* text */}
        <div className="flex flex-col flex-1 gap-2 break-all">
          <div>
            <h1 className="font-bold text-xl text-seinfra-blue-light-700-70">
              Categoria: {Category}
            </h1>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h3 className="line-clamp-1">Local: {Local}</h3>
            <h3 className="line-clamp-1">Problema: {Problem}</h3>
          </div>
          <div className="flex flex-col gap-2 text-[0.6rem]">
            <p>Data de solicitação {RequestDate}</p>
            <p>Data de conclusão: {ConclusionDate}</p>
          </div>
        </div>
        {/* other stuff */}
        <div className="flex flex-col flex-1 justify-between items-end">
          <button
            className={cn(
              "bg-gray-500",
              `${State === "Finalizada" && "bg-seinfra-green-500"}`,
              `${State === "Excluída" && "bg-red-500"}`,
              `${State === "Em execução" && "bg-seinfra-yellow-500"}`,
              "py-2 px-4 text-white text-xs rounded-sm",
            )}
          >
            {State}
          </button>
          <p>{Time}</p>
        </div>
      </div>
    </div>
  );
}
