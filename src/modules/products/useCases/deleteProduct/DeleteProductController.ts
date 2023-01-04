import { Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController {
    async handle(req: Request, res: Response) {
        try {
            const { id_product } = req.body;
            const status_adm = req.adm;
            const deleteProductUseCase = new DeleteProductUseCase();
            const productDelete = await deleteProductUseCase.execute({ status_adm, id_product });
            return res.json({ productDelete });
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}