import { prisma } from "../../../../database/prismaClient";
import { Product } from "@prisma/client";

export class FindAllProductsUseCase{
    async execute(): Promise<Product[]>{
        const products = await prisma.product.findMany();
        return products;
    }
}