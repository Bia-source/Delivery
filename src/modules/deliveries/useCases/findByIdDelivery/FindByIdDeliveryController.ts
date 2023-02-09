import { Request, Response } from "express";
import { FindByIdDeliveryUseCase } from "./FindByIdDeliveryUseCase";


export class FindDeliveryByIdController {
   async handle(req: Request, res: Response): Promise<Response>{
       try {
          const { id_delivery }  = req.body;
          const findDeliveriesUserUseCase = new FindByIdDeliveryUseCase();
          const findDeliveries = await findDeliveriesUserUseCase.execute(id_delivery);
          return res.json({deliveries: findDeliveries});
       } catch (error) {
           return res.json({ message: error.message })
       }
   }
}
