import { Status } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";


export class FindByStatusUseCase {
    async execute(status: Status){
       const deliveries = await prisma.deliveries.findMany({
           where: {
               status: status
           }
       });
       return deliveries;
    }
}