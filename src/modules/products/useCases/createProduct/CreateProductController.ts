import { Request, Response } from "express";

export class CreateProductController {
    async handle(req: Request, res: Response){
       try {
        const {value, product_category, product_name, quantity_stock,discount} = req.body;
       } catch (error) {
        
       }
    }
}