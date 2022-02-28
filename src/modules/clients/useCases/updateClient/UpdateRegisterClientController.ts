import { Request, Response } from "express";
import { UpdateRegisterClientUseCase } from "./UpdateRegisterClientUseCase";

export class UpdateRegisterClientController{
    async handle(req: Request, res: Response){
       try {
           const { username, email } = req.body;
           const id_client = req.id;
           const updateRegisterClientUseCase = new UpdateRegisterClientUseCase();
           const client = await updateRegisterClientUseCase.execute({id_client, updateClient: { username, email}});
           return res.json({ updateClient: client });
       } catch (error) {
           return res.json({ message: error.message });
       }
    }
}