import { Request, Response } from "express";
import { FindProductByNameUseCase } from "./findProductByNameUseCase";

export class FindProductByNameController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { product_name } = req.body;
            const findProductByNameUseCase = new FindProductByNameUseCase();
            const result = await findProductByNameUseCase.execute(product_name);
            return res.json({ product: result });
        } catch (error) {
            return res.json({message: error.message})
        }
    }
}