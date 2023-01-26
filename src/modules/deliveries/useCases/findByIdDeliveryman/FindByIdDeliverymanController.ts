import { Request, Response } from "express";
import { FindByIdDeliverymanUseCase } from "./FindByIdDeliverymanUseCase";


export class FindByIdDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const id = req.id;
            const findByIdDeliverymanUseCase = new FindByIdDeliverymanUseCase();
            const result = await findByIdDeliverymanUseCase.execute(id);
            return res.json({ deliveries: result });
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}