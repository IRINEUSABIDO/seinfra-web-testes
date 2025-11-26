import { createFileRoute } from "@tanstack/react-router";
import HomePageDanila from "@/view/pages/Home/HomePageDanila";

export const Route = createFileRoute("/")({
  component: HomePageDanila,
});
