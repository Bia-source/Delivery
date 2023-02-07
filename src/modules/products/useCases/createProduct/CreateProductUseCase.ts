import { prisma } from "../../../../database/prismaClient";

interface IRequestProduct {
    product_info: {
        value: number;
        product_name: string;
        product_category: string;
        quantity_stock: number;
        discount?: number;
    }
    status_adm: boolean;   
}

export class CreateProductUseCase {
    async execute({product_info, status_adm}: IRequestProduct){
       const alreadyExistProduct = await prisma.product.findFirst({
        where: {
            product_name: {
                equals: product_info.product_name
            }
        }
       })
       
       if(alreadyExistProduct) {
        throw new Error('Produto já existe');
       }

       if(status_adm === false) {
        throw new Error('Usuario sem permissão');
       }
       
        const newProduct = await prisma.product.create({
        data: {
            value: product_info.value,
            product_name: product_info.product_name,
            product_category: product_info.product_category,
            quantity_stock: product_info.quantity_stock,
            discount: product_info.discount
        }
       })
       return newProduct;
    }
}