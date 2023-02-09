import { FindByCategoryProductsUseCase } from './findByCategoryProductsUseCase';
import { Request, Response } from "express";

export class FindByCategoryProductsController {
    async handle(req: Request, res: Response) {
        try {
            const { product_category, sort, nameSort, amountOfResults } = req.body;
            const findByCategoryUseCase = new FindByCategoryProductsUseCase();
            const products = await findByCategoryUseCase.execute({ product_category, sort, nameSort, amountOfResults });
            return res.json({ products: products });
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}