import { prisma } from '../../../../database/prismaClient';
import { hash } from "bcrypt"
import { sendMail } from '../../../../share/sendEmail/SendEmail';

interface IRequestClient {
    username: string;
    password: string;
    email?: string;
}

export class CreateClientUseCase {
    async execute({username, password, email}: IRequestClient) {
        const clienExist = await prisma.clients.findFirst({
            where: {
                username :{
                    equals: username
                }
           }
        })
        
        if(clienExist) {
            throw new Error('Cliente já existe');
        }

        const hashPassword = await hash(password, 10);
        const newClient = await prisma.clients.create({
            data: {
                username,
                password: hashPassword,
                email
            },
            select:{
                id: true,
                username: true
            }
        });

        sendMail({email, username, type_user: "CLIENT"});
        return newClient;
   }
} 
