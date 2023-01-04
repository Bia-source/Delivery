import { prisma } from "../../../../database/prismaClient";
import { MessageStatusDelivery, TitleStatusDelivery } from "../../../../share/sendEmail/messages";
import { sendMail } from "../../../../share/sendEmail/SendEmail";
import { FindProductByName } from "../../../products/useCases/findProductByName/findProductByNameUseCase";
import { UpdateProductUseCase } from "../../../products/useCases/updateProduct/UpdateProductUseCase";

interface IRequestDelivery {
    item_name: string;
    id_client: string;
    username: string; 
    email: string;
    quantity: number;
}

export class CreateDeliverymanUseCase {
    async execute({item_name, quantity, id_client, username, email}: IRequestDelivery) {
        try {
            const delivery = await prisma.deliveries.create({
                data: {
                    item_name,
                    id_client
                }
            });
            const getProductUseCase = new FindProductByName();
            const updateProductUseCase = new UpdateProductUseCase();
            const product = await getProductUseCase.execute(item_name);
            if(delivery){
                await updateProductUseCase.execute({buy: true, product_info: { id: product.id, quantity_stock: product.quantity_stock - quantity}})
            }
            // sendMail({
            //      email,
            //      username,
            //      messageText: `seu pedido código ${delivery.id} ${MessageStatusDelivery.ARGUARDANDO} `, 
            //      titleEmail: TitleStatusDelivery.STATUS  
            // })
            return {user: username, data:delivery};
        } catch (error) {
            
        }
        
    }
}