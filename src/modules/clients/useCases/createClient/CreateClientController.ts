import { Request, Response } from "express";
import { validationFields } from "../../../../share/validators";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { username, password, email, adm, adress } = req.body;
            const createClientUseCase = new CreateClientUseCase();
            const result = await createClientUseCase.execute({username, password, email, adm, adress});
            return res.json({client: result});
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}