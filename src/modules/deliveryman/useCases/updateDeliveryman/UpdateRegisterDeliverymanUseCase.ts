import { prisma } from "../../../../database/prismaClient";
import { ReturnClient } from "../../../../generated/schemas";

interface IRequestUpdateRegisterDeliveryman{
    id_deliveryman: string,
    updateDeliveryman: {
        username?: string,
        email?: string
    }
}

export class UpdateRegisterDeliverymanUseCase {
    async execute({id_deliveryman, updateDeliveryman}: IRequestUpdateRegisterDeliveryman): Promise<ReturnClient>{
          const deliveryman = await prisma.deliveryman.update({
              where: {
                  id: id_deliveryman
                },
              data: {
                  username: updateDeliveryman?.username,
                  email: updateDeliveryman?.email
              },
              select: {
                  id: true,
                  username: true,
                  email: true
              }
          });

          return deliveryman;
    }
}