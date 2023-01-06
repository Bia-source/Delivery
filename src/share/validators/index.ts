import { IUser, IRequestValidationUser } from "../interfaces";
import * as yup from 'yup';

export function userAlreadyExists(user: IUser | null) {
    if(!user) {
            throw new Error("Username not found!")
    }
}

export function passwordInvalid(password: boolean) {
    if(!password) {
            throw new Error("Username or password invalid")
    }
}

export function deliveryAlreadyExist(){
        throw new Error("Delivery not found!");
}

export async function validationFields(item: IRequestValidationUser){
        const schema = yup.object().shape({
              username: yup.string().required().min(6).max(15),
              password: yup.string().required().min(6).max(15),
              email: yup.string().email().required()
        });

        if(!(await schema.isValid(item))){
               throw new Error("Fails validation!");
        }
        return true;
}

export async function validationStatusDelivery(status: string) {
        if(status === "TRANSITO"){
                throw new Error('Pedido nao pode mais ser cancelado, pois já está em transito!');
        }
        if(status === "ENTREGUE"){
                throw new Error('Pedido nao pode mais ser cancelado, pois já foi entregue!');
        }
}