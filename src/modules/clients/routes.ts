import { Router } from "express";
import multer from "multer";
import { ensureAuthenticateUser } from "../../middleawares/ensureAuthenticateUser";
import { ensureValidationFields } from "../../middleawares/ensureValidationFields";
import { CreateClientController } from "./useCases/createClient/CreateClientController";
import { DeleteClientController } from "./useCases/deleteClient/DeleteClientController";
import { FindByIdClientController } from "./useCases/findByIdClient/FindByIdClientController";
import { AddAvatarController } from "./useCases/updateClient/AddAvatarController";
import { AddAvatarUseCase } from "./useCases/updateClient/addAvatarUseCase";
import { UpdateRegisterClientController } from "./useCases/updateClient/UpdateRegisterClientController";

const client = Router();

const createClientController = new CreateClientController();
const updateRegisterClientController = new UpdateRegisterClientController();
const deleteClientController = new DeleteClientController();
const findByIdClient = new FindByIdClientController();
const addAvatarController = new AddAvatarController();

client.post("/", ensureValidationFields, createClientController.handle);
client.patch("/avatar", ensureAuthenticateUser, multer().single("file"), addAvatarController.handle);
client.put("/", ensureAuthenticateUser, updateRegisterClientController.handle);
client.delete("/", ensureAuthenticateUser, deleteClientController.handle);
client.get("/", ensureAuthenticateUser, findByIdClient.handle);

export { client }