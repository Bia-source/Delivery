import { Request, Response } from "express";
import { FindByIdClientUseCase } from "./FindByIdClientUseCase";


export class FindByIdClientController {
   async handle(req: Request, res: Response): Promise<Response>{
       try {
          const id  = req.id;
          const findDeliveriesUserUseCase = new FindByIdClientUseCase();
          const findDeliveries = await findDeliveriesUserUseCase.execute(id);
          return res.json({deliveries: findDeliveries});
       } catch (error) {
           return res.json({ message: error.message })
       }
   }
}
