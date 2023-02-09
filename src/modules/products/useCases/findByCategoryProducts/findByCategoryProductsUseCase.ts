
import { prisma } from "../../../../database/prismaClient";

interface IRequestFindByCategory {
    product_category: string;
    sort: TypeSort;
    nameSort: TypeNameSort;
    amountOfResults: number;
}
enum TypeSort {
    asc = "asc",
    desc = "desc"
}

enum TypeNameSort {
    value = "value",
    name = "product_name",
    discount = "discount",
    category = "product_category"
}

export class FindByCategoryProductsUseCase{
    async execute({ product_category, sort, nameSort, amountOfResults = 20 }: IRequestFindByCategory){
        return await prisma.product.findMany({
            where: {
                product_category: product_category
            },
            orderBy: {
               value: sort
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
        });
    }
}