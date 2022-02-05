import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliveryUseCase";


export class CreateDeliveryController {
    async handle(req: Request, res: Response): Promise<Response> {
       try {
            const { item_name, id_client } = req.body;
            const createDelivery = new CreateDeliverymanUseCase();
            const result = await createDelivery.execute({ item_name, id_client });
            return res.status(201).json({ delivery: result });
       } catch (error) {
           return res.json({ message: error.message });
       }
    }
}