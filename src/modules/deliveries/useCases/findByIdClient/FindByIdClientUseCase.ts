import { prisma } from "../../../../database/prismaClient";
import { mapDelivery } from "../../../../share/FormatReturn/map";


export class FindByIdClientUseCase {
    async execute(id_client: string){
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