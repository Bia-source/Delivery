import { Router } from "express";
import { ensureAuthenticateUser } from "../../middleawares/ensureAuthenticateUser";
import { AuthenticateDeliverymanController } from "../account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateDeliverymanController } from "./useCases/createDeliveryman/CreateDeliverymanController";
import { UpdateRegisterDeliverymanController } from "./useCases/updateDeliveryman/UpdateRegisterDeliverymanController";
import { ensureValidationFields } from "../../middleawares/ensureValidationFields";

const deliveryman = Router();
const createDeliverymanController = new CreateDeliverymanController();
const updateRegisterDeliverymanController = new UpdateRegisterDeliverymanController();

deliveryman.post("/", ensureValidationFields, createDeliverymanController.handle);
deliveryman.put("/", ensureAuthenticateUser, updateRegisterDeliverymanController.handle);

export { deliveryman }