import { Request, Response } from "express";
import { FindDeliveryByIdClientUseCase } from "./FindDeliveryByIdClientUseCase";


export class FindDeliveryByIdClientController {
   async handle(req: Request, res: Response): Promise<Response>{
       try {
          const id  = req.id;
          const findDeliveriesUserUseCase = new FindDeliveryByIdClientUseCase();
          const findDeliveries = await findDeliveriesUserUseCase.execute(id);
          return res.json({deliveries: findDeliveries});
       } catch (error) {
           return res.json({ message: error.message })
       }
   }
}
