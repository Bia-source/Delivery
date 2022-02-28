import { prisma } from "../../../../database/prismaClient";

interface IRequestUpdateRegisterDeliveryman{
    id_deliveryman: string,
    updateDeliveryman: {
        username?: string,
        email?: string
    }
}

export class UpdateRegisterDeliverymanUseCase {
    async execute({id_deliveryman, updateDeliveryman}: IRequestUpdateRegisterDeliveryman){
          const deliveryman = await prisma.deliveryman.update({
              where: {
                  id: id_deliveryman
                },
              data: {
                  username: updateDeliveryman?.username,
                  email: updateDeliveryman?.email
              }
          });

          return deliveryman;
    }
}