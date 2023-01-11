import { prisma } from "../../../../database/prismaClient";
import { MessageStatusDelivery, TitleStatusDelivery } from "../../../../share/sendEmail/messages";
import { sendMail } from "../../../../share/sendEmail/SendEmail";
import { product } from "../../../products/routes";
import { FindProductByName } from "../../../products/useCases/findProductByName/findProductByNameUseCase";
import { UpdateProductUseCase } from "../../../products/useCases/updateProduct/UpdateProductUseCase";
import { ValidationStockUseCase } from "../../../products/useCases/validationStock/ValidationStockUseCase";
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
            let produtos = [item];

            const validationStockProductUseCase = new ValidationStockUseCase();
            let error;
            for(let i=0; i < produtos.length; i++){
                error = await validationStockProductUseCase.executeBuy([{ name: item[i].name, quantity: item[i].quantity }]);
            }
         
            const alreadyError = error.find(erro => erro.messageError != undefined)
            if (alreadyError) {
                error.map((erro, index) => {
                    throw new Error(`Produto: ${error[index].product}, ${error[index].messageError}`);
                })
            }

            //criando pedido/order
            const delivery = await prisma.deliveries.create({
                data: {
                    id_client
                }
            })

            // pegando produto
            const getProductUseCase = new FindProductByName();
            
            let getProduct = []
            for(let i = 0; i <= produtos.length; i++){
                getProduct.push(await getProductUseCase.execute(item[i].name));
            }

            // inserindo produtos no pedido/order
            const insertProduct = await Promise.all(getProduct.map(async(product, index)=> {
                const returnProducts = await prisma.itens_Info_Product.create({
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
                        quantity: item[index].quantity
                    },
                    select: {
                        produto: true,
                        delivery: true,
                        quantity: true
                    }
                })
                return returnProducts
            }))

            // buscando pedido para retornar
            const getDelivery = new FindByIdDeliveryUseCase();
            // atualizando quantidade no estoque
            const updateProductUseCase = new UpdateProductUseCase();
            if (delivery) {
                for(let i = 0; i <= produtos.length; i++){
                    await updateProductUseCase.execute({ buy: true, product_info: { id: getProduct[i].id, quantity_stock: getProduct[i].quantity_stock - item[i].quantity } })
                }
                
            }

            // sendMail({
            //      email,
            //      username,
            //      messageText: `seu pedido código ${delivery.id} ${MessageStatusDelivery.ARGUARDANDO} `, 
            //      titleEmail: TitleStatusDelivery.STATUS  
            // })
            return { user: username, order: insertProduct };
        } catch (error) {
            return error.message;
        }

    }
}