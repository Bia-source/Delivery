import { prisma } from "../../../../database/prismaClient";
import { mapDelivery } from "../../../../share/FormatReturn/map";


export class FindAllAvailableUseCase {
    async execute(id_user: string) {
            const deliveriesClient = await prisma.deliveries.findMany({
                where: {
                    end_at: null,
                    id_deliveryman: null,
                    id_client: id_user
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

            const deliveriesDeliveryman = await prisma.deliveries.findMany({
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
            if(deliveriesClient.length === 0){
               return mapDelivery(deliveriesDeliveryman);
            }
            
            return  mapDelivery(deliveriesClient) 
       
        }
    }

