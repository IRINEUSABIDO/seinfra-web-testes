import { createFileRoute } from "@tanstack/react-router";
import SolicitacoesPage from "@/view/pages/Solicitacoes/SolicitacoesPage";

export const Route = createFileRoute("/solicitacoes")({
  component: SolicitacoesPage,
});
