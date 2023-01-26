import { Request, Response } from "express";
import { FindByIdProductUseCase } from "./FindByIdProductUseCase";

export class FindByIdProductController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { id_product } = req.body;
            const findByIdProductUseCase = new FindByIdProductUseCase();
            const result = await findByIdProductUseCase.execute(id_product);
            return res.json({ product: result });
        } catch (error) {
            return res.json({message: error.message})
        }
    }
}