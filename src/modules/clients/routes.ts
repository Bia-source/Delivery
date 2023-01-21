import { Router } from "express";
import { ensureAuthenticateUser } from "../../middleawares/ensureAuthenticateUser";
import { ensureValidationFields } from "../../middleawares/ensureValidationFields";
import { CreateClientController } from "./useCases/createClient/CreateClientController";
import { DeleteClientController } from "./useCases/deleteClient/DeleteClientController";
import { FindByIdClientController } from "./useCases/findByIdClient/FindByIdClientController";
import { UpdateRegisterClientController } from "./useCases/updateClient/UpdateRegisterClientController";

const client = Router();

const createClientController = new CreateClientController();
const updateRegisterClientController = new UpdateRegisterClientController();
const deleteClientController = new DeleteClientController();
const findByIdClient = new FindByIdClientController();

client.post("/", ensureValidationFields, createClientController.handle);
client.put("/", ensureAuthenticateUser, updateRegisterClientController.handle);
client.delete("/", ensureAuthenticateUser, deleteClientController.handle);
client.get("/", ensureAuthenticateUser, findByIdClient.handle);

export { client }