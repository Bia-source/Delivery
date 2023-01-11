import { prisma } from "../../../../database/prismaClient";

export class FindByIdDeliveryUseCase {
    async execute(id_delivery: string) {
        return await prisma.deliveries.findFirst({
            where: { id: id_delivery }, select: {
                item_name: true,
                id_client: true,
                deliveryman: true,
                created_at: true,
                end_at: true,
                status: true
            }
        })
    }
}