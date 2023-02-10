import { Product, ReturnProducts } from './../../../../generated/schemas';
import { prisma } from "../../../../database/prismaClient";

export class FindProductByNameUseCase {
    async execute(product_name: string): Promise<ReturnProducts[]> {
        return await prisma.product.findMany({
            where: {
                OR: {
                    product_name: {
                        startsWith: `${product_name}`
                    },
                }
            },
            select: {
                id: true,
                product_name: true,
                product_category: true,
                value: true,
                discount: true,
                quantity_stock: true
            }
        })
    }
}