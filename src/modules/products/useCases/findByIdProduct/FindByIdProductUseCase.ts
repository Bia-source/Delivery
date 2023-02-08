import { Product } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient";

export class FindByIdProductUseCase {
    async execute(id_product: string): Promise<Product>{
         return await prisma.product.findFirst({where: {id: id_product}})
    }
}