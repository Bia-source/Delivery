import { prisma } from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken"

interface IRequestAuthenticate{
    username: string;
    password: string;
}

export class AuthenticateClientUseCase{
    async execute({username, password}: IRequestAuthenticate) {
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        });
        
        if(!client) {
            throw new Error("Username or password invalid")
        }

        const passwordMatch = await compare(password,client.password)
        if(!passwordMatch) {
            throw new Error("Username or password invalid")
        }

        const token = sign({username}, `${process.env.TOKEN_KEY}`, {
            subject: client.id,
            expiresIn: "1d"
        });
        return {client:client, token: token}
   }
}

