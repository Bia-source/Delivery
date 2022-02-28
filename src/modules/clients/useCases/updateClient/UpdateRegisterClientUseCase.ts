import { prisma } from "../../../../database/prismaClient";

interface IRequestUpdateRegisterClient {
    id_client: string,
    updateClient: {
        username?: string,
        email?: string
    }
}

export class UpdateRegisterClientUseCase {
    async execute({id_client, updateClient}: IRequestUpdateRegisterClient){
        const client = await prisma.clients.update({
            where: {
                id: id_client
            },
            data: {
                username: updateClient?.username,
                email: updateClient?.email
            },
            select: {
                id: true,
                username: true,
                email: true
            }
        });

        return client;
    }
}