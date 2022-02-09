import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";


export class AuthenticateDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { username, password } = req.body;
            const authenticateDeliveryman = new AuthenticateDeliverymanUseCase();
            const result = await authenticateDeliveryman.execute({ username, password });
            return res.json(result);
        } catch (error) {
            return res.json({ message: error.message });
        }
   }
}

