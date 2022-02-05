import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";


export class CreateDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { username, password } = req.body;
            const deliverymanUseCase = new CreateDeliverymanUseCase;
            const deliveryman = await deliverymanUseCase.execute({ username, password });
            return res.status(201).json({ deliveryman: deliveryman });
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}

