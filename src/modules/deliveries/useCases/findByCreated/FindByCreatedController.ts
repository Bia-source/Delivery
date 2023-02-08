import { Request, Response } from "express";
import { FindByCreatedUseCase } from "./FindByCreatedUseCase";


export class FindByCreatedController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { findDateInitial, findDateEnd } = req.body;
            const findByDate = new FindByCreatedUseCase();
            const result = await findByDate.execute(findDateInitial, findDateEnd);
            return res.json({ deliveries: result })
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}