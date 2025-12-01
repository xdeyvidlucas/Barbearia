import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const BookingItem = () => {
  return (
    <Card className="mx-5">
      <CardContent className="flex flex-row items-center justify-between">
        {/*ESQUERDA*/}
        <div className="flex flex-col gap-4">
          <Badge>Confirmado</Badge>
          <h3 className="text-xl font-semibold">Corte de Cabelo</h3>
          <div className="flex flex-row items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" sizes="icon" />
            </Avatar>
            <p className="text-sm font-semibold">Barbearia do Tião</p>
          </div>
        </div>
        {/*DIREITA*/}
        <div className="flex flex-col items-center gap-1 border-l-1 border-solid border-gray-200 pl-4">
          <p className="text-sm font-semibold">Setembro</p>
          <p className="text-3xl font-bold">24</p>
          <p className="text-sm font-semibold">14:00</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
