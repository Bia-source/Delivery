import { prisma } from "../../../../database/prismaClient";
import { mapDelivery } from "../../../../share/FormatReturn/map";
import { FindByIdProductUseCase } from "../../../products/useCases/findByIdProduct/FindByIdProductUseCase";

interface IPropsGetProducts {
    id: string;
    id_product: string;
    id_delivery: string;
    quantity: number;
}

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

        if (deliveriesClient.length === 0) {
            return await mapDelivery(deliveriesDeliveryman);

        }

        return mapDelivery(deliveriesClient);


    }

    async getInfoProducts(itens: [IPropsGetProducts]) {
        const getProductUseCase = new FindByIdProductUseCase();
        return await Promise.all(itens.map(async (item) => {
            let produtos = await getProductUseCase.execute(item.id_product)
            return produtos;
        }))
    }


}