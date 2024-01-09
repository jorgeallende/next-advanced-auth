import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { FaUserLock } from "react-icons/fa";

const font = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold flex gap-2", font.className)}>
        <FaUserLock />
        Auth
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
