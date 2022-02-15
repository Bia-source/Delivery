import { prisma } from "../../../../database/prismaClient";
import { mapDelivery } from "../../../../share/FormatReturn/map";


export class FindAllAvailableUseCase {
    async execute() {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                end_at: null,
                id_deliveryman: null
            },
            select: {
                id: true,
                client: true,
                item_name: true,
                id_deliveryman: true,
                created_at: true,
                end_at: true,
                status: true,
            }
        });
        
        return mapDelivery(deliveries);
    }
}

