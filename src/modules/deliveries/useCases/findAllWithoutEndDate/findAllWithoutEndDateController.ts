import { Request, Response } from "express";
import { FindAllWithoutEndDateUseCase } from "./findAllWithoutEndDateUseCase";


export class FindAllWithoutEndDateController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const deliveriesAllUseCase = new FindAllWithoutEndDateUseCase();
            const result = await deliveriesAllUseCase.execute();
            return res.json({ deliveries: result });
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}