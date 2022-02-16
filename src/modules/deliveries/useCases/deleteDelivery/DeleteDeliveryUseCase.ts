import { prisma } from "../../../../database/prismaClient";


export class DeleteDeliveryUseCase {
    async execute(id_delivery: string, id_client: string){
        return await prisma.deliveries.delete({ where: { id: id_delivery}})
    }
}