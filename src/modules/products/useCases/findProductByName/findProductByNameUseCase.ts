import { prisma } from "../../../../database/prismaClient";

export class FindProductByName{
    async execute(product_name: string){
       return await prisma.product.findFirst({where:{ product_name: product_name}})
    }
}