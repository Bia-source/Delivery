import { prisma } from "../../../../database/prismaClient";


export interface ItemProps {
    name: string;
    quantity: number;
}

export class ValidationStockUseCase {
    async executeBuy(itens) {
       
        const result = await Promise.all(itens.map(async (product, index) => {
            const errors = await this.executeBuyOne(product.name, product.quantity)
            //.then(data => {return data})
            return {messageError: errors, product: product.name };
        }))
        return result;
    }


    async executeBuyOne(product_name, quantity) {
        const alreadyExistProduct = await prisma.product.findFirst({
            where: {
                product_name: product_name
            }
        })

        if (!alreadyExistProduct) {
            return 'Produto não encontrado!';
        }

        if (alreadyExistProduct.quantity_stock === 0) {
            return 'Produto indisponivel!';
        }

        if (alreadyExistProduct.quantity_stock < quantity) {
            return 'Quantidade indisponivel!';
        }
    }

    async executeInfo(product_name: string) {
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