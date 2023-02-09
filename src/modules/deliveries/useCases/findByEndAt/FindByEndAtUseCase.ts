import { prisma } from "../../../../database/prismaClient";
import { ReturnDeliveryByIdAndDate } from "../../../../generated/schemas";


export class FindByEndAtUseCase {
    async execute(findDateInitial: string, findDateEnd: string): Promise<ReturnDeliveryByIdAndDate[]>{
        const deliveries = await prisma.deliveries.findMany({ where:{
            end_at: {
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
        }})
        return deliveries;
    }
}