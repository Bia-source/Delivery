import { Request, Response } from "express";
import { FindByIdClientUseCase } from "./FindByIdClientUseCase";

export class FindByIdClientController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { id_client } = req.body;
            const findByIdClientUseCase = new FindByIdClientUseCase();
            const client = await findByIdClientUseCase.execute(id_client);
            return res.json({ client });
        } catch (error) {
            return res.json({ messsage: error.message })
        }
    }
}