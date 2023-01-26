import { Request, Response } from "express";
import { FindByStatusUseCase } from "./FindByStatusUseCase";


export class  FindByStatusController {
    async handle(req: Request, res: Response): Promise<Response>{
       try {
          const { status } = req.body;
          const findByStatusUseCase = new FindByStatusUseCase();
          const result = await findByStatusUseCase.execute(status);
          return res.json({ deliveries: result });
       } catch (error) {
           return res.json({ message: error.message });
       }
    }
}