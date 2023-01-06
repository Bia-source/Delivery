import { Request, Response } from "express";
import { ValidationStockUseCase } from "../../../products/useCases/validationStock/ValidationStockUseCase";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";


export class CreateDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
       try {
           const { item } = req.body;
           const id_client = req.id;
           const username = req.username;
           const createDelivery = new CreateDeliveryUseCase();
           const validationStockProductUseCase = new ValidationStockUseCase();
           await validationStockProductUseCase.executeBuy({product_name: item.name, quantity: item.quantity});
           const result = await createDelivery.execute({ item: {name: item.name, quantity: item.quantity}, id_client, username});
           return res.status(201).json({ delivery: result });
       } catch (error) {
           return res.json({ message: error.message });
       }
    }
}