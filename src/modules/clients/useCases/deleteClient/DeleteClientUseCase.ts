import { prisma } from "../../../../database/prismaClient";

export class DeleteClientUseCase {
    async execute(id_client: string) {
        try {
            await prisma.deliveries.deleteMany({ where: { id_client: id_client } })
            const client = await prisma.clients.delete({ where: { id: id_client } });
            return client;
        } catch (error) {
             return error;
        }
    }
}