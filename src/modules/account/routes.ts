import { Router } from "express";
import { AuthenticateClientController } from "./authenticateClient/AuthenticateClientController";

const authenticate = Router();
const authenticateController = new AuthenticateClientController();

authenticate.post("/", authenticateController.handle);

export { authenticate }