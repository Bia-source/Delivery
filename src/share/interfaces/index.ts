
export interface IRequestCreate{
    username: string;
    password: string;
}

export interface IUser {
    id: string;
    username: string;
    password: string;
    email?: string;
}


export interface IRequestUpdateDelivery{
    id_delivery: string;
    id_deliveryman: string;
    email?: string;
    username?: string; 
}

export interface IRequestValidationUser{
    username: string;
    password: string;
    email: string;
}