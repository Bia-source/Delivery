import { prisma } from "../../../../database/prismaClient";
import { deliveryAlreadyExist } from "../../../../share/validators";
import { IRequestUpdateDelivery } from "../../../../share/interfaces";
import { MessageStatusDelivery, TitleStatusDelivery } from "../../../../share/sendEmail/messages";
import { sendMail } from "../../../../share/sendEmail/SendEmail";

export class UpdateDeliverymanUseCase {
    async execute({id_delivery, id_deliveryman, username, email}: IRequestUpdateDelivery){
        try {
            const delivery = await prisma.deliveries.update({
                where:{
                    id: id_delivery
                },
                data: {
                    id_deliveryman,
                    status: "TRANSITO"
                },
                include: {
                    client: {
                        select: {
                            username: true,
                            adress: true,
                            email: true
                        }
                    },
                    item_name: {
                        include: {
                            produto: true
                        }
                    }                 
                }
            })
            // sendMail({
            //     email,
            //     username,
            //     messageText: `seu pedido código ${id_delivery} ${MessageStatusDelivery.TRANSITO}`, 
            //     titleEmail: TitleStatusDelivery.STATUS  
            // })
            return {data: delivery};
        } catch (error) {
            deliveryAlreadyExist();
        }
    }
}