import { Request, Response } from "express";
import { ValidationStockUseCase } from "../../../products/useCases/validationStock/ValidationStockUseCase";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";


export class CreateDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
       try {
           const { item_name } = req.body;
           const id_client = req.id;
           const username = req.username;
           const createDelivery = new CreateDeliveryUseCase();
           const result = await createDelivery.execute({ item: item_name, id_client, username });
           return res.status(201).json({ delivery: result });
       } catch (error) {
           return res.status(400).json({ message: error.message });
       }
    }
}