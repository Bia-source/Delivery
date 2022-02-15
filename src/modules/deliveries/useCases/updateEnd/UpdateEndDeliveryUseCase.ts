import { prisma } from "../../../../database/prismaClient";
import { IRequestUpdateDelivery } from "../../../../share/interfaces";
import { deliveryAlreadyExist } from "../../../../share/validators";

export class UpdateEndDeliveryUseCase {
    async execute({id_delivery, id_deliveryman}: IRequestUpdateDelivery){
        try {
            const delivery = await prisma.deliveries.update({
                where: {
                    id: id_delivery
                },
                data: {
                    end_at: new Date(),
                    status: "ENTREGUE"
                }
            });
            return delivery;
        } catch (error) {
            deliveryAlreadyExist();
        }
    }
}