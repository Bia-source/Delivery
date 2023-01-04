import { Request, Response } from "express";
import { FindAllProductsUseCase } from "./FindAllProductsUseCase";

export class FindAllProductsController{
    async handle(req: Request, res: Response){
        try {
            const findAllProductUseCase = new FindAllProductsUseCase()
            const products = await findAllProductUseCase.execute();
            return res.json({products});
        } catch (error) {
            return res.json({ message: error.message });
        }
       
    }
}