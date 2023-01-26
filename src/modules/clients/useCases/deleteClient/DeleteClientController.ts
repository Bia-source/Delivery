import { Request, Response } from "express";
import { DeleteClientUseCase } from "./DeleteClientUseCase";

export class DeleteClientController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.body;
            const deleteClientUseCase = new DeleteClientUseCase();
            const client = await deleteClientUseCase.execute(id);
            return res.json({ client });
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}