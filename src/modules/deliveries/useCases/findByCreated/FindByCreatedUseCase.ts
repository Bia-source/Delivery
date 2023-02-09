import { prisma } from "../../../../database/prismaClient"
import { ReturnDeliveryByCreated } from "../../../../generated/schemas";

export class FindByCreatedUseCase {
    async execute(findDateInitial: string, findDateEnd: string): Promise<ReturnDeliveryByCreated[]>{
        const deliveries = await prisma.deliveries.findMany({ where:{
            created_at: {
                gte: new Date(findDateInitial.toString()),
                lt: new Date(findDateEnd.toString())
            },
            
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
    })
        return deliveries;
    }
}