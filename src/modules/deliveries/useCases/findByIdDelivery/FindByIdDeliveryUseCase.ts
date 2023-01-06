import { prisma } from "../../../../database/prismaClient";

export class FindByIdDeliveryUseCase{
    async execute(id_delivery: string){
        return await prisma.deliveries.findFirst({where: { id: id_delivery}})
    }
}