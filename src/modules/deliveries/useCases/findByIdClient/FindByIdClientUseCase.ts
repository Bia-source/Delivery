import { prisma } from "../../../../database/prismaClient";


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
                }
            });
            
           
        return deliveries;
    }
}