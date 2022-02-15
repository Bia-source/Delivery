import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";


export class UpdateDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { id_delivery } = req.body;
            const id_deliveryman = req.id;
            const updateDeliveryUseCase = new UpdateDeliverymanUseCase();
            const result = await updateDeliveryUseCase.execute({id_delivery, id_deliveryman});
            return res.json({ delivery: result});
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}