import { Request, Response } from "express";
import { FindByCreatedUseCase } from "./FindByCreatedUseCase";


export class FindByCreatedController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { dateInitial, dateEnd } = req.body;
            const findByDate = new FindByCreatedUseCase();
            const result = await findByDate.execute( dateInitial, dateEnd);
            return res.json({ deliveries: result })
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}