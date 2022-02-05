import { prisma } from "../../../../database/prismaClient";

interface IRequestDelivery {
    item_name: string;
    id_client: string;
}

export class CreateDeliverymanUseCase {
    async execute({item_name, id_client}: IRequestDelivery) {
        const delivery = await prisma.deliveries.create({
            data: {
                item_name,
                id_client
            }
        });

        return delivery;
    }
}