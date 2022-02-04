import { prisma } from '../../../../database/prismaClient';
import { hash } from "bcrypt"

interface IRequestClient {
    username: string;
    password: string;
}

export class CreateClientUseCase {
    async execute({username, password}: IRequestClient) {
        const clienExist = await prisma.clients.findFirst({
            where: {
                username
           }
        })
        
        if(clienExist) {
            throw new Error('Cliente já existe');
        }

        const hashPassword = await hash(password, 10);
        const newClient = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
        });

        return newClient;
   }
} 
