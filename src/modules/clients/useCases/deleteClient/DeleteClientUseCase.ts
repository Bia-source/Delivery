import { prisma } from "../../../../database/prismaClient";

export class DeleteClientUseCase {
    async execute(id_client: string){
        const client = await prisma.clients.delete({where: { id: id_client}});
        console.log(client);
        return client;
    }
}