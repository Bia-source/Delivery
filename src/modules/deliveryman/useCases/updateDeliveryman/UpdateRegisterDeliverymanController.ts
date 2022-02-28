import { Request, Response } from "express";
import { UpdateRegisterDeliverymanUseCase } from "./UpdateRegisterDeliverymanUseCase";

export class UpdateRegisterDeliverymanController {
    async handle(req: Request, res: Response){
       try {
           const { username, email } = req.body;
           const id_deliveryman = req.id;
           const updateDeliverymanUseCase = new UpdateRegisterDeliverymanUseCase();
           const deliveryman = await updateDeliverymanUseCase.execute({id_deliveryman, updateDeliveryman: {username,email}});
           return res.json({updateDeliveryman: deliveryman});
       } catch (error) {
           return res.json({ message: error.message });
       }
    }
}