import { prisma } from "../../../../database/prismaClient";

interface IRequestStockProduct{
    product_name: string;
    quantity: number;
}

export class ValidationStockUseCase {
    async executeBuy({product_name, quantity}: IRequestStockProduct) {
        const alreadyExistProduct = await prisma.product.findFirst({
            where: {
                product_name: product_name
            }
        })

        if (!alreadyExistProduct) {
            throw new Error('Produto não encontrado!');
        }

        if (alreadyExistProduct.quantity_stock === 0) {
            throw new Error('Produto indisponivel!');
        }

        if(alreadyExistProduct.quantity_stock < quantity){
            throw new Error('Quantidade indisponivel!');
       }
    }

    async executeInfo(product_name: string){
        const product = await prisma.product.findFirst({
            where: {
                product_name: product_name
            }
        })

        if (!product) {
            throw new Error('Produto não encontrado!');
        }
        return product.quantity_stock
    }
}