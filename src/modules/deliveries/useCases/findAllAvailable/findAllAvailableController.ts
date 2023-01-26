import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./findAllAvailableUseCase";



export class FindAllAvailableController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const id_user = req.id;
            const deliveriesAllUseCase = new FindAllAvailableUseCase();
            const result = await deliveriesAllUseCase.execute(id_user);
            return res.json({ deliveries: result });
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}