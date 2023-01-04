import { Request, Response } from "express";
import { ValidationStockUseCase } from "../../../products/useCases/validationStock/ValidationStockUseCase";
import { CreateDeliverymanUseCase } from "./CreateDeliveryUseCase";


export class CreateDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
       try {
           const { item_name, quantity } = req.body;
           const id_client = req.id;
           const username = req.username;
           const email = req.email;
           const createDelivery = new CreateDeliverymanUseCase();
           const validationStockProductUseCase = new ValidationStockUseCase();
           await validationStockProductUseCase.executeBuy({product_name: item_name, quantity});
           const result = await createDelivery.execute({ item_name, quantity, id_client, username, email });
           return res.status(201).json({ delivery: result });
       } catch (error) {
           return res.json({ message: error.message });
       }
    }
}