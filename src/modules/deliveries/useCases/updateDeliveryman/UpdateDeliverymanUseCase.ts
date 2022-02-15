import { prisma } from "../../../../database/prismaClient";
import { deliveryAlreadyExist } from "../../../../share/validators";

interface IRequestUpdateDeliveryman{
    id_delivery: string;
    id_deliveryman: string;
}

export class UpdateDeliverymanUseCase {
    async execute({id_delivery, id_deliveryman}: IRequestUpdateDeliveryman){
        try {
            const delivery = await prisma.deliveries.update({
                where:{
                    id: id_delivery
                },
                data: {
                    id_deliveryman
                }
            })
            return delivery;
        } catch (error) {
            deliveryAlreadyExist();
        }
    }
}