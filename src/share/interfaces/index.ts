import { Clients } from "@prisma/client";

export interface IRequestCreate{
    username: string;
    password: string;
}

export interface IUser {
    id: string;
    username: string;
    password: string;
}