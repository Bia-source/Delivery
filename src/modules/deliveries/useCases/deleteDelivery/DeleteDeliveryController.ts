import { Request, Response } from "express";
import { validationStatusDelivery } from "../../../../share/validators";
import { FindByIdDeliveryUseCase } from "../findByIdDelivery/FindByIdDeliveryUseCase";
import { DeleteDeliveryUseCase } from "./DeleteDeliveryUseCase";


export class DeleteDeliveryController {
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { id_delivery } = req.body;
            const deleteDelivery = new DeleteDeliveryUseCase();
            const result = await deleteDelivery.execute(id_delivery);
            console.log(result);
            return res.json({
                 message: "Delete Success",
                 delete: result
            });
        } catch (error) {
            return res.json({ message: error.message });
        }
    }
}