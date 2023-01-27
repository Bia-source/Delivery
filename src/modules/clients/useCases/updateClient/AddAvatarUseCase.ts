import { prisma } from "../../../../database/prismaClient";

interface IRequestAddAvatar {
    id_client: string;
    avatar: string;
}

export class AddAvatarUseCase {
    async execute({id_client, avatar}: IRequestAddAvatar){
        const client = await prisma.clients.update({
            where: {
                id: id_client
            },
            data: {
                avatar: avatar
            },
            select: {
                id: true,
                username: true,
                email: true,
                avatar: true,
                adress: true
            }
        });

        return client;
    }
}