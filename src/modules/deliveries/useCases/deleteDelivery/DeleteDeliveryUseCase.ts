import { FindByIdClientUseCase } from './../../../clients/useCases/findByIdClient/FindByIdClientUseCase';
import { prisma } from "../../../../database/prismaClient";
import { validationStatusDelivery } from "../../../../share/validators";
import { FindByIdDeliveryUseCase } from "../findByIdDelivery/FindByIdDeliveryUseCase";


export class DeleteDeliveryUseCase {
    async execute(id_delivery: string, id_client: string) {
        const getDelivery = new FindByIdDeliveryUseCase();
        const delivery = await getDelivery.execute(id_delivery);
        
        const clientDelivery = new FindByIdClientUseCase();
        const client = await clientDelivery.execute(id_client);

        if(delivery.id_client != id_client && !client.adm){
            throw new Error('Usuario não permitido!');
        }
        if (delivery.status === "TRANSITO") {
            throw new Error('Pedido nao pode mais ser cancelado, pois já está em transito!');
        }
        if (delivery.status === "ENTREGUE") {
            throw new Error('Pedido nao pode mais ser cancelado, pois já foi entregue!');
        }

        return await prisma.deliveries.delete({ where: { id: id_delivery } })
    }
}