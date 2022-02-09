import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../database/prismaClient";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateUser(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const { type_user } = req.query;
    if(!authHeader) {
        return res.status(401).json({
            message: "Token missing!"
        });
    }

    const [, token] = authHeader.split(" ");
    let findUser = null;
    if(type_user === 'client' || !type_user) { findUser = prisma.clients; }
    if(type_user === 'deliveryman') { findUser = prisma.deliveryman; }

    try {
        const { sub } = verify(token, `${process.env.TOKEN_KEY}`) as IPayload;
        const user = await findUser.findFirst({
            where: {
                id: sub
            }
        })
        req.id = sub;
        req.username = user.username;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token!"
        });
    }
}


