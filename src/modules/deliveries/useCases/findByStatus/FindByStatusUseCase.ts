import { prisma } from "../../../../database/prismaClient";
import { Status } from "../../../../generated/schemas";
import { mapDelivery } from "../../../../share/FormatReturn/map";


export class FindByStatusUseCase {
    async execute(status: any){
    
       const deliveries = await prisma.deliveries.findMany({
           where: {
               status: status
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
       console.log(deliveries.find(item=> item.item_name));
       return mapDelivery(deliveries);
    }
}