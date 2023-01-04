import { prisma } from "../../../../database/prismaClient";

interface IRequestUpdateProduct {
    status_adm?: boolean;
    product_info: {
        id: string;
        value?: number;
        product_name?: string;
        product_category?: string;
        quantity_stock?: number;
        discount?: number;
    }
    buy?: boolean;
}

export class UpdateProductUseCase {
    async execute({ status_adm, buy, product_info }: IRequestUpdateProduct) {
        if (!status_adm && !buy) {
            throw new Error('Usuario não autorizado para fazer esta alteração');
        }
        
        const product = await prisma.product.findFirst({
            where: {
                id: product_info.id
            }
        })
        if (!product) {
            throw new Error('Produto não encontrado');
        }

        if(status_adm || buy){
            let updateProduct = await prisma.product.update({
                where: {
                    id: product_info.id
                },
                data: {
                    value: product_info?.value,
                    product_name: product_info?.product_name,
                    product_category: product_info?.product_category,
                    quantity_stock: product_info?.quantity_stock,
                    discount: product_info?.discount
                }
            });
    
            return updateProduct;
        }
        
    }
}