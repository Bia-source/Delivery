import { Router } from "express";
import { AuthenticateClientController } from "./useCases/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./useCases/authenticateDeliveryman/AuthenticateDeliverymanController";

const authenticate = Router();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

authenticate.post("/client",authenticateClientController.handle);
authenticate.post("/deliveryman", authenticateDeliverymanController.handle);

export { authenticate }