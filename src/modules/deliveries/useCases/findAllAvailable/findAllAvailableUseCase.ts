import { prisma } from "../../../../database/prismaClient";
import { mapDelivery } from "../../../../share/FormatReturn/map";
import { FindByIdProductUseCase } from "../../../products/useCases/findByIdProduct/FindByIdProductUseCase";
import { FindProductByName } from "../../../products/useCases/findProductByName/findProductByNameUseCase";



export class FindAllAvailableUseCase {
    async execute(id_user: string) {
        const deliveriesClient = await prisma.deliveries.findMany({
            where: {
                end_at: null,
                id_deliveryman: null,
                id_client: id_user
            },
            select: {
                id: true,
                client: true,
                item_name: true,
                id_deliveryman: true,
                created_at: true,
                end_at: true,
                status: true,
            }
        });

        const deliveriesDeliveryman = await prisma.deliveries.findMany({
            where: {
                end_at: null,
                id_deliveryman: null
            },
            select: {
                id: true,
                client: true,
                item_name: true,
                id_deliveryman: true,
                created_at: true,
                end_at: true,
                status: true
            }
        });

        const getInfoProducts = await Promise.all(deliveriesDeliveryman.map(async (order, index) => {
            return await Promise.all(order.item_name.map(async (item, index) => {
                const getProductUseCase = new FindByIdProductUseCase();
                let produtos = await getProductUseCase.execute(item.id_product);
                return produtos;
            }));
        }))
       
        if (deliveriesClient.length === 0) {
            return mapDelivery(deliveriesDeliveryman, getInfoProducts[0]);
        }

        return mapDelivery(deliveriesClient, getInfoProducts[0])
        

    }
}

