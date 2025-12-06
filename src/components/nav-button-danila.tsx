import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface Props {
  Icon: LucideIcon;
  Page: string;
  Desc: string;
  Label: string;
  className?: string;
}

export default function NavButtonDanila({
  Icon,
  Page,
  Desc,
  Label,
  className,
}: Props) {
  return (
    <div>
      <Link to={Page}>
        <div
          className={cn(
            "bg-white rounded-3xl shadow-sm font-semibold",
            "flex flex-col justify-center gap-8",
            className,
          )}
        >
          <Icon className="text-seinfra-blue-light-600-60 mx-4 size-10" />
          <div>
            <h2 className="text-lg text-seinfra-blue-light-700-70 px-4">
              {Label}
            </h2>
            <p className="text-[0.625rem] text-seinfra-blue-light-600 px-4">
              {Desc}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
