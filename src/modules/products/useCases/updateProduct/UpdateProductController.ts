import { Request, Response } from "express";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
    async handle(req: Request, res: Response) {
        try {
            const { id, value, product_category, product_name, quantity_stock, discount } = req.body;
            const status_adm = req.adm;
            const updateProductUseCase = new UpdateProductUseCase();
            const updateProduct = await updateProductUseCase.execute({ status_adm, product_info: { id, value, product_category, product_name, quantity_stock, discount } });
            return res.json({ updateProduct })
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}