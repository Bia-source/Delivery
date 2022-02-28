import { Router } from "express";
import { ensureAuthenticateUser } from "../../middleawares/ensureAuthenticateUser";
import { CreateClientController } from "./useCases/createClient/CreateClientController";
import { UpdateRegisterClientController } from "./useCases/updateClient/UpdateRegisterClientController";

const client = Router();

const createClientController = new CreateClientController();
const updateRegisterClientController = new UpdateRegisterClientController();

client.post("/", createClientController.handle);
client.put("/", ensureAuthenticateUser, updateRegisterClientController.handle);

export { client }