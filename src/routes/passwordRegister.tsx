import PasswordRegisterPage from "@/view/pages/Register/PasswordRegisterPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/passwordRegister")({
  component: PasswordRegisterPage,
});
