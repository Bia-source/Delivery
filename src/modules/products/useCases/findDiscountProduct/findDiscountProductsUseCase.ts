import { prisma } from "../../../../database/prismaClient";

export class FindDiscountProductsUseCase{
    async allProducts(amountOfResults: number = 20){
        return await prisma.product.findMany({
            where: {
                NOT: {
                   discount: 0
                }
            },
            orderBy: {
                discount: "desc"
            },
            take: amountOfResults,
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

    async productsNameAll(amountOfResults: number = 20, product_name: string){
        return await prisma.product.findMany({
            where: {
                OR: {
                    product_name: {
                        startsWith: `${product_name}`
                    },
                },
                NOT: {
                   discount: 0
                },
            },
            orderBy: {
                discount: "desc"
            },
            take: amountOfResults,
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