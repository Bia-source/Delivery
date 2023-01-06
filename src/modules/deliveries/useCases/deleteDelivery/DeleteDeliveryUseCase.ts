import { prisma } from "../../../../database/prismaClient";
import { validationStatusDelivery } from "../../../../share/validators";
import { FindByIdDeliveryUseCase } from "../findByIdDelivery/FindByIdDeliveryUseCase";


export class DeleteDeliveryUseCase {
    async execute(id_delivery: string) {
        const getDelivery = new FindByIdDeliveryUseCase();
        const delivery = await getDelivery.execute(id_delivery);
        
        if (delivery.status === "TRANSITO") {
            throw new Error('Pedido nao pode mais ser cancelado, pois já está em transito!');
        }
        if (delivery.status === "ENTREGUE") {
            throw new Error('Pedido nao pode mais ser cancelado, pois já foi entregue!');
        }

        return await prisma.deliveries.delete({ where: { id: id_delivery } })
    }
}