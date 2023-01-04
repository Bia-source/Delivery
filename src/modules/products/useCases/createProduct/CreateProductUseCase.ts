import { prisma } from "../../../../database/prismaClient";

interface IRequestProduct {
    value: number;
    product_name: string;
    product_category: string;
    quantity_stock: number;
    discount?: number;
}

export class CreateProductUseCase {
    async execute({value, product_category, product_name, quantity_stock,discount}: IRequestProduct){
       const alreadyExistProduct = await prisma.product.findFirst({
        where: {
            product_name: {
                equals: product_name
            }
        }
       })
       
       if(alreadyExistProduct) {
        throw new Error('Produto já existe');
    }
        const newProduct = await prisma.product.create({
        data: {
            value,
            product_name,
            product_category,
            quantity_stock,
            discount
        }
       })
       console.log(newProduct);
       return newProduct;
    }
}