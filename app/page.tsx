import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import { FaUserLock } from "react-icons/fa";

const font = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400 to-indigo-500">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md flex gap-2 items-center justify-center",
            font.className
          )}
        >
          <FaUserLock />
          Auth
        </h1>
        <p className="text-white text-lg">Serviço de autenticação</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Logar
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
