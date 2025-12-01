import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Barbershop } from "@/generated/prisma";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-2">
        <div className="relative h-[100px] w-full">
          <Image
            src={barbershop.imageUrl}
            alt="Barbearia"
            fill
            className="object-cover"
          />
          <Badge
            className="absolute top-2 left-2 flex flex-row items-center gap-1"
            variant={"secondary"}
          >
            <StarIcon size={12} className="fill-primary text-primary" />
            <span className="text-xs font-semibold">5.0</span>
          </Badge>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="truncate text-xl font-bold">{barbershop.name}</p>
          <p className="truncate font-semibold">{barbershop.address}</p>
          <Link href={`barbershops/${barbershop.id}`} className="w-full">
            <Button variant={"outline"} className="w-full">
              Reservar
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
