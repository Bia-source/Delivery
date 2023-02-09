import { prisma } from "../../../../database/prismaClient";
import { ReturnDeliveryByIdAndDate } from "../../../../generated/schemas";
import { mapDeliveryFindClient } from "../../../../share/FormatReturn/map";


export class FindDeliveryByIdClientUseCase {
    async execute(id_client: string): Promise<ReturnDeliveryByIdAndDate[]>{
        const user = await prisma.clients.findUnique({
            where: {
                id: id_client
            }
        })
        if(user.id != id_client){
            throw new Error("You don't have access!");
        }
        const deliveries = await prisma.deliveries.findMany({
             where: { 
                id_client
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

// select: {
//     id: true,
//     client: true,
//     item_name: true,
//     id_deliveryman: true,
//     created_at: true,
//     end_at: true,
//     status: true,
// }