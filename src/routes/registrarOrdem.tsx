import { createFileRoute } from "@tanstack/react-router";
import RegistrarOrdemPage from "@/view/pages/RegistrarOrdem/RegistrarOrdemPage";

export const Route = createFileRoute("/registrarOrdem")({
  component: RegistrarOrdemPage,
});
