import { prisma } from "../../../../database/prismaClient";
import { MessageStatusDelivery, TitleStatusDelivery } from "../../../../share/sendEmail/messages";
import { sendMail } from "../../../../share/sendEmail/SendEmail";
import { product } from "../../../products/routes";
import { FindProductByName } from "../../../products/useCases/findProductByName/findProductByNameUseCase";
import { UpdateProductUseCase } from "../../../products/useCases/updateProduct/UpdateProductUseCase";
import { FindByIdDeliveryUseCase } from "../findByIdDelivery/FindByIdDeliveryUseCase";

interface IRequestDelivery {
    item: {
        name: string;
        quantity: number;
    };
    id_client: string;
    username: string;
}

export class CreateDeliveryUseCase {
    async execute({ item, id_client, username }: IRequestDelivery) {
        try {

            //criando pedido/order
            const delivery = await prisma.deliveries.create({
                data: {
                    id_client
                }
            })

            // pegando produto
            const getProductUseCase = new FindProductByName();
            const product = await getProductUseCase.execute(item.name);

            // inserindo produtos no pedido/order
            const insertProductDelivery = await prisma.itens_Info_Product.create({
                data: {
                    delivery: {
                        connect: {
                            id: delivery.id
                        }
                    },
                    produto: {
                        connect: {
                            id: product.id
                        }
                    },
                    quantity: item.quantity
                },
                select: {
                    id_product: true,
                    quantity: true
                }
            })

            // buscando pedido para retornar
            const getDelivery = new FindByIdDeliveryUseCase();
            const returnDelivery = await getDelivery.execute(delivery.id);

            // atualizando quantidade no estoque
            const updateProductUseCase = new UpdateProductUseCase();
            if (delivery) {
                await updateProductUseCase.execute({ buy: true, product_info: { id: product.id, quantity_stock: product.quantity_stock - item.quantity } })
            }

            // sendMail({
            //      email,
            //      username,
            //      messageText: `seu pedido código ${delivery.id} ${MessageStatusDelivery.ARGUARDANDO} `, 
            //      titleEmail: TitleStatusDelivery.STATUS  
            // })
            return { user: username, order: insertProductDelivery };
        } catch (error) {
           return error.message;
        }

    }
}