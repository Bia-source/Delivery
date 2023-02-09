import { prisma } from "../../../../database/prismaClient";
import { ReturnDeliveryByIdAndDate } from "../../../../generated/schemas";


export class FindByIdDeliverymanUseCase {
    async execute(id_deliveryman: string): Promise<ReturnDeliveryByIdAndDate[]> {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                id_deliveryman
            },
            include: {
                client: {
                    select: {
                        username: true,
                        adress: true,
                        email: true
                    }
                },
                item_name: {
                    include: {
                        produto: true
                    }
                }

            }
        });
        return deliveries;
    }
}