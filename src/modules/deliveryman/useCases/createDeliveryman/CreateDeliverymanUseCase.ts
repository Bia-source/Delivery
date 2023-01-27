import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";
import { MessageNewUser, TitleNewUser } from "../../../../share/sendEmail/messages";
import { sendMail } from "../../../../share/sendEmail/SendEmail";

interface IRequestDeliveryman {
    username: string;
    password: string;
    email: string;
}

export class CreateDeliverymanUseCase {
    async execute({username, password, email}: IRequestDeliveryman): Promise<any> {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    equals: username
                }
            }
        });

        if(deliveryman) {
            throw new Error("Username already exists!");
        }

        const hashPassword = await hash(password, 10);
        const clientDeliveryman = await prisma.deliveryman.create({
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
        //sendMail({email, username, messageText: MessageNewUser.DELIVERYMAN_USER, titleEmail: TitleNewUser.DELIVERYMAN_USER});

        return clientDeliveryman;
    }
}
