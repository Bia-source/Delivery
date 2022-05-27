import { Router } from "express";
import { ensureAuthenticateUser } from "../../middleawares/ensureAuthenticateUser";
import { ensureValidationFields } from "../../middleawares/ensureValidationFields";
import { validationFields } from "../../share/validators";
import { CreateClientController } from "./useCases/createClient/CreateClientController";
import { UpdateRegisterClientController } from "./useCases/updateClient/UpdateRegisterClientController";

const client = Router();

const createClientController = new CreateClientController();
const updateRegisterClientController = new UpdateRegisterClientController();

client.post("/", ensureValidationFields, createClientController.handle);
client.put("/", ensureAuthenticateUser, updateRegisterClientController.handle);

export { client }