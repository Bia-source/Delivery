import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

export class CreateProductController {
    async handle(req: Request, res: Response): Promise<Response>{
       try {
        const {value, product_category, product_name, quantity_stock,discount} = req.body;
        const status_adm = req.adm;
        const createProductUseCase = new CreateProductUseCase();
        const newProduct = await createProductUseCase.execute({product_info: {value, product_category, product_name, quantity_stock,discount}, status_adm});
        return res.status(201).json({product: newProduct})
       } catch (error) {
        return res.json({ message: error.message });
       }
    }
}