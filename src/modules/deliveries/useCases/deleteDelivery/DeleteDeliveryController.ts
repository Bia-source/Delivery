import { Request, Response } from "express";
import { DeleteDeliveryUseCase } from "./DeleteDeliveryUseCase";


export class DeleteDeliveryController {
    async handle(req: Request, res: Response){
        try {
            const { id_delivery } = req.params;
            const id_client = req.id;
            const deleteDelivery = new DeleteDeliveryUseCase();
            const result = await deleteDelivery.execute(id_delivery, id_client);
            return res.json({
                 message: "Delete Success",
                 delete: result
            });
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}