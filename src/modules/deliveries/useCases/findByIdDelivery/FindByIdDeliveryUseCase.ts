import { prisma } from "../../../../database/prismaClient";
import { ReturnDeliveryByIdAndDate } from "../../../../generated/schemas";

export class FindByIdDeliveryUseCase {
    async execute(id_delivery: string): Promise<ReturnDeliveryByIdAndDate> {
        return await prisma.deliveries.findFirst({
            where: { id: id_delivery }, 
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
        })
    }
}
