import { prisma } from "../../../../database/prismaClient";


export class FindByIdDeliverymanUseCase {
    async execute(id_deliveryman){
        const deliveries = await prisma.deliveries.findMany({
            where: {
                id_deliveryman
            }
        });
        return deliveries;
    }
}