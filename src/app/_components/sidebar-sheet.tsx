"use client";

import { QUICK_SEARCH_ITEMS } from "@/_constants/search";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { authClient } from "@/lib/auth-client";

import {
  Calendar1Icon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  Sheet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SidebarSheet = () => {
  const handleLogin = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const { data } = authClient.useSession();

  return (
    <div>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        {data?.user ? (
          <>
            <div className="flex flex-row items-center gap-3 border-b border-solid p-5">
              <Avatar>
                <AvatarImage
                  src={data.user.image || "/user.svg"}
                  width={18}
                  height={18}
                />
              </Avatar>
              <div>
                <p className="font-bold">{data.user.name}</p>
                <p className="text-sm">{data.user.email}</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row items-center justify-between p-5">
              <h2 className="font-bold">Olá, faça seu login</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={"outline"} size={"icon"}>
                    <LogInIcon />
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-[90%]">
                  <DialogHeader>
                    <DialogTitle>Faça login na plataforma</DialogTitle>
                    <DialogDescription>
                      Conecte-se usando sua conta do Google
                    </DialogDescription>
                  </DialogHeader>
                  <Button
                    variant={"outline"}
                    className="w-full justify-center"
                    onClick={handleLogin}
                  >
                    <Image
                      src={"/google.svg"}
                      alt="Google Icon"
                      width={18}
                      height={18}
                    />
                    Continuar com Google
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </>
        )}

        <div className="flex flex-col gap-2 border-b border-solid p-5">
          <SheetClose asChild>
            <Button variant={"outline"} className="justify-start" asChild>
              <Link href={"/"}>
                <HomeIcon />
                Página Inicial
              </Link>
            </Button>
          </SheetClose>

          <Button variant={"outline"} className="justify-start">
            <Calendar1Icon />
            Agendamentos
          </Button>
        </div>

        <div className="flex flex-col gap-2 border-b border-solid p-5">
          {QUICK_SEARCH_ITEMS.map((item) => (
            <Button
              key={item.label}
              className="justify-start gap-2"
              variant={"outline"}
            >
              <Image src={item.icon} alt={item.label} width={18} height={18} />
              {item.label}
            </Button>
          ))}
        </div>
        <SheetClose asChild>
          <Button variant={"outline"} onClick={handleLogout}>
            <LogOutIcon />
            Sair
          </Button>
        </SheetClose>
      </SheetContent>
    </div>
  );
};

export default SidebarSheet;
