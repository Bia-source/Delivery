import { NextFunction, Request, Response } from "express";
import { validationFields } from "../share/validators";

export async function ensureValidationFields(req: Request, res: Response, next: NextFunction){
    const { username, password, email } = req.body;
    await validationFields({username, password, email});
    next();
}