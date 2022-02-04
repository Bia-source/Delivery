import { IUser } from "../interfaces";

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