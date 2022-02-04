import { Router } from "express";
import { CreateClientController } from "./useCases/createClient/CreateClientController";

const client = Router();

const createClientController = new CreateClientController();

client.post("/", createClientController.handle);

export { client }