import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientController {
    async handle(req: Request, res: Response) {
            const { username, password } = req.body; 
            const authenticateClient = new AuthenticateClientUseCase();
            const auth = await authenticateClient.execute({ username, password });
            return res.json(auth);
    }
}