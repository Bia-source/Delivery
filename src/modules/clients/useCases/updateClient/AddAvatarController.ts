import { Request, Response } from "express";
import { AddAvatarUseCase } from "./addAvatarUseCase";

export class AddAvatarController{
    async handle(req: Request, res: Response): Promise<Response>{
       try {
           const { originalname: name, size } = req.file;
           const id_client = req.id;
           const addAvatarUseCase = new AddAvatarUseCase();
           console.log(name, size)
           const client = await addAvatarUseCase.execute({id_client, avatar: name});
           return res.json({client: client});
       } catch (error) {
           return res.json({ message: error.message });
       }
    }
}