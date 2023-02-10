import { Request, Response } from "express";
import { FindDiscountProductsUseCase } from "./findDiscountProductsUseCase";

export class FindDiscountProductsController {
    async handleAllProducts(req: Request, res: Response) {
        try {
            const { amountOfResults } = req.body;
            const findDiscountAllProductsUseCase = new FindDiscountProductsUseCase();
            const products = await findDiscountAllProductsUseCase.allProducts(amountOfResults);
            return res.json({ products: products });
        } catch (error) {
            return res.json({ message: error.message });
        }
    }

    async handleNameProductsAll(req: Request, res: Response) {
        try {
            const { amountOfResults, product_name } = req.body;
            const findDiscounNameProductsAllUseCase = new FindDiscountProductsUseCase();
            const products = await findDiscounNameProductsAllUseCase.productsNameAll(amountOfResults, product_name);
            return res.json({ products: products });
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}