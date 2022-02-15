import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";


export class FindAllAvailableController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const deliveriesAllUseCase = new FindAllAvailableUseCase();
            const result = await deliveriesAllUseCase.execute();
            return res.json({ deliveries: result });
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}