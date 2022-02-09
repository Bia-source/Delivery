import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";
import { IRequestCreate } from "../../../../share/interfaces";
import { passwordInvalid, userAlreadyExists } from "../../../../share/validators";


export class AuthenticateDeliverymanUseCase {
    async execute({username, password}: IRequestCreate) {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        });

        userAlreadyExists(deliveryman);
        if(deliveryman) {
            const passwordMatch = await compare(password, deliveryman?.password);
            passwordInvalid(passwordMatch);
        }
        
        const token = sign({ username }, `${process.env.TOKEN_KEY}`, {
            subject: deliveryman?.id,
            expiresIn: "1d"
        });
        
        return {deliveryman: deliveryman, token: token}

    }
}