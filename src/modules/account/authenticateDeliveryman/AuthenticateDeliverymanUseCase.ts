import { prisma } from "../../../database/prismaClient";
import { IRequestCreate } from "../../../share/interfaces";
import { userAlreadyExists } from "../../../share/validators";


export class AuthenticateDeliverymanUseCase {
    async execute({username, password}: IRequestCreate) {
        const deliverymanAlreadyExists = await prisma.deliveryman.findFirst({
            where: {
                username: {
                    mode: "insensitive"
                }
            }
        });

        userAlreadyExists(deliverymanAlreadyExists);
        
    }
}