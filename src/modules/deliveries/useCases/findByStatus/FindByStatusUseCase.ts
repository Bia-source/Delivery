import { Status } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";
import { mapDelivery } from "../../../../share/FormatReturn/map";


export class FindByStatusUseCase {
    async execute(status: Status){
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
       return mapDelivery(deliveries);
    }
}