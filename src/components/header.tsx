import { ChevronLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

interface Props {
  Title: string;
}

export default function Header({ Title }: Props) {
  return (
    <div
      className={cn(
        "fixed lg:static top-0 flex justify-center",
        "pt-14 pb-4 w-full",
        "bg-gray-100 text-[#3ab0b8] font-semibold ",
      )}
    >
      <Link to="/" className="absolute left-4 lg:hidden">
        <ChevronLeftIcon className="text-seinfra-yellow-600" />
      </Link>
      <h1 className="text-2xl lg:text-3xl">{Title}</h1>
    </div>
  );
}
