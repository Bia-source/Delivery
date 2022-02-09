import { prisma } from "../../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"
import { IRequestCreate } from "../../../../share/interfaces";
import { passwordInvalid, userAlreadyExists } from "../../../../share/validators";

export class AuthenticateClientUseCase{
    async execute({username, password}: IRequestCreate) {
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        });
        userAlreadyExists(client);

        const passwordMatch = await compare(password, client.password)
        passwordInvalid(passwordMatch)
        
        const token = sign({username}, `${process.env.TOKEN_KEY}`, {
            subject: client.id,
            expiresIn: "1d"
        });
        return {client:client, token: token}
   }
}

