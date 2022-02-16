import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
    async handle(req: Request, res: Response) {
        try {
            const { username, password, email } = req.body;
            const createClientUseCase = new CreateClientUseCase();
            const result = await createClientUseCase.execute({ username, password, email });
            return res.json({client: result});
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}