import { Request, Response } from "express";
import { FindByEndAtUseCase } from "./FindByEndAtUseCase";


export class FindByEndAtController {
    async handle(req: Request, res: Response){
        try {
            const { dateInitial, dateEnd } = req.body;
            const findByDate = new FindByEndAtUseCase();
            const result = await findByDate.execute( dateInitial, dateEnd);
            return res.json({ deliveries: result })
        } catch (error) {
            return res.json({ message: error.message })
        }
    }
}