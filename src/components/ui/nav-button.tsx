import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface Props {
  Icon: LucideIcon;
  Page: string;
  Label: string;
  className?: string;
}

export default function NavButton({ Icon, Page, Label, className }: Props) {
  return (
    <div
      className={cn(
        "font-semibold text-seinfra-blue-light-500 border-2 border-seinfra-blue-light-500 rounded-3xl bg-transparent py-4 px-4",
        "flex items-center justify-between",
        className,
      )}
    >
      <Link to={Page}>
        <p>{Label}</p>
      </Link>
      <Icon className="size-5 text-seinfra-blue-light-500" />
    </div>
  );
}
