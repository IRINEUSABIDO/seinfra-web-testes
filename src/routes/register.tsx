import RegisterPage from "@/view/pages/Register/RegisterPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});
