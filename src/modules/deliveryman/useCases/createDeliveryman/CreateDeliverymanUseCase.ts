import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface IRequestDeliveryman {
    username: string;
    password: string;
}

export class CreateDeliverymanUseCase {
    async execute({username, password}: IRequestDeliveryman): Promise<any> {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        });

        if(deliveryman) {
            throw new Error("Username already exists!");
        }

        const hashPassword = await hash(password, 10);
        const clientDeliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword
            }
        });

        return clientDeliveryman;
    }
}
