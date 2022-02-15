import { prisma } from "../../../../database/prismaClient";
import { deliveryAlreadyExist } from "../../../../share/validators";
import { IRequestUpdateDelivery } from "../../../../share/interfaces";

export class UpdateDeliverymanUseCase {
    async execute({id_delivery, id_deliveryman}: IRequestUpdateDelivery){
        try {
            const delivery = await prisma.deliveries.update({
                where:{
                    id: id_delivery
                },
                data: {
                    id_deliveryman,
                    status: "TRANSITO"
                }
            })
            return delivery;
        } catch (error) {
            deliveryAlreadyExist();
        }
    }
}