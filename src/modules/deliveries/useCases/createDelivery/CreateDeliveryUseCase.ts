import { prisma } from "../../../../database/prismaClient";
import { MessageStatusDelivery, TitleStatusDelivery } from "../../../../share/sendEmail/messages";
import { sendMail } from "../../../../share/sendEmail/SendEmail";
import { product } from "../../../products/routes";
import { FindProductByNameUseCase } from "../../../products/useCases/findProductByName/findProductByNameUseCase";
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
    // Exclude keys from user
    exclude(campo, keys): Omit<any, any> {
        for (let key of keys) {
            delete campo[key]
        }
        return campo
    }

    async execute({ item, id_client, username }: IRequestDelivery | any) {
        try {
            let produtos = [item];

            const validationStockProductUseCase = new ValidationStockUseCase();
            let error;
            for (let i = 0; i < produtos.length; i++) {
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

            // // pegando produto
            const getProductUseCase = new FindProductByNameUseCase();

            let getProduct = []
            for (let i = 0; i < produtos[0].length; i++) {
                getProduct.push(await getProductUseCase.execute(item[i].name));

            }

            //console.log(getProduct)


            // // inserindo produtos no pedido/order
            const insertProduct = await Promise.all(getProduct.map(async (product, index) => {
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
                    include: {
                        delivery: {
                            select: {
                                id: true,
                                id_client: true,
                                id_deliveryman: true,
                                client: true,
                                deliveryman: true,
                                item_name: true,
                                created_at: true,
                                end_at: true,
                                status: true
                            }
                        },
                        produto: {
                            select: {
                                id: true,
                                product_category: true,
                                product_name: true,
                                discount: true,
                                value: true
                            }
                        }
                    }

                });
                const teste = Object.assign(returnProducts, {
                    delivery: {
                        id: returnProducts.delivery.id,
                        client: {
                            username: returnProducts.delivery.client.username,
                            email: returnProducts.delivery.client.email,
                            adress: returnProducts.delivery.client.adress
                        },
                        created_at: returnProducts.delivery.created_at,
                        end_at: returnProducts.delivery.end_at,
                        status: returnProducts.delivery.status,
                        deliveryman: {
                           username: returnProducts.delivery.deliveryman ? returnProducts.delivery.deliveryman.username : null
                        },
                        item_name: {
                            produto: {
                                id: returnProducts.produto.id,
                                product_category: returnProducts.produto.product_category,
                                product_name: returnProducts.produto.product_name,
                                value: returnProducts.produto.value,
                                discount: returnProducts.produto.discount,
                            }
                        }
                    }

                })
                console.log(teste)
                return returnProducts;
            }))

            // buscando pedido para retornar
            const getDelivery = new FindByIdDeliveryUseCase();
            // atualizando quantidade no estoque
            const updateProductUseCase = new UpdateProductUseCase();
            if (delivery) {
                for (let i = 0; i < produtos.length; i++) {
                    await updateProductUseCase.execute({ buy: true, product_info: { id: getProduct[i].id, quantity_stock: getProduct[i].quantity_stock - item[i].quantity } })
                }

            }

            // // sendMail({
            // //      email,
            // //      username,
            // //      messageText: `seu pedido código ${delivery.id} ${MessageStatusDelivery.ARGUARDANDO} `, 
            // //      titleEmail: TitleStatusDelivery.STATUS  
            // // })
            // console.log(insertProduct);
            return { user: username, order: insertProduct };
        } catch (error) {
            return error.message;
        }

    }
}