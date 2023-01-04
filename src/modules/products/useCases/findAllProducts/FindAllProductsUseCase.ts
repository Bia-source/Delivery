import { prisma } from "../../../../database/prismaClient";


export class FindAllProductsUseCase{
    async execute(){
       const products = await prisma.product.findMany();
       console.log(products);
       return products;
    }
}