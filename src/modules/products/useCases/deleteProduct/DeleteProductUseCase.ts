import { prisma } from "../../../../database/prismaClient";

interface IRequestDeleteProduct{
    status_adm: boolean;
    id_product: string;
}

export class DeleteProductUseCase{
    async execute({status_adm, id_product}: IRequestDeleteProduct){
        if (!status_adm) {
            throw new Error('Usuario não autorizado para fazer esta alteração');
        }

        let product = await prisma.product.findFirst({
            where: {
                id: id_product
            }
        })

        if(!product){
            throw new Error('Produto não encontrado!');
        }

        return prisma.product.delete({where: {id: id_product}})

    }
}