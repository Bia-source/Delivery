import { prisma } from "../../../../database/prismaClient";


export class FindByEndAtUseCase {
    async execute(findDateInitial: string, findDateEnd: string){
        const deliveries = await prisma.deliveries.findMany({ where:{
            end_at: {
                gte: new Date(findDateInitial.toString()),
                lt: new Date(findDateEnd.toString())
            }, 
            
        }})
        return deliveries;
    }
}