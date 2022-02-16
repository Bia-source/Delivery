import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "../updateDeliveryman/UpdateDeliverymanUseCase";
import { UpdateEndDeliveryUseCase } from "./UpdateEndDeliveryUseCase";


export class UpdateEndDeliveryController{
    async handle(req: Request, res: Response){
        try {
            const { id_delivery } = req.body;
            const id_deliveryman = req.id;
            const username = req.username;
            const email = req.email;
            const updateEndUseCase = new UpdateEndDeliveryUseCase()
            const delivery = await updateEndUseCase.execute({id_delivery, id_deliveryman, username, email });
            return res.json({delivery: delivery});
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}