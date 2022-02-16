import { prisma } from "../../../../database/prismaClient";
import { MessageStatusDelivery, TitleStatusDelivery } from "../../../../share/sendEmail/messages";
import { sendMail } from "../../../../share/sendEmail/SendEmail";

interface IRequestDelivery {
    item_name: string;
    id_client: string;
    username: string; 
    email: string;
}

export class CreateDeliverymanUseCase {
    async execute({item_name, id_client, username, email}: IRequestDelivery) {
        try {
            const delivery = await prisma.deliveries.create({
                data: {
                    item_name,
                    id_client
                }
            });
            sendMail({
                 email,
                 username,
                 messageText: MessageStatusDelivery.ARGUARDANDO, 
                 titleEmail: TitleStatusDelivery.STATUS  
            })
            return delivery;
        } catch (error) {
            
        }
        
    }
}