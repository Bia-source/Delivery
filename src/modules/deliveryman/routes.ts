import { Router } from "express";
import { AuthenticateDeliverymanController } from "../account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliverymanController } from "./useCases/createDeliveryman/CreateDeliverymanController";

const deliveryman = Router();
const createDeliverymanController = new CreateDeliverymanController();

deliveryman.post("/", createDeliverymanController.handle)

export { deliveryman }