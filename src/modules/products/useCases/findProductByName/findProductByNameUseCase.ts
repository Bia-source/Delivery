import { Product } from './../../../../generated/schemas';
import { prisma } from "../../../../database/prismaClient";

export class FindProductByNameUseCase{
    async execute(product_name: string): Promise<Product>{
       return await prisma.product.findFirst({where:{ product_name: product_name}})
    }
}