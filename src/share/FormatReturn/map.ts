import { FindAllAvailableUseCase } from "../../modules/deliveries/useCases/findAllAvailable/FindAllAvailableUseCase";

export async function mapDelivery(deliveries: any[]) {
    const deliveriesFormat = await Promise.all(deliveries.map(async (client) => {
        let itens = client.item_name;
        const useCaseProduct = new FindAllAvailableUseCase();
        const name_itens = await useCaseProduct.getInfoProducts(client.item_name);
        for (let i = 0; i < name_itens.length; i++) {
            Object.assign(itens[i], {
                productInfo: {
                    name: name_itens[i].product_name,
                    category: name_itens[i].product_category,
                    value: name_itens[i].value,
                    discount: name_itens[i].discount
                }
            })
        }

        return {
            userInfo: {
                id_client: client.client.id,
                username: client.client.username
            },
            deliveryInfo: {
                id: client.id,
                itens: client.item_name,
                id_deliveryman: client.id_deliveryman,
                created_at: client.created_at,
                end_at: client.end_at,
                status: client.status,
            }
        }
    }))

    return deliveriesFormat;
}

export async function mapDeliveryFindClient(deliveries: any[]) {
    const deliveriesFormat = await Promise.all(deliveries.map(async (client) => {
        let itens = client.item_name;
        const useCaseProduct = new FindAllAvailableUseCase();
        const name_itens = await useCaseProduct.getInfoProducts(client.item_name);
        for (let i = 0; i < name_itens.length; i++) {
            Object.assign(itens[i], {
                productInfo: {
                    name: name_itens[i].product_name,
                    category: name_itens[i].product_category,
                    value: name_itens[i].value,
                    discount: name_itens[i].discount
                }
            })
        }
        
        return {
            delivery: {
                id: client.id,
                item_name: client.item_name,
                id_deliveryman: client.id_deliveryman,
                created_at: client.created_at,
                end_at: client.end_at,
                status: client.status,
            }
        }
    }))
    return deliveriesFormat;
}