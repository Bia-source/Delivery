import { prisma } from "../../../../database/prismaClient";
import { ReturnInsertDeliverymanInOrder } from "../../../../generated/schemas";
import { IRequestUpdateDelivery } from "../../../../share/interfaces";
import { MessageStatusDelivery, TitleStatusDelivery } from "../../../../share/sendEmail/messages";
import { sendMail } from "../../../../share/sendEmail/SendEmail";
import { deliveryAlreadyExist } from "../../../../share/validators";

export class UpdateEndDeliveryUseCase {
    async execute({id_delivery, id_deliveryman, username, email}: IRequestUpdateDelivery): Promise<ReturnInsertDeliverymanInOrder>{
        try {
            const delivery = await prisma.deliveries.update({
                where: {
                    id: id_delivery
                },
                data: {
                    end_at: new Date(),
                    status: "ENTREGUE"
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
            });
            // sendMail({
            //     email,
            //     username,
            //     messageText: `seu pedido código ${id_delivery} ${MessageStatusDelivery.ENTREGUE}`, 
            //     titleEmail: TitleStatusDelivery.STATUS  
            // })
            return {data: delivery};
        } catch (error) {
            deliveryAlreadyExist();
        }
    }
}