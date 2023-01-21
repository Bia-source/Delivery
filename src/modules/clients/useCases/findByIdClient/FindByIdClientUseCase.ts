import { prisma } from "../../../../database/prismaClient";

export class FindByIdClientUseCase {
    async execute(id_client: string){
        return await prisma.clients.findFirst({where: { id: id_client}})
    }
}