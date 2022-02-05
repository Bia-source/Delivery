import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../database/prismaClient";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateClient(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(401).json({
            message: "Token missing!"
        });
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, `${process.env.TOKEN_KEY}`) as IPayload;
        const client = await prisma.clients.findFirst({
            where: {
                id: sub
            }
        })
        req.id = sub;
        req.username = client.username;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token!"
        });
    }
}